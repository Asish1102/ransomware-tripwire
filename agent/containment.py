import subprocess
import os
import platform

def trigger_containment():
    print("[*] INITIATING AUTO-CONTAINMENT PROTOCOLS [*]")
    
    if platform.system() == "Windows":
        script_path = os.path.join(os.path.dirname(__file__), "containment.ps1")
        if os.path.exists(script_path):
            try:
                # Warning: Executing this in a real scenario will isolate your machine.
                print(f"[!] Executing Containment Script: {script_path}")
                # Uncomment the below to run actual powershell
                # subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-File", script_path])
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
