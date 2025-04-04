/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ODataBatchRequestBuilder, BatchChangeSet } from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
export function batch(first, ...rest) {
    return new ODataBatchRequestBuilder(defaultApiPlannedOrdersPath, transformVariadicArgumentToArray(first, rest));
}
export function changeset(first, ...rest) {
    return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}
export const defaultApiPlannedOrdersPath = '/sap/opu/odata/sap/API_PLANNED_ORDERS';
