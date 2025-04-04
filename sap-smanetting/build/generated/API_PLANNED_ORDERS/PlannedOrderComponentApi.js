/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrderComponent } from './PlannedOrderComponent';
import { PlannedOrderComponentRequestBuilder } from './PlannedOrderComponentRequestBuilder';
import { CustomField, defaultDeSerializers, AllFields, entityBuilder, FieldBuilder } from '@sap-cloud-sdk/odata-v2';
export class PlannedOrderComponentApi {
    deSerializers;
    constructor(deSerializers = defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = defaultDeSerializers) {
        return new PlannedOrderComponentApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = PlannedOrderComponent;
    requestBuilder() {
        return new PlannedOrderComponentRequestBuilder(this);
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
            this._fieldBuilder = new FieldBuilder(PlannedOrderComponent, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link reservation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESERVATION: fieldBuilder.buildEdmTypeField('Reservation', 'Edm.String', false),
                /**
                 * Static representation of the {@link reservationItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESERVATION_ITEM: fieldBuilder.buildEdmTypeField('ReservationItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link plannedOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER: fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link bomItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOM_ITEM: fieldBuilder.buildEdmTypeField('BOMItem', 'Edm.String', true),
                /**
                 * Static representation of the {@link bomItemDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOM_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField('BOMItemDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link bomItemDescriptionLine2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOM_ITEM_DESCRIPTION_LINE_2: fieldBuilder.buildEdmTypeField('BOMItemDescriptionLine2', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfMaterialCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_MATERIAL_CATEGORY: fieldBuilder.buildEdmTypeField('BillOfMaterialCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link sortField} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SORT_FIELD: fieldBuilder.buildEdmTypeField('SortField', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfMaterialItemNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_MATERIAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField('BillOfMaterialItemNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfMaterialInternalId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_MATERIAL_INTERNAL_ID: fieldBuilder.buildEdmTypeField('BillOfMaterialInternalID', 'Edm.String', true),
                /**
                 * Static representation of the {@link billOfMaterialVariant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_OF_MATERIAL_VARIANT: fieldBuilder.buildEdmTypeField('BillOfMaterialVariant', 'Edm.String', true),
                /**
                 * Static representation of the {@link bomItemCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOM_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField('BOMItemCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link material} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL: fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true),
                /**
                 * Static representation of the {@link matlCompRequirementDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATL_COMP_REQUIREMENT_DATE: fieldBuilder.buildEdmTypeField('MatlCompRequirementDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link goodsMovementEntryQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_MOVEMENT_ENTRY_QTY: fieldBuilder.buildEdmTypeField('GoodsMovementEntryQty', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link entryUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTRY_UNIT: fieldBuilder.buildEdmTypeField('EntryUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link requiredQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUIRED_QUANTITY: fieldBuilder.buildEdmTypeField('RequiredQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link baseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT: fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link withdrawnQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHDRAWN_QUANTITY: fieldBuilder.buildEdmTypeField('WithdrawnQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link debitCreditCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEBIT_CREDIT_CODE: fieldBuilder.buildEdmTypeField('DebitCreditCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link componentScrapInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField('ComponentScrapInPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link quantityIsFixed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_IS_FIXED: fieldBuilder.buildEdmTypeField('QuantityIsFixed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link materialComponentIsPhantomItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATERIAL_COMPONENT_IS_PHANTOM_ITEM: fieldBuilder.buildEdmTypeField('MaterialComponentIsPhantomItem', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link plant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
                /**
                 * Static representation of the {@link storageLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_LOCATION: fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplyArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLY_AREA: fieldBuilder.buildEdmTypeField('SupplyArea', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpController} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_CONTROLLER: fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', true),
                /**
                 * Static representation of the {@link orderPathValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_PATH_VALUE: fieldBuilder.buildEdmTypeField('OrderPathValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link orderLevelValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_LEVEL_VALUE: fieldBuilder.buildEdmTypeField('OrderLevelValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link assembly} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY: fieldBuilder.buildEdmTypeField('Assembly', 'Edm.String', true),
                /**
                 * Static representation of the {@link assemblyOrderPathValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY_ORDER_PATH_VALUE: fieldBuilder.buildEdmTypeField('AssemblyOrderPathValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link assemblyOrderLevelValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY_ORDER_LEVEL_VALUE: fieldBuilder.buildEdmTypeField('AssemblyOrderLevelValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link discontinuationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISCONTINUATION_GROUP: fieldBuilder.buildEdmTypeField('DiscontinuationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link matlCompDiscontinuationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATL_COMP_DISCONTINUATION_TYPE: fieldBuilder.buildEdmTypeField('MatlCompDiscontinuationType', 'Edm.String', true),
                /**
                 * Static representation of the {@link matlCompIsFollowUpMaterial} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MATL_COMP_IS_FOLLOW_UP_MATERIAL: fieldBuilder.buildEdmTypeField('MatlCompIsFollowUpMaterial', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link followUpGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOLLOW_UP_GROUP: fieldBuilder.buildEdmTypeField('FollowUpGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link followUpMaterial} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOLLOW_UP_MATERIAL: fieldBuilder.buildEdmTypeField('FollowUpMaterial', 'Edm.String', true),
                /**
                 * Static representation of the {@link followUpMaterialIsNotActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOLLOW_UP_MATERIAL_IS_NOT_ACTIVE: fieldBuilder.buildEdmTypeField('FollowUpMaterialIsNotActive', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lastChangeDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangeDateTime', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new AllFields('*', PlannedOrderComponent)
            };
        }
        return this._schema;
    }
}
