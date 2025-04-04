import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getPlannedOrders } from "./api/plannedOrder.js";
// import { apiPlannedOrders, PlannedOrder } from './generated/API_PLANNED_ORDERS';
// const { plannedOrderApi } = apiPlannedOrders();

// Create server instance
const server = new McpServer({
  name: "sap-planned-orders",
  description: "Get planned orders from SAP",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool(
  "get-sap-planned-orders-list",
  "Get list of planned orders in sap",
  {
    provide: z.enum(["sap"]),
  },
  async ({ provide }) => {
    if (provide !== "sap") {
      return {
        content: [
          {
            type: "text",
            text: "This tool is only available for SAP.",
          },
        ],
      };
    }
    // Get grid point data
    var plannedOrders = await getPlannedOrders();
    // Check if the data is empty
    if (plannedOrders.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: "No planned orders found.",
          },
        ],
      };
    } else {
      // formatta i planned order in testo markdown per restituirli in un formato leggibile

      // Create a table with the planned orders
      return {
        content: [
          {
            type: "text",
            text: `questo è il formato json dei planned order estratti: ${JSON.stringify(plannedOrders, null, 2)}`,
          },
        ],
      };
    }
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});