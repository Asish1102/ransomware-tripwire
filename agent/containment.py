import subprocess
import os
import platform

def trigger_containment():
    print("[*] INITIATING AUTO-CONTAINMENT PROTOCOLS [*]")
    
    if platform.system() == "Windows":
        script_path = os.path.join(os.path.dirname(__file__), "containment.ps1")
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
        print("[!] Not running on Windows. Simulating defensive containment operations.")
        print("[!] -> Killed suspicious process tree.")
        print("[!] -> Disabled main network interfaces.")
        print("[!] -> System contained.")
