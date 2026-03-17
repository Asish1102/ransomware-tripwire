#!/bin/bash
echo "[*] Installing requirements..."
pip3 install -r requirements.txt
echo "[*] Building ThreatPulse Simulator..."
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Simulator simulator.py
echo "[*] Build Complete! Executable is in 'dist' folder."
