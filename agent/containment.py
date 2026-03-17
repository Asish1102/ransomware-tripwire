import subprocess
import os
import platform
import sys

def get_base_path():
    if hasattr(sys, '_MEIPASS'):
        return sys._MEIPASS
    return os.path.dirname(os.path.abspath(__file__))

def trigger_containment():
    print("[*] INITIATING AUTO-CONTAINMENT PROTOCOLS [*]")
    
    if platform.system() == "Windows":
        script_path = os.path.join(get_base_path(), "containment.ps1")
        if os.path.exists(script_path):
            try:
                # WARNING: Executing this will legitimately execute the isolation scripts.
                print(f"[!] Executing Containment Script: {script_path}")
                subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", script_path])
                print("[!] Local endpoint isolation executed.")
            except Exception as e:
                print(f"[x] Containment execution failed: {e}")
        else:
            print(f"[x] Containment script not found at {script_path}")
    else:
        script_path = os.path.join(get_base_path(), "containment.sh")
        if os.path.exists(script_path):
            try:
                print(f"[!] Executing Containment Script: {script_path}")
                subprocess.run(["bash", script_path])
                print("[!] Local endpoint isolation executed.")
            except Exception as e:
                print(f"[x] Containment execution failed: {e}")
        else:
            print(f"[x] Containment script not found at {script_path}")
