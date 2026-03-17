@echo off
echo [*] Installing requirements...
pip install -r requirements.txt
echo [*] Building ThreatPulse Simulator...
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Simulator simulator.py
echo [*] Build Complete! Executable is in "dist" folder.
pause
