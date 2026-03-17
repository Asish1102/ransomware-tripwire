#!/bin/bash
echo "==============================================="
echo "[*] INITIATING LINUX AUTO-CONTAINMENT PROTOCOLS"
echo "==============================================="
echo "[!] -> Killing suspicious process tree..."
sleep 1
echo "[!] -> Disabling main network interfaces..."
# iptables -A INPUT -j DROP (Simulated)
echo "[!] -> System contained."
