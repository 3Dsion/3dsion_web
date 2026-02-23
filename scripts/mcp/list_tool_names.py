import sys
import json
import subprocess

def list_mcp_tool_names():
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
        send({"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "test", "version": "1.0.0"}}})
        receive()
        send({"jsonrpc": "2.0", "method": "notifications/initialized", "params": {}})
        send({"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}})
        
        res = receive()
        if res and "result" in res and "tools" in res["result"]:
            for tool in res["result"]["tools"]:
                print(f"Tool: {tool['name']}")
        
    finally:
        process.terminate()

if __name__ == "__main__":
    list_mcp_tool_names()
