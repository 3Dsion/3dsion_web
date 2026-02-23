import sys
import json
import subprocess
import os

def execute_task():
    server_path = r"C:\Users\Rodrigo\.local\bin\notebooklm-mcp.exe"
    plan_path = r"e:\ANTIGRAVITY\3dsion_web\docs\PLAN_PRODUCCION_VISUAL.md"
    
    with open(plan_path, 'r', encoding='utf-8') as f:
        plan_content = f.read()

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
        send({"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "execution-client", "version": "1.0.0"}}})
        receive()
        send({"jsonrpc": "2.0", "method": "notifications/initialized", "params": {}})
        
        # 2. Check if notebook exists
        send({"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "notebook_list", "arguments": {}}})
        res_list = receive()
        
        notebook_id = None
        target_title = "3DSION - Plan de Producción Visual y Metadata"
        
        if res_list and "result" in res_list and "content" in res_list["result"]:
            content = json.loads(res_list["result"]["content"][0]["text"])
            notebooks = content.get("notebooks", [])
            for nb in notebooks:
                print(f"Notebook keys: {nb.keys()}")
                if nb.get("title") == target_title:
                    notebook_id = nb.get("notebook_id") or nb.get("id")
                    print(f"Found existing notebook: {notebook_id}")
                    break
        
        # 3. Create if not found
        if not notebook_id:
            print("Creating new notebook...")
            send({"jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": {"name": "notebook_create", "arguments": {"title": target_title}}})
            res_create = receive()
            print("Full res_create response:")
            print(json.dumps(res_create, indent=2))
            if res_create and "result" in res_create and "content" in res_create["result"]:
                res_data = json.loads(res_create["result"]["content"][0]["text"])
                notebook_id = res_data.get("notebook_id")
                print(f"Created notebook: {notebook_id}")
        
        # 4. Add content
        if notebook_id:
            print("Adding content v2.0...")
            send({"jsonrpc": "2.0", "id": 4, "method": "tools/call", "params": {"name": "notebook_add_text", "arguments": {
                "notebook_id": notebook_id,
                "text": plan_content,
                "title": "Plan de Producción Visual y Metadata v2.0"
            }}})
            res_add = receive()
            print("Content added successfully.")
            print(json.dumps(res_add, indent=2))
        else:
            print("Failed to get or create notebook_id.")
        
    finally:
        process.terminate()

if __name__ == "__main__":
    execute_task()
