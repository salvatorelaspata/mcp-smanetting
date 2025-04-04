import { entityDeserializer, transformReturnValueForEntity, transformReturnValueForComplexType, defaultDeSerializers, OperationParameter, OperationRequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { apiPlannedOrders } from './service';
import { SchedldProdOrdOpMessage } from './SchedldProdOrdOpMessage';
/**
 * Planned Order Schedule.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function plannedOrderSchedule(parameters, deSerializers = defaultDeSerializers) {
    const params = {
        plannedOrder: new OperationParameter('PlannedOrder', 'Edm.String', parameters.plannedOrder)
    };
    return new OperationRequestBuilder('post', '/sap/opu/odata/sap/API_PLANNED_ORDERS', 'PlannedOrderSchedule', data => transformReturnValueForEntity(data, apiPlannedOrders(deSerializers).plannedOrderApi), params, deSerializers);
}
/**
 * Schedule Planned Order Operation.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function schedulePlannedOrderOperation(parameters, deSerializers = defaultDeSerializers) {
    const params = {
        plannedOrder: new OperationParameter('PlannedOrder', 'Edm.String', parameters.plannedOrder),
        capacityRequirement: new OperationParameter('CapacityRequirement', 'Edm.String', parameters.capacityRequirement),
        capacityRequirementItem: new OperationParameter('CapacityRequirementItem', 'Edm.String', parameters.capacityRequirementItem),
        capacityRqmtItemCapacity: new OperationParameter('CapacityRqmtItemCapacity', 'Edm.String', parameters.capacityRqmtItemCapacity),
        opSchedldStartDate: new OperationParameter('OpSchedldStartDate', 'Edm.DateTime', parameters.opSchedldStartDate),
        opSchedldStartTime: new OperationParameter('OpSchedldStartTime', 'Edm.Time', parameters.opSchedldStartTime),
        opSchedldEndDate: new OperationParameter('OpSchedldEndDate', 'Edm.DateTime', parameters.opSchedldEndDate),
        opSchedldEndTime: new OperationParameter('OpSchedldEndTime', 'Edm.Time', parameters.opSchedldEndTime),
        opSchedulingMode: new OperationParameter('OpSchedulingMode', 'Edm.String', parameters.opSchedulingMode),
        opSchedulingStatus: new OperationParameter('OpSchedulingStatus', 'Edm.String', parameters.opSchedulingStatus),
        opSchedulingStrategy: new OperationParameter('OpSchedulingStrategy', 'Edm.String', parameters.opSchedulingStrategy)
    };
    return new OperationRequestBuilder('post', '/sap/opu/odata/sap/API_PLANNED_ORDERS', 'SchedulePlannedOrderOperation', data => transformReturnValueForComplexType(data, data => entityDeserializer(deSerializers || defaultDeSerializers).deserializeComplexType(data, SchedldProdOrdOpMessage)), params, deSerializers);
}
export const operations = {
    plannedOrderSchedule,
    schedulePlannedOrderOperation
};
