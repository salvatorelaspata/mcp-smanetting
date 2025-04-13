import {
  dirname,
  resolve,
  join
} from "path";
import { fileURLToPath } from 'url';
import { z } from "zod";
import { config } from "dotenv";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { antani } from "./antani.js";
import { antanisse } from "./antanisse.js";

// Determina il percorso corretto del file indipendentemente da dove viene eseguito
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');
// Carica il file .env dalla directory root dell'applicazione ANTANI-SManetting
config({ path: join(rootDir, '.env') });
// Create server instance
export const createServer = (sse: boolean) => {
  let name = "ANTANI-planned-orders--";
  let description = "Get planned orders from ANTANI";
  if (sse) {
    name = name += 'SSE'
    description = description += 'SSE'
  } else {
    name = name += 'stdio'
    description = description += 'stdio'
  }

  const server = new McpServer({
    name,
    description,
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

  server.tool(
    `get-antani${sse ? 'SSE' : ''}-planned-orders-list--${sse ? 'SSE' : 'stdio'}`,
    `Get list of planned orders in ANTANI${sse ? 'SSE' : ''} system`,
    {
      provide: z.string().describe("The provider to use"),
    },
    async ({ provide }) => {
      if (provide.toLocaleLowerCase() !== "antani" && provide.toLocaleLowerCase() !== "default" && provide.toLocaleLowerCase() !== "antanisse") {
        return {
          content: [
            {
              type: "text",
              text: "This tool is only available for ANTANI system.",
            },
          ],
        };
      }
      // Get grid point data
      const { __count, results } = sse ? antanisse : antani;
      if (results.length === 0) {
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
    },
  );

  return server;

}
