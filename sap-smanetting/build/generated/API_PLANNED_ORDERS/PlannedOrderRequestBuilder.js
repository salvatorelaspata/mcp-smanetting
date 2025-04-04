/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, RequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { PlannedOrder } from './PlannedOrder';
/**
 * Request builder class for operations supported on the {@link PlannedOrder} entity.
 */
export class PlannedOrderRequestBuilder extends RequestBuilder {
    /**
     * Returns a request builder for querying all `PlannedOrder` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrder` entities.
     */
    getAll() {
        return new GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PlannedOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrder`.
     */
    create(entity) {
        return new CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrder` entity based on its keys.
     * @param plannedOrder Key property. See {@link PlannedOrder.plannedOrder}.
     * @returns A request builder for creating requests to retrieve one `PlannedOrder` entity based on its keys.
     */
    getByKey(plannedOrder) {
        return new GetByKeyRequestBuilder(this.entityApi, {
            PlannedOrder: plannedOrder
        });
    }
    /**
     * Returns a request builder for updating an entity of type `PlannedOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrder`.
     */
    update(entity) {
        return new UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(plannedOrderOrEntity) {
        return new DeleteRequestBuilder(this.entityApi, plannedOrderOrEntity instanceof PlannedOrder
            ? plannedOrderOrEntity
            : { PlannedOrder: plannedOrderOrEntity });
    }
}
