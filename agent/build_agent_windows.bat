@echo off
python --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [*] Python not found! Downloading Python 3.11...
    curl -# -o python_installer.exe https://www.python.org/ftp/python/3.11.8/python-3.11.8-amd64.exe
    echo [*] Installing Python silently. This may take a few minutes...
    start /wait python_installer.exe /quiet InstallAllUsers=0 PrependPath=1 Include_test=0
    echo [*] Python installed! Please close this window, open a new one, and restart this script so it can detect Python.
    del python_installer.exe
    pause
    exit /b
)

echo [*] Installing requirements...
pip install -r requirements.txt
echo [*] Building ThreatPulse Sensor...
pyinstaller --noconfirm --onefile --console --name ThreatPulse_Sensor --add-data "containment.ps1;." sensor.py
echo [*] Build Complete! Executable is in "dist" folder.
pause
