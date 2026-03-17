# ThreatPulse (Early Ransomware Tripwire)

ThreatPulse is a lightweight ransomware alarm and auto-lockdown system. It detects the behavioral patterns of ransomware (rapid file modifications, high entropy data writes, and extension changes) and instantly triggers host containment before significant encryption damage can occur.

## How to Download and Run

1. **Download the Target System Component:**
   - Go to the website's download page.
   - Enter your email, select your component (**Sensor Agent** or **Simulator**), and select your Target OS (**Windows** or **Linux**).
   - Extract the `.zip` file onto the target machine.

2. **Start the Command & Control (C2) Backend:**
   - The C2 server is included in the `Agent` zip files.
   - Open your terminal or Command Prompt and navigate to the extracted `backend` folder.
   - Install requirements and start the server:
     ```bash
     pip install -r requirements.txt
     uvicorn main:app --reload --host 0.0.0.0 --port 8000
     ```

3. **Build and Deploy the ThreatPulse Endpoint Sensor:**
   - Navigate to the extracted `agent` folder.
   - Run the automated build script for your OS. (Note: These scripts will automatically attempt to install Python and dependencies if missing):
     - **Windows:** Double-click `build_agent_windows.bat` or run it from command prompt.
     - **Linux:** Run `bash build_agent_linux.sh`
   - Once the build succeeds, a standalone executable will be generated in the `dist` folder (`ThreatPulse_Sensor.exe` or `ThreatPulse_Sensor`). 
   - Move or copy this executable to any machine (it no longer requires Python).
   - **Execute the compiled binary As Administrator (or root on Linux)** to start the endpoint monitoring.

4. **Test the Tripwire:**
   - Extract the separate Simulator package for your OS.
   - Run its build script (`build_simulator_windows.bat` or `build_simulator_linux.sh`) to generate the `ThreatPulse_Simulator` binary.
   - Run the generated Simulator binary. It will generate dummy files and simulate an attack. ThreatPulse Sensor will detect it, alert the C2, and trigger your lockdown script.

---

## ⚠️ Important: Can you decrypt the encrypted files?

**No. ThreatPulse is a PREVENTATIVE containment tool, not a decryption tool.** 

Once a real ransomware gang successfully encrypts a file with strong cryptography (like AES-256 or ChaCha20), the math makes it physically impossible to decrypt without the attacker's private key.

**How ThreatPulse saves your files instead:**
Standard antivirus tools try to catch ransomware by its "signature." By the time they realize it's malicious, your entire hard drive is gone. 

ThreatPulse watches the filesystem for the *behavior* of ransomware (e.g., a burst of files changing into high-entropy, random unrecognizable data). As soon as the first few files are rapidly altered, ThreatPulse reacts in milliseconds to **lock down the computer, sever network access, and kill the file processes** before it can encrypt the rest of your hard drive. 

**Regarding the Simulator (`simulator.py`):** 
The simulator included in this package does not actually use cryptographic keys. It simply overwrites dummy text files with completely random math bytes (`os.urandom`) to mimic what ransomware does to a file's entropy. Because it simply overwrites the files with garbage data, the dummy files created by the simulator cannot be recovered or "decrypted". **Do not point the simulator at real, important files.**
