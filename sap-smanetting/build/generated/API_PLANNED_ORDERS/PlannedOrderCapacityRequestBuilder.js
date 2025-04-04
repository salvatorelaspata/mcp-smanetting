/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GetAllRequestBuilder, GetByKeyRequestBuilder, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
/**
 * Request builder class for operations supported on the {@link PlannedOrderCapacity} entity.
 */
export class PlannedOrderCapacityRequestBuilder extends RequestBuilder {
    /**
     * Returns a request builder for querying all `PlannedOrderCapacity` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderCapacity` entities.
     */
    getAll() {
        return new GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrderCapacity` entity based on its keys.
     * @param capacityRequirement Key property. See {@link PlannedOrderCapacity.capacityRequirement}.
     * @param capacityRequirementItem Key property. See {@link PlannedOrderCapacity.capacityRequirementItem}.
     * @param capacityRqmtItemCapacity Key property. See {@link PlannedOrderCapacity.capacityRqmtItemCapacity}.
     * @returns A request builder for creating requests to retrieve one `PlannedOrderCapacity` entity based on its keys.
     */
    getByKey(capacityRequirement, capacityRequirementItem, capacityRqmtItemCapacity) {
        return new GetByKeyRequestBuilder(this.entityApi, {
            CapacityRequirement: capacityRequirement,
            CapacityRequirementItem: capacityRequirementItem,
            CapacityRqmtItemCapacity: capacityRqmtItemCapacity
        });
    }
}
