/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_PlannedOrderCapacity" of service "API_PLANNED_ORDERS".
 */
export class PlannedOrderCapacity extends Entity {
    /**
     * Technical entity name for PlannedOrderCapacity.
     */
    static _entityName = 'A_PlannedOrderCapacity';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/sap/opu/odata/sap/API_PLANNED_ORDERS';
    /**
     * All key fields of the PlannedOrderCapacity entity.
     */
    static _keys = [
        'CapacityRequirement',
        'CapacityRequirementItem',
        'CapacityRqmtItemCapacity'
    ];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
