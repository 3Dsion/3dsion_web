import sys
import json
import subprocess

def list_mcp_tools():
    server_path = r"C:\Users\Rodrigo\.local\bin\notebooklm-mcp.exe"
    
    process = subprocess.Popen(
        [server_path],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        bufsize=0
    )
    
    def send(msg):
        process.stdin.write((json.dumps(msg) + "\n").encode('utf-8'))
        process.stdin.flush()

    def receive():
        line = process.stdout.readline()
        if line:
            return json.loads(line.decode('utf-8'))
        return None

    try:
        # 1. Initialize
        send({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",
                "capabilities": {},
                "clientInfo": {"name": "list-tools-client", "version": "1.0.0"}
            }
        })
        receive() # initialize response
        
        # 2. Initialized
        send({
            "jsonrpc": "2.0",
            "method": "notifications/initialized",
            "params": {}
        })
        
        # 3. List Tools
        send({
            "jsonrpc": "2.0",
            "id": 2,
            "method": "tools/list",
            "params": {}
        })
        
        res2 = receive()
        print(json.dumps(res2, indent=2))
        
    finally:
        process.terminate()

if __name__ == "__main__":
    list_mcp_tools()
