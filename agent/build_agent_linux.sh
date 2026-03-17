#!/bin/bash
if ! command -v python3 &> /dev/null; then
    echo "[*] Python3 not found. Attempting to install..."
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y python3 python3-pip python3-venv
    elif command -v dnf &> /dev/null; then
        sudo dnf install -y python3 python3-pip
    elif command -v yum &> /dev/null; then
        sudo yum install -y python3 python3-pip
    elif command -v pacman &> /dev/null; then
        sudo pacman -S --noconfirm python python-pip
    else
        echo "[!] Auto-install failed. Please install Python 3 manually."
        exit 1
    fi
fi

echo "[*] Installing requirements..."
pip3 install -r requirements.txt --break-system-packages 2>/dev/null || pip3 install -r requirements.txt
echo "[*] Building ThreatPulse Sensor..."
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Sensor --add-data "containment.sh:." sensor.py
echo "[*] Build Complete! Executable is in 'dist' folder."
