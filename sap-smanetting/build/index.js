import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getPlannedOrders } from "./api/plannedOrder.js";
// import { apiPlannedOrders, PlannedOrder } from './generated/API_PLANNED_ORDERS';
// const { plannedOrderApi } = apiPlannedOrders();
import path from "path";
import { fileURLToPath } from 'url';
// Load environment variables from .env file
import dotenv from "dotenv";
// Determina il percorso corretto del file indipendentemente da dove viene eseguito
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
console.error("File path:", __filename);
console.error("Directory path:", __dirname);
console.error("Root directory:", rootDir);
// Carica il file .env dalla directory root dell'applicazione SAP-SManetting
dotenv.config({ path: path.join(rootDir, '.env') });
// Use SAP_ prefix to avoid collision with system environment variables
const SAP_USERNAME = process.env.SAP_USERNAME;
const SAP_PASSWORD = process.env.SAP_PASSWORD;
const SAP_BASE_URL = process.env.SAP_BASE_URL;
// Debug output for development purposes (consider removing in production)
console.error("Environment variables loaded:", {
    SAP_USERNAME: SAP_USERNAME ? "***" : undefined,
    SAP_PASSWORD: SAP_PASSWORD ? "***" : undefined,
    SAP_BASE_URL: SAP_BASE_URL,
});
if (!SAP_USERNAME || !SAP_PASSWORD || !SAP_BASE_URL) {
    console.error(`
Error: Missing SAP credentials in environment variables.
Please make sure to set the following variables in your .env file:

SAP_USERNAME
SAP_PASSWORD
SAP_BASE_URL

Current values:
SAP_USERNAME=${SAP_USERNAME ? '***' : 'undefined'}
SAP_PASSWORD=${SAP_PASSWORD ? '***' : 'undefined'} 
SAP_BASE_URL=${SAP_BASE_URL || 'undefined'}
`);
    process.exit(1);
}
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
server.tool("get-sap-planned-orders-list", "Get list of planned orders in sap", {
    provide: z.string().describe("The provider to use"),
}, async ({ provide }) => {
    if (provide.toLocaleLowerCase() !== "sap" && provide.toLocaleLowerCase() !== "default") {
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
    var { __count, results } = await getPlannedOrders({
        USERNAME: SAP_USERNAME,
        PASSWORD: SAP_PASSWORD,
        BASE_URL: SAP_BASE_URL
    });
    // Check if the data is empty
    if (results.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: "No planned orders found.",
                },
            ],
        };
    }
    else {
        // formatta i planned order in testo markdown per restituirli in un formato leggibile
        // Available values : PlannedOrder, PlannedOrderType, PlannedOrderProfile, Material, MaterialName, ProductionPlant, MRPPlant, MRPArea, ProductionVersion, MaterialProcurementCategory, MaterialProcurementType, StorageLocation, BaseUnit, Total Quantity, PlndOrderPlannedScrapQty, Goods Receipt Qty, Issued Quantity, PlndOrderPlannedStartDate, PlndOrderPlannedStartTime, PlndOrderPlannedEndDate, PlndOrderPlannedEndTime, PlannedOrderOpeningDate, LastChangeDateTime, ProductionStartDate, ProductionEndDate, SalesOrder, SalesOrderItem, Customer, WBSElementInternalID, WBSElement, WBSDescription, AccountAssignmentCategory, Reservation, MRPController, ProductionSupervisor, PurchasingGroup, PurchasingOrganization, FixedSupplier, PurchasingDocument, PurchasingDocumentItem, QuotaArrangement, QuotaArrangementItem, SupplierName, PlannedOrderIsFirm, PlannedOrderIsConvertible, PlannedOrderBOMIsFixed, PlannedOrderCapacityIsDsptchd, CapacityRequirement, CapacityRequirementOrigin, BillOfOperationsType, BillOfOperationsGroup, BillOfOperations, LastScheduledDate, ScheduledBasicEndDate, ScheduledBasicEndTime, ScheduledBasicStartDate, ScheduledBasicStartTime, SchedulingType, to_PlannedOrderCapacity, to_PlannedOrderComponent
        const formatted = results.map((plannedOrder) => {
            return `Planned Order: ${plannedOrder.PlannedOrder}, Material: ${plannedOrder.Material}, Material Name: ${plannedOrder.MaterialName}, Production Plant: ${plannedOrder.ProductionPlant}, MRP Plant: ${plannedOrder.MRPPlant}, MRP Area: ${plannedOrder.MRPArea}, Production Version: ${plannedOrder.ProductionVersion}, Material Procurement Category: ${plannedOrder.MaterialProcurementCategory}, Material Procurement Type: ${plannedOrder.MaterialProcurementType}, Storage Location: ${plannedOrder.StorageLocation}, Base Unit: ${plannedOrder.BaseUnit}, Total Quantity: ${plannedOrder.TotalQuantity}, Planned Order Planned Scrap Qty: ${plannedOrder.PlndOrderPlannedScrapQty}, Goods Receipt Qty: ${plannedOrder.GoodsReceiptQty}, Issued Quantity: ${plannedOrder.IssuedQuantity}, Planned Order Planned Start Date: ${plannedOrder.PlndOrderPlannedStartDate}, Planned Order Planned Start Time: ${plannedOrder.PlndOrderPlannedStartTime}, Planned Order Planned End Date: ${plannedOrder.PlndOrderPlannedEndDate}, Planned Order Planned End Time: ${plannedOrder.PlndOrderPlannedEndTime}`;
        });
        const text = `Total planned orders: ${__count}\n\nPlanned Orders:\n\n${formatted.join("\n")}`;
        return {
            content: [
                {
                    type: "text",
                    text: text,
                },
            ],
        };
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("SAP MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
