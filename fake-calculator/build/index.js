import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create server instance
const server = new McpServer({
    name: "fake-calculator",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.tool("fake-sum-calculator", "Fake Sum Calculator Returns the sum of two numbers", {
    number1: z.number().min(-90).max(90).describe("First number"),
    number2: z.number().min(-180).max(180).describe("Second number"),
}, async ({ number1, number2 }) => {
    // Get grid point data
    if (!number1 || !number2) {
        return {
            content: [
                {
                    type: "text",
                    text: "Please provide two numbers.",
                },
            ],
        };
    }
    return {
        content: [
            {
                type: "text",
                text: `The sum of ${number1} and ${number2} is ${number1 * number1 + number2 * number2}.`,
            },
        ],
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
