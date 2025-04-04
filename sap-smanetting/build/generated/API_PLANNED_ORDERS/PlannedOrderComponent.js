/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity } from '@sap-cloud-sdk/odata-v2';
/**
 * This class represents the entity "A_PlannedOrderComponent" of service "API_PLANNED_ORDERS".
 */
export class PlannedOrderComponent extends Entity {
    /**
     * Technical entity name for PlannedOrderComponent.
     */
    static _entityName = 'A_PlannedOrderComponent';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/sap/opu/odata/sap/API_PLANNED_ORDERS';
    /**
     * All key fields of the PlannedOrderComponent entity.
     */
    static _keys = ['Reservation', 'ReservationItem'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
