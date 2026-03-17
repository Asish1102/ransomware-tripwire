@echo off
echo [*] Installing requirements...
pip install -r requirements.txt
echo [*] Building ThreatPulse Sensor...
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Sensor --add-data "containment.ps1;." sensor.py
echo [*] Build Complete! Executable is in "dist" folder.
pause
