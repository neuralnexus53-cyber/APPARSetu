#!/usr/bin/env python3
"""
================================================================================
  APAARSetu (SIH26263) - ONE-CLICK LAUNCHER
  Team neuroneurz | AICTE Student Data & Enrolment Verification Platform
================================================================================
Usage:
    python start_all.py

This script:
  1. Detects local & Wi-Fi IP address for testing on phones & laptops.
  2. Ensures Node.js and dependencies (npm install) are ready.
  3. Launches the website on 0.0.0.0 so anyone on your Wi-Fi can open it.
  4. Automatically opens your default web browser to the site.
  5. Displays all live links, demo credentials, and a QR code helper.
================================================================================
"""

import os
import sys
import time
import socket
import subprocess
import webbrowser
import threading
from http.server import HTTPServer, BaseHTTPRequestHandler
import json

# Terminal ANSI colors
GREEN = "\033[92m"
BLUE = "\033[94m"
CYAN = "\033[96m"
YELLOW = "\033[93m"
BOLD = "\033[1m"
RESET = "\033[0m"

# Enable VT100 colors on Windows cmd/powershell
if os.name == 'nt':
    os.system('')

def get_wifi_ip():
    """Detect the machine's local Wi-Fi / LAN IP address."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.5)
        # Connect to public DNS to discover outbound interface
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        try:
            return socket.gethostbyname(socket.gethostname())
        except Exception:
            return "127.0.0.1"

def find_project_dir():
    """Locate the React application folder containing package.json."""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Check current directory
    if os.path.exists(os.path.join(current_dir, "package.json")) and os.path.exists(os.path.join(current_dir, "src")):
        return current_dir
        
    # Check apar2.o subfolder
    sub_dir = os.path.join(current_dir, "apar2.o")
    if os.path.exists(os.path.join(sub_dir, "package.json")):
        return sub_dir
        
    return current_dir

class MockAPIServer(BaseHTTPRequestHandler):
    """Lightweight built-in backend mock API server for verification & testing."""
    def log_message(self, format, *args):
        # Silence verbose request logging to keep terminal clean
        return

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        if self.path == '/api/health':
            response = {
                "status": "ONLINE",
                "service": "APAARSetu AICTE Backend Engine",
                "version": "2.0-SIH26263",
                "deterministic_rules": ["IDX_CONCURRENT_ENROLLMENT", "RULE_NRI_QUOTA_OVERFLOW", "W3C_ED25519_VERIFIER"],
                "dpdp_compliant": True
            }
        else:
            response = {"message": "APAARSetu Mock API is live", "path": self.path}
            
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        response = {
            "status": "PROCESSED",
            "message": "Demo API response processed",
            "timestamp": time.time()
        }
        self.wfile.write(json.dumps(response).encode('utf-8'))

def start_mock_backend(port=8000):
    try:
        server = HTTPServer(('0.0.0.0', port), MockAPIServer)
        server.serve_forever()
    except Exception:
        pass

def print_banner(local_ip, port=5173):
    banner = f"""
{BOLD}{CYAN}================================================================================
          APAARSetu (SIH26263) • ONE-CLICK FULL PLATFORM RUNNER
          Team neuroneurz • AICTE National Enrolment Control Room
================================================================================{RESET}

{GREEN}{BOLD}🚀 PLATFORM ACTIVE & LISTENING ON LOCALHOST & WI-FI:{RESET}

  {BOLD}💻 LOCAL PC LINK:{RESET}
     {CYAN}{BOLD}http://localhost:{port}/{RESET}

  {BOLD}📱 WI-FI / PHONE / OTHER LAPTOP LINK:{RESET}
     {GREEN}{BOLD}http://{local_ip}:{port}/{RESET}
     {YELLOW}ℹ️  Connect any mobile or laptop to the same Wi-Fi and open this URL!{RESET}

  {BOLD}🌐 OFFICIAL CLOUD LIVE LINK:{RESET}
     {BLUE}https://neuralnexus53-cyber.github.io/APPARSetu{RESET}

{BOLD}--------------------------------------------------------------------------------{RESET}
{BOLD}🔑 1-CLICK DEMO ACCOUNTS (ON LOGIN PAGE):{RESET}
  • {BOLD}Institution Operator:{RESET} institution@demo.com  (CSV Ingest, QR Issuance)
  • {BOLD}AICTE Reviewer:{RESET}       aicte@demo.com        (Quota & Double-Admission Radar)
  • {BOLD}Administrator:{RESET}        admin@demo.com        (System Health, Access)
  • {BOLD}Auditor:{RESET}              auditor@demo.com      (Tamper-Proof DPDP Ledger)
  * {YELLOW}No password typing required — click "Enter ➔" on the Login page.{RESET}
{BOLD}--------------------------------------------------------------------------------{RESET}
{YELLOW}Press Ctrl + C in this terminal anytime to stop the server.{RESET}
"""
    print(banner)

def main():
    proj_dir = find_project_dir()
    wifi_ip = get_wifi_ip()
    port = 5173
    backend_port = 8000

    print(f"\n{BOLD}{CYAN}[1/4] Checking project environment...{RESET}")
    print(f"      Working directory: {proj_dir}")

    # Check for npm
    npm_cmd = "npm.cmd" if os.name == 'nt' else "npm"
    try:
        subprocess.run([npm_cmd, "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
    except Exception:
        print(f"{YELLOW}Warning: Node.js/npm was not detected on PATH. Make sure Node.js is installed.{RESET}")

    # Check for node_modules
    if not os.path.exists(os.path.join(proj_dir, "node_modules")):
        print(f"{YELLOW}[!] node_modules missing. Automatically installing dependencies (npm install)...{RESET}")
        try:
            subprocess.run([npm_cmd, "install"], cwd=proj_dir, check=True)
        except Exception as e:
            print(f"Error during npm install: {e}")

    # Start optional background mock API
    print(f"{BOLD}{CYAN}[2/4] Starting local lightweight backend engine (port {backend_port})...{RESET}")
    t = threading.Thread(target=start_mock_backend, args=(backend_port,), daemon=True)
    t.start()

    # Print the connection URLs & guide
    print_banner(wifi_ip, port)

    # Automatically open browser
    def open_browser():
        time.sleep(1.2)
        try:
            webbrowser.open(f"http://localhost:{port}/")
        except Exception:
            pass

    threading.Thread(target=open_browser, daemon=True).start()

    # Launch Vite with host binding
    print(f"{BOLD}{GREEN}[3/4] Launching Vite development server (Host: 0.0.0.0, Port: {port})...{RESET}\n")
    try:
        vite_cmd = [npm_cmd, "run", "dev", "--", "--host", "0.0.0.0", "--port", str(port)]
        subprocess.run(vite_cmd, cwd=proj_dir)
    except KeyboardInterrupt:
        print(f"\n{BOLD}{CYAN}Shutdown requested. Server stopped successfully. Goodbye!{RESET}\n")
        sys.exit(0)

if __name__ == "__main__":
    main()
