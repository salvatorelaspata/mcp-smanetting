/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, RequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { PlannedOrderComponent } from './PlannedOrderComponent';
/**
 * Request builder class for operations supported on the {@link PlannedOrderComponent} entity.
 */
export class PlannedOrderComponentRequestBuilder extends RequestBuilder {
    /**
     * Returns a request builder for querying all `PlannedOrderComponent` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderComponent` entities.
     */
    getAll() {
        return new GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PlannedOrderComponent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderComponent`.
     */
    create(entity) {
        return new CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `PlannedOrderComponent` entity based on its keys.
     * @param reservation Key property. See {@link PlannedOrderComponent.reservation}.
     * @param reservationItem Key property. See {@link PlannedOrderComponent.reservationItem}.
     * @returns A request builder for creating requests to retrieve one `PlannedOrderComponent` entity based on its keys.
     */
    getByKey(reservation, reservationItem) {
        return new GetByKeyRequestBuilder(this.entityApi, {
            Reservation: reservation,
            ReservationItem: reservationItem
        });
    }
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderComponent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderComponent`.
     */
    update(entity) {
        return new UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(reservationOrEntity, reservationItem) {
        return new DeleteRequestBuilder(this.entityApi, reservationOrEntity instanceof PlannedOrderComponent
            ? reservationOrEntity
            : {
                Reservation: reservationOrEntity,
                ReservationItem: reservationItem
            });
    }
}
