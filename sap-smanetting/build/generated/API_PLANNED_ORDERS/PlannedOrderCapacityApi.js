/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrderCapacity } from './PlannedOrderCapacity';
import { PlannedOrderCapacityRequestBuilder } from './PlannedOrderCapacityRequestBuilder';
import { CustomField, defaultDeSerializers, AllFields, entityBuilder, FieldBuilder } from '@sap-cloud-sdk/odata-v2';
export class PlannedOrderCapacityApi {
    deSerializers;
    constructor(deSerializers = defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = defaultDeSerializers) {
        return new PlannedOrderCapacityApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = PlannedOrderCapacity;
    requestBuilder() {
        return new PlannedOrderCapacityRequestBuilder(this);
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
            this._fieldBuilder = new FieldBuilder(PlannedOrderCapacity, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link capacityRequirement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_REQUIREMENT: fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', false),
                /**
                 * Static representation of the {@link capacityRequirementItem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_REQUIREMENT_ITEM: fieldBuilder.buildEdmTypeField('CapacityRequirementItem', 'Edm.String', false),
                /**
                 * Static representation of the {@link capacityRqmtItemCapacity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_RQMT_ITEM_CAPACITY: fieldBuilder.buildEdmTypeField('CapacityRqmtItemCapacity', 'Edm.String', false),
                /**
                 * Static representation of the {@link plannedOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER: fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link plannedOrderType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_ORDER_TYPE: fieldBuilder.buildEdmTypeField('PlannedOrderType', 'Edm.String', true),
                /**
                 * Static representation of the {@link sequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQUENCE: fieldBuilder.buildEdmTypeField('Sequence', 'Edm.String', true),
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', true),
                /**
                 * Static representation of the {@link subOperation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUB_OPERATION: fieldBuilder.buildEdmTypeField('SubOperation', 'Edm.String', true),
                /**
                 * Static representation of the {@link workCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_CENTER: fieldBuilder.buildEdmTypeField('WorkCenter', 'Edm.String', true),
                /**
                 * Static representation of the {@link capacityCategoryCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_CATEGORY_CODE: fieldBuilder.buildEdmTypeField('CapacityCategoryCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link capacity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY: fieldBuilder.buildEdmTypeField('Capacity', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpController} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_CONTROLLER: fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', true),
                /**
                 * Static representation of the {@link mrpPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_PLANT: fieldBuilder.buildEdmTypeField('MRPPlant', 'Edm.String', true),
                /**
                 * Static representation of the {@link operationLatestStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_LATEST_START_DATE: fieldBuilder.buildEdmTypeField('OperationLatestStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link operationLatestStartTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_LATEST_START_TIME: fieldBuilder.buildEdmTypeField('OperationLatestStartTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link operationLatestEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_LATEST_END_DATE: fieldBuilder.buildEdmTypeField('OperationLatestEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link operationLatestEndTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_LATEST_END_TIME: fieldBuilder.buildEdmTypeField('OperationLatestEndTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link operationEarliestStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_EARLIEST_START_DATE: fieldBuilder.buildEdmTypeField('OperationEarliestStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link operationEarliestStartTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_EARLIEST_START_TIME: fieldBuilder.buildEdmTypeField('OperationEarliestStartTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link operationEarliestEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_EARLIEST_END_DATE: fieldBuilder.buildEdmTypeField('OperationEarliestEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link operationEarliestEndTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_EARLIEST_END_TIME: fieldBuilder.buildEdmTypeField('OperationEarliestEndTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link opLtstSchedldProcgStrtDte} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OP_LTST_SCHEDLD_PROCG_STRT_DTE: fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtDte', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link opLtstSchedldProcgStrtTme} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OP_LTST_SCHEDLD_PROCG_STRT_TME: fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtTme', 'Edm.Time', true),
                /**
                 * Static representation of the {@link opLtstSchedldTrdwnStrtDte} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OP_LTST_SCHEDLD_TRDWN_STRT_DTE: fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtDte', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link opLtstSchedldTrdwnStrtTme} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OP_LTST_SCHEDLD_TRDWN_STRT_TME: fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtTme', 'Edm.Time', true),
                /**
                 * Static representation of the {@link scheduledBasicEndTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_END_TIME: fieldBuilder.buildEdmTypeField('ScheduledBasicEndTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link scheduledBasicStartTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_BASIC_START_TIME: fieldBuilder.buildEdmTypeField('ScheduledBasicStartTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link capacityRequirementUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_REQUIREMENT_UNIT: fieldBuilder.buildEdmTypeField('CapacityRequirementUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasureIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE_ISO_CODE: fieldBuilder.buildEdmTypeField('UnitOfMeasureISOCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link scheduledCapReqOpSegSetupDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_CAP_REQ_OP_SEG_SETUP_DURN: fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegSetupDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link remainingCapReqOpSegSetupDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REMAINING_CAP_REQ_OP_SEG_SETUP_DURN: fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegSetupDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link scheduledCapReqOpSegProcgDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_CAP_REQ_OP_SEG_PROCG_DURN: fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegProcgDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link remainingCapReqOpSegProcgDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REMAINING_CAP_REQ_OP_SEG_PROCG_DURN: fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegProcgDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link scheduledCapReqOpSegTrdwnDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULED_CAP_REQ_OP_SEG_TRDWN_DURN: fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegTrdwnDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link remainingCapReqOpSegTrdwnDurn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REMAINING_CAP_REQ_OP_SEG_TRDWN_DURN: fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegTrdwnDurn', 'Edm.Double', true),
                /**
                 * Static representation of the {@link wrkCntrHasLeadingCap} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WRK_CNTR_HAS_LEADING_CAP: fieldBuilder.buildEdmTypeField('WrkCntrHasLeadingCap', 'Edm.String', true),
                /**
                 * Static representation of the {@link operationText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION_TEXT: fieldBuilder.buildEdmTypeField('OperationText', 'Edm.String', true),
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
                ALL_FIELDS: new AllFields('*', PlannedOrderCapacity)
            };
        }
        return this._schema;
    }
}
