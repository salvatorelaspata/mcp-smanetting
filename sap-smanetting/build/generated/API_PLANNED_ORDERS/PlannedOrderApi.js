/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrder } from './PlannedOrder';
import { PlannedOrderRequestBuilder } from './PlannedOrderRequestBuilder';
import { CustomField, defaultDeSerializers, AllFields, entityBuilder, FieldBuilder, Link } from '@sap-cloud-sdk/odata-v2';
export class PlannedOrderApi {
    deSerializers;
    constructor(deSerializers = defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = defaultDeSerializers) {
        return new PlannedOrderApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PLANNED_ORDER_CAPACITY: new Link('to_PlannedOrderCapacity', this, linkedApis[0]),
            TO_PLANNED_ORDER_COMPONENT: new Link('to_PlannedOrderComponent', this, linkedApis[1])
        };
        return this;
    }
    entityConstructor = PlannedOrder;
    requestBuilder() {
        return new PlannedOrderRequestBuilder(this);
    }
    entityBuilder() {
        return entityBuilder(this);
    }
    customField(fieldName, isNullable = false) {
        return new CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    _fieldBuilder;
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new FieldBuilder(PlannedOrder, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link plannedOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER: fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false),
                /**
                 * Static representation of the {@link plannedOrderType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_TYPE: fieldBuilder.buildEdmTypeField('PlannedOrderType', 'Edm.String', true),
                /**
                 * Static representation of the {@link plannedOrderProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_PROFILE: fieldBuilder.buildEdmTypeField('PlannedOrderProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link material} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_NAME: fieldBuilder.buildEdmTypeField('MaterialName', 'Edm.String', true),
                /**
                 * Static representation of the {@link productionPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_PLANT: fieldBuilder.buildEdmTypeField('ProductionPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_PLANT: fieldBuilder.buildEdmTypeField('MRPPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_AREA: fieldBuilder.buildEdmTypeField('MRPArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link productionVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_VERSION: fieldBuilder.buildEdmTypeField('ProductionVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialProcurementCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField('MaterialProcurementCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link materialProcurementType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField('MaterialProcurementType', 'Edm.String', true),
                /**
                 * Static representation of the {@link storageLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_LOCATION: fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link baseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT: fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link totalQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_QUANTITY: fieldBuilder.buildEdmTypeField('TotalQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link plndOrderPlannedScrapQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_ORDER_PLANNED_SCRAP_QTY: fieldBuilder.buildEdmTypeField('PlndOrderPlannedScrapQty', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link goodsReceiptQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_RECEIPT_QTY: fieldBuilder.buildEdmTypeField('GoodsReceiptQty', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link issuedQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSUED_QUANTITY: fieldBuilder.buildEdmTypeField('IssuedQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link plndOrderPlannedStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_ORDER_PLANNED_START_DATE: fieldBuilder.buildEdmTypeField('PlndOrderPlannedStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link plndOrderPlannedStartTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_ORDER_PLANNED_START_TIME: fieldBuilder.buildEdmTypeField('PlndOrderPlannedStartTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link plndOrderPlannedEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_ORDER_PLANNED_END_DATE: fieldBuilder.buildEdmTypeField('PlndOrderPlannedEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link plndOrderPlannedEndTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLND_ORDER_PLANNED_END_TIME: fieldBuilder.buildEdmTypeField('PlndOrderPlannedEndTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link plannedOrderOpeningDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_OPENING_DATE: fieldBuilder.buildEdmTypeField('PlannedOrderOpeningDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link lastChangeDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangeDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link productionStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_START_DATE: fieldBuilder.buildEdmTypeField('ProductionStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link productionEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_END_DATE: fieldBuilder.buildEdmTypeField('ProductionEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link salesOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOrderItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElementInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsElement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_ELEMENT: fieldBuilder.buildEdmTypeField('WBSElement', 'Edm.String', true),
                /**
                 * Static representation of the {@link wbsDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WBS_DESCRIPTION: fieldBuilder.buildEdmTypeField('WBSDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountAssignmentCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_ASSIGNMENT_CATEGORY: fieldBuilder.buildEdmTypeField('AccountAssignmentCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link reservation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESERVATION: fieldBuilder.buildEdmTypeField('Reservation', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpController} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_CONTROLLER: fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', true),
                /**
                 * Static representation of the {@link productionSupervisor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_SUPERVISOR: fieldBuilder.buildEdmTypeField('ProductionSupervisor', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link fixedSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIXED_SUPPLIER: fieldBuilder.buildEdmTypeField('FixedSupplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingDocument} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_DOCUMENT: fieldBuilder.buildEdmTypeField('PurchasingDocument', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingDocumentItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('PurchasingDocumentItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link quotaArrangement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUOTA_ARRANGEMENT: fieldBuilder.buildEdmTypeField('QuotaArrangement', 'Edm.String', true),
                /**
                 * Static representation of the {@link quotaArrangementItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUOTA_ARRANGEMENT_ITEM: fieldBuilder.buildEdmTypeField('QuotaArrangementItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_NAME: fieldBuilder.buildEdmTypeField('SupplierName', 'Edm.String', true),
                /**
                 * Static representation of the {@link plannedOrderIsFirm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_IS_FIRM: fieldBuilder.buildEdmTypeField('PlannedOrderIsFirm', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link plannedOrderIsConvertible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_IS_CONVERTIBLE: fieldBuilder.buildEdmTypeField('PlannedOrderIsConvertible', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link plannedOrderBomIsFixed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_BOM_IS_FIXED: fieldBuilder.buildEdmTypeField('PlannedOrderBOMIsFixed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link plannedOrderCapacityIsDsptchd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_CAPACITY_IS_DSPTCHD: fieldBuilder.buildEdmTypeField('PlannedOrderCapacityIsDsptchd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link capacityRequirement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_REQUIREMENT: fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', true),
                /**
                 * Static representation of the {@link capacityRequirementOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_REQUIREMENT_ORIGIN: fieldBuilder.buildEdmTypeField('CapacityRequirementOrigin', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfOperationsType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_OPERATIONS_TYPE: fieldBuilder.buildEdmTypeField('BillOfOperationsType', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfOperationsGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_OPERATIONS_GROUP: fieldBuilder.buildEdmTypeField('BillOfOperationsGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfOperations} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_OPERATIONS: fieldBuilder.buildEdmTypeField('BillOfOperations', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastScheduledDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_SCHEDULED_DATE: fieldBuilder.buildEdmTypeField('LastScheduledDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link scheduledBasicEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_END_DATE: fieldBuilder.buildEdmTypeField('ScheduledBasicEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link scheduledBasicEndTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_END_TIME: fieldBuilder.buildEdmTypeField('ScheduledBasicEndTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link scheduledBasicStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_START_DATE: fieldBuilder.buildEdmTypeField('ScheduledBasicStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link scheduledBasicStartTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_START_TIME: fieldBuilder.buildEdmTypeField('ScheduledBasicStartTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link schedulingType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULING_TYPE: fieldBuilder.buildEdmTypeField('SchedulingType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new AllFields('*', PlannedOrder)
            };
        }
        return this._schema;
    }
}
