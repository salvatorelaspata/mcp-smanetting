import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getPlannedOrders } from "./api/plannedOrder.js";
// import { apiPlannedOrders, PlannedOrder } from './generated/API_PLANNED_ORDERS';
// const { plannedOrderApi } = apiPlannedOrders();
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const BASE_URL = process.env.BASE_URL;
console.log(process.env);
if (!USERNAME || !PASSWORD || !BASE_URL) {
    console.error(`Missing environment variables USERNAME=${USERNAME}, PASSWORD=${PASSWORD}, BASE_URL=${BASE_URL}`);
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
    var { __count, results } = await getPlannedOrders({ USERNAME, PASSWORD, BASE_URL });
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
        // formatta i planned order in testo markdown per restituirli in un formato leggibile
        // Available values : PlannedOrder, PlannedOrderType, PlannedOrderProfile, Material, MaterialName, ProductionPlant, MRPPlant, MRPArea, ProductionVersion, MaterialProcurementCategory, MaterialProcurementType, StorageLocation, BaseUnit, TotalQuantity, PlndOrderPlannedScrapQty, GoodsReceiptQty, IssuedQuantity, PlndOrderPlannedStartDate, PlndOrderPlannedStartTime, PlndOrderPlannedEndDate, PlndOrderPlannedEndTime, PlannedOrderOpeningDate, LastChangeDateTime, ProductionStartDate, ProductionEndDate, SalesOrder, SalesOrderItem, Customer, WBSElementInternalID, WBSElement, WBSDescription, AccountAssignmentCategory, Reservation, MRPController, ProductionSupervisor, PurchasingGroup, PurchasingOrganization, FixedSupplier, PurchasingDocument, PurchasingDocumentItem, QuotaArrangement, QuotaArrangementItem, SupplierName, PlannedOrderIsFirm, PlannedOrderIsConvertible, PlannedOrderBOMIsFixed, PlannedOrderCapacityIsDsptchd, CapacityRequirement, CapacityRequirementOrigin, BillOfOperationsType, BillOfOperationsGroup, BillOfOperations, LastScheduledDate, ScheduledBasicEndDate, ScheduledBasicEndTime, ScheduledBasicStartDate, ScheduledBasicStartTime, SchedulingType, to_PlannedOrderCapacity, to_PlannedOrderComponent
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
