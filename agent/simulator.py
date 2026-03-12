import os
import time

def simulate_ransomware(target_dir):
    print(f"[*] Starting Safe Ransomware Simulation in '{target_dir}'")
    os.makedirs(target_dir, exist_ok=True)
    
    # Generate some dummy files
    print("[*] Generating dummy files for encryption...")
    for i in range(50):
        filepath = os.path.join(target_dir, f"document_{i}.txt")
        with open(filepath, "w") as f:
            f.write("This is a very important document that should not be encrypted.\n" * 10)
    
    time.sleep(2)
    print("\n[!] INITIATING FAKE ENCRYPTION SCRIPT [!]")
    
    # Rapid writes, high entropy, renames
    files = [f for f in os.listdir(target_dir) if f.endswith(".txt")]
    for filename in files:
        filepath = os.path.join(target_dir, filename)
        
        # 1. Write high entropy random data to simulate encryption
        try:
            with open(filepath, "wb") as f:
                f.write(os.urandom(8192))
                
            # 2. Rename the extension
            new_filepath = filepath + ".locked"
            os.rename(filepath, new_filepath)
            print(f"Encrypted and locked: {filename}")
        except Exception:
            pass
        
        # Sleep minimally to simulate burst behavior
        time.sleep(0.01)

if __name__ == "__main__":
    simulate_ransomware("./watch_folder")
