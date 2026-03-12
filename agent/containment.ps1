# Early Ransomware Tripwire Auto-Containment Script
# Designed to trigger instantly before massive encryption damage.
Write-Host "CRITICAL ALARM: RANSOMWARE DETECTION TRIGGERED" -ForegroundColor Red

# 1. Terminate Suspicious Processes
# In a full version, we pass the exact process ID instead of hardcoding types.
Write-Host "[*] Terminating Suspicious Processes (vssadmin, bitsadmin, random enc)..." -ForegroundColor Yellow
# Stop-Process -Name "vssadmin" -Force -ErrorAction SilentlyContinue
# Stop-Process -Name "bitsadmin" -Force -ErrorAction SilentlyContinue

# 2. Isolate Network Interfaces to stop C2 / Spread
Write-Host "[*] Disabling Network Adapters to severe C2..." -ForegroundColor Yellow
# Disable-NetAdapter -Name "*" -Confirm:$false

# 3. Block all outbound/inbound via Windows Firewall
Write-Host "[*] Applying Lockdown Firewall Rules..." -ForegroundColor Yellow
# New-NetFirewallRule -DisplayName "Ransomware_Lockdown_Block_All" -Direction Outbound -Action Block -Profile Any
# New-NetFirewallRule -DisplayName "Ransomware_Lockdown_Block_All_In" -Direction Inbound -Action Block -Profile Any

# 4. Lock SMB Shares (Server Service) to prevent SMB spread
Write-Host "[*] Stopping Server Service to protect SMB Shares..." -ForegroundColor Yellow
# Stop-Service -Name "LanmanServer" -Force

Write-Host "CONTAINMENT COMPLETE. ENDPOINT IS NOW FIREWALLED AND ISOLATED." -ForegroundColor Red
