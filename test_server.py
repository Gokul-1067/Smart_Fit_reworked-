import subprocess
import time
import json

# Start local server on 8090
server = subprocess.Popen(["python", "-m", "http.server", "8090", "--bind", "127.0.0.1"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
time.sleep(1)

test_script = """
const puppeteer = require('puppeteer');
"""

# Let's run a python script using urllib or msedge headless
try:
    import urllib.request
    res = urllib.request.urlopen("http://127.0.0.1:8090/index.html")
    print("Server responded with code:", res.getcode())
except Exception as e:
    print("Error:", e)
finally:
    server.terminate()
