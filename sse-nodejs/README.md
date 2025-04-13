npx @modelcontextprotocol/inspector node build/sse.js
or
node build/sse.js

claude_desktop_config.json

```json
  "antani-sse": {
    "command": "npx",
    "args": [
      "mcp-remote",
      "http://localhost:9999/sse"
    ]
  },
  "antani-smanetting": {
    "command": "node",
    "args": [
      "/<absolute_path>/mpc-smanetting/sse-nodejs/build/stdio.js"
    ]
  }
```

