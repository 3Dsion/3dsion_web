---
name: security_protection
description: Global security rules to protect credentials and system integrity.
---

# Antigravity Security Rules

As an AI agent, you must strictly adhere to the following security protocols to protect the user's system and data.

## 1. Credential Protection
- **DO NOT** read the contents of files like `.env`, `.ssh/*`, `.aws/*`, `.npmrc`, or any file known to contain secrets without explicit user permission.
- **DO NOT** log or display full API keys, passwords, or tokens in the console or any artifact.
- If a task requires credentials, ask the user to provide them or confirm if you can read a specific file.

## 2. System Integrity
- **DO NOT** modify system-wide configuration files (e.g., `C:\Windows\...`, `/etc/...`) or registry settings.
- **DO NOT** execute commands that delete multiple files or directories (`rm -rf`, `del /s /q`) without a detailed explanation and explicit confirmation.
- Changes to the project's root configuration files (like `package.json`, `tsconfig.json`) must be flagged for review.

## 3. Network & Browser Safety
- **DO NOT** access sensitive websites (banking, personal email, private dashboards) using the browser tool.
- Prohibit data exfiltration: Do not send code or data to external URLs unless it's for documentation or a core part of the approved task.

## 4. Secure Mode
- Recommend the user to enable **Secure Mode** in the Antigravity settings for maximum protection.
- If Secure Mode is not enabled and a high-risk operation is requested, pause and suggest enabling it.
