import sys
import json
import subprocess
import time

def call_mcp():
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
                "clientInfo": {"name": "debug-client", "version": "1.0.0"}
            }
        })
        init_res = receive()
        
        # 2. Initialized
        send({
            "jsonrpc": "2.0",
            "method": "notifications/initialized",
            "params": {}
        })
        
        # 3. Query Notebook
        query_req = {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "tools/call",
            "params": {
                "name": "notebook_query",
                "arguments": {
                    "notebook_id": "d639c10c-85e0-4f71-83aa-6c82dcb45df2",
                    "query": "Resume detalladamente el ADN del cliente ideal, sus puntos de dolor, y los pilares de la estrategia SEO definidos en este cuaderno para 3Dsion."
                }
            }
        }
        send(query_req)
        
        # Read responses
        all_res = []
        while True:
            res = receive()
            if not res:
                break
            all_res.append(res)
            if res.get("id") == 2:
                break
        
        # Print the content from the result
        if all_res and "result" in all_res[-1]:
            content = all_res[-1]["result"].get("content", [])
            for item in content:
                if item.get("type") == "text":
                    print("--- STRATEGY START ---")
                    print(item.get("text"))
                    print("--- STRATEGY END ---")
        
        with open("e:/ANTIGRAVITY/3dsion_web/notebook_strategy.json", "w", encoding="utf-8") as f:
            json.dump(all_res, f, indent=2)
        
    finally:
        process.terminate()

if __name__ == "__main__":
    call_mcp()
