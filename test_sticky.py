import subprocess
import time
import os

# Let's test using Edge headless to take a screenshot or inspect console
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(edge_path):
    edge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

print("Edge exists:", os.path.exists(edge_path))

# Let's start the server
server = subprocess.Popen(["python", "-m", "http.server", "8099", "--bind", "127.0.0.1"])
time.sleep(1)

try:
    # Run Edge headless to screenshot at scroll
    cmd = [
        edge_path,
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1280,800",
        "--screenshot=screenshot_top.png",
        "http://127.0.0.1:8099/index.html"
    ]
    subprocess.run(cmd, capture_output=True, timeout=10)
    print("Screenshot top created:", os.path.exists("screenshot_top.png"))
except Exception as e:
    print("Edge run error:", e)
finally:
    server.terminate()
