import time
import os
import math
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from detector import DetectionEngine

def calculate_entropy(file_path):
    try:
        if not os.path.exists(file_path):
            return 0.0
        with open(file_path, "rb") as f:
            data = f.read(8192) # Read a chunk for fast processing
            if not data:
                return 0.0
            entropy = 0
            for x in range(256):
                p_x = float(data.count(x)) / len(data)
                if p_x > 0:
                    entropy += - p_x * math.log2(p_x)
            return entropy
    except Exception:
        return 0.0

class RansomwareTripwireHandler(FileSystemEventHandler):
    def __init__(self, detector):
        super().__init__()
        self.detector = detector

    def process_event(self, event, event_type):
        if event.is_directory:
            return
        
        filepath = event.dest_path if event_type == "rename" else event.src_path
        entropy = calculate_entropy(filepath) if event_type in ["modified", "created"] else 0.0
        
        self.detector.log_event({
            "timestamp": time.time(),
            "type": event_type,
            "filepath": filepath,
            "entropy": entropy
        })

    def on_modified(self, event):
        self.process_event(event, "modified")

    def on_created(self, event):
        self.process_event(event, "created")

    def on_deleted(self, event):
        self.process_event(event, "deleted")

    def on_moved(self, event):
        self.process_event(event, "rename")

def start_sensor(path_to_watch, detector_engine):
    event_handler = RansomwareTripwireHandler(detector_engine)
    observer = Observer()
    observer.schedule(event_handler, path_to_watch, recursive=True)
    observer.start()
    print(f"[*] Windows Telemetry Sensor started. Watching '{path_to_watch}'")
    try:
        while True:
            time.sleep(1)
            detector_engine.evaluate_window()
    except KeyboardInterrupt:
        observer.stop()
        print("\n[*] Sensor stopped.")
    observer.join()

if __name__ == "__main__":
    detector = DetectionEngine()
    test_dir = "./watch_folder"
    os.makedirs(test_dir, exist_ok=True)
    start_sensor(test_dir, detector)
