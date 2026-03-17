#!/bin/bash
echo "[*] Installing requirements..."
pip3 install -r requirements.txt
echo "[*] Building ThreatPulse Sensor..."
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Sensor --add-data "containment.sh:." sensor.py
echo "[*] Build Complete! Executable is in 'dist' folder."
