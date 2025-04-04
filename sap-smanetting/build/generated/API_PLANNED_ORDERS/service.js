/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrderApi } from './PlannedOrderApi';
import { PlannedOrderCapacityApi } from './PlannedOrderCapacityApi';
import { PlannedOrderComponentApi } from './PlannedOrderComponentApi';
import { plannedOrderSchedule, schedulePlannedOrderOperation } from './operations';
import { defaultDeSerializers, mergeDefaultDeSerializersWith } from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export function apiPlannedOrders(deSerializers = defaultDeSerializers) {
    return new ApiPlannedOrders(mergeDefaultDeSerializersWith(deSerializers));
}
class ApiPlannedOrders {
    apis = {};
    deSerializers;
    constructor(deSerializers) {
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get plannedOrderApi() {
        const api = this.initApi('plannedOrderApi', PlannedOrderApi);
        const linkedApis = [
            this.initApi('plannedOrderCapacityApi', PlannedOrderCapacityApi),
            this.initApi('plannedOrderComponentApi', PlannedOrderComponentApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get plannedOrderCapacityApi() {
        return this.initApi('plannedOrderCapacityApi', PlannedOrderCapacityApi);
    }
    get plannedOrderComponentApi() {
        return this.initApi('plannedOrderComponentApi', PlannedOrderComponentApi);
    }
    get operations() {
        return {
            plannedOrderSchedule: (parameter) => plannedOrderSchedule(parameter, this.deSerializers),
            schedulePlannedOrderOperation: (parameter) => schedulePlannedOrderOperation(parameter, this.deSerializers)
        };
    }
    get batch() {
        return batch;
    }
    get changeset() {
        return changeset;
    }
}
