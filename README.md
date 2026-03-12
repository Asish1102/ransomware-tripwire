# ThreatPulse (Early Ransomware Tripwire)

ThreatPulse is a lightweight ransomware alarm and auto-lockdown system. It detects the behavioral patterns of ransomware (rapid file modifications, high entropy data writes, and extension changes) and instantly triggers host containment before significant encryption damage can occur.

## How to Download and Run on Windows

1. **Download the Tool:**
   - Go to the website's download page (`http://localhost:3000/download`).
   - Enter your email and download the `ThreatPulse.zip` package.
   - Extract the `.zip` file into a folder on your Windows machine.

2. **Prerequisites:**
   - Install **Python 3.9+** on your Windows machine. During installation, make sure to check the box that says **"Add Python to PATH"**.

3. **Start the Command & Control (C2) Backend:**
   - Open Command Prompt or PowerShell and navigate to the extracted `backend` folder.
   - Create a virtual environment and start the server:
     ```cmd
     python -m venv venv
     venv\Scripts\activate
     pip install -r requirements.txt
     uvicorn main:app --reload --host 0.0.0.0 --port 8000
     ```

4. **Start the ThreatPulse Endpoint Sensor:**
   - *Note: Administrator privileges are required for the containment script to disable network adapters and configure the Windows Firewall.*
   - Open a **new** Command Prompt or PowerShell window **As Administrator**.
   - Navigate to the extracted `agent` folder.
     ```cmd
     python -m venv venv
     venv\Scripts\activate
     pip install -r requirements.txt
     ```
   - **Important Safety Note on Auto-Containment:** By default, the actual network-killing commands in `agent/containment.ps1` and `agent/containment.py` are commented out so you don't accidentally knock yourself offline while testing. If you want full lockdown capabilities, open `agent/containment.py` and uncomment the `subprocess.run` line, and open `agent/containment.ps1` and uncomment the `Disable-NetAdapter` and `New-NetFirewallRule` lines.
   - Run the sensor:
     ```cmd
     python sensor.py
     ```
   - It will create a `watch_folder` and begin monitoring it.

5. **Test the Tripwire:**
   - Open a third Command prompt, activate the agent venv, and run the simulator inside the `agent` folder:
     ```cmd
     python simulator.py
     ```
   - The simulator will generate dummy files and simulate an attack. ThreatPulse will detect it, alert the C2, and trigger the lockdown script.

---

## ⚠️ Important: Can you decrypt the encrypted files?

**No. ThreatPulse is a PREVENTATIVE containment tool, not a decryption tool.** 

Once a real ransomware gang successfully encrypts a file with strong cryptography (like AES-256 or ChaCha20), the math makes it physically impossible to decrypt without the attacker's private key.

**How ThreatPulse saves your files instead:**
Standard antivirus tools try to catch ransomware by its "signature." By the time they realize it's malicious, your entire hard drive is gone. 

ThreatPulse watches the filesystem for the *behavior* of ransomware (e.g., a burst of files changing into high-entropy, random unrecognizable data). As soon as the first few files are rapidly altered, ThreatPulse reacts in milliseconds to **lock down the computer, sever network access, and kill the file processes** before it can encrypt the rest of your hard drive. 

**Regarding the Simulator (`simulator.py`):** 
The simulator included in this package does not actually use cryptographic keys. It simply overwrites dummy text files with completely random math bytes (`os.urandom`) to mimic what ransomware does to a file's entropy. Because it simply overwrites the files with garbage data, the dummy files created by the simulator cannot be recovered or "decrypted". **Do not point the simulator at real, important files.**
