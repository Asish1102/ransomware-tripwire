import collections
import time
import requests
from containment import trigger_containment

class DetectionEngine:
    def __init__(self, window_size=5, rename_threshold=20, write_threshold=30):
        self.window_size = window_size
        self.rename_threshold = rename_threshold
        self.write_threshold = write_threshold
        self.events = collections.deque()
        self.backend_url = "http://localhost:8000/alerts"
        self.last_trigger_time = 0 
        
    def log_event(self, event):
        self.events.append(event)
        
    def evaluate_window(self):
        current_time = time.time()
        
        while self.events and current_time - self.events[0]["timestamp"] > self.window_size:
            self.events.popleft()
            
        write_count = 0
        rename_count = 0
        high_entropy_writes = 0
        
        for e in self.events:
            if e["type"] in ["created", "modified"]:
                write_count += 1
                if e["entropy"] > 7.0:
                    high_entropy_writes += 1
            elif e["type"] == "rename":
                rename_count += 1
                if e["filepath"].endswith(".locked") or e["filepath"].endswith(".enc"):
                    rename_count += 5
                    
        if (write_count > self.write_threshold or 
            rename_count > self.rename_threshold or 
            high_entropy_writes > (self.write_threshold / 2)):
            
            if current_time - self.last_trigger_time > 10:
                self.trigger_alert(write_count, rename_count, high_entropy_writes)
                self.last_trigger_time = current_time
            
    def trigger_alert(self, writes, renames, entropy_writes):
        print("\n[!] ===================================== [!]")
        print("[!] RANSOMWARE BEHAVIOR DETECTED")
        print(f"  - Writes in last {self.window_size}s: {writes}")
        print(f"  - Renames in last {self.window_size}s: {renames}")
        print(f"  - High Entropy Writes: {entropy_writes}")
        print("[!] ===================================== [!]\n")
        
        self.events.clear()
        
        try:
            requests.post(self.backend_url, json={
                "alert_type": "behavioral_threshold_exceeded",
                "severity": "critical",
                "details": {
                    "writes_in_window": writes,
                    "renames_in_window": renames,
                    "high_entropy_writes": entropy_writes,
                    "window_size_seconds": self.window_size
                }
            })
            print("[*] Alert sent to C2 backend successful.")
        except Exception as e:
            print("[x] Failed to send alert to backend (Is it running?):", str(e))
            
        trigger_containment()
