import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";
const server = createServer(false);
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("ANTANI MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    console.error(error.stack);
    process.exit(1);
});
