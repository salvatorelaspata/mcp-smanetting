/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, FieldBuilder } from '@sap-cloud-sdk/odata-v2';
/**
 * SchedldProdOrdOpMessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SchedldProdOrdOpMessageField extends ComplexTypeField {
    _fieldBuilder = new FieldBuilder(this, this.deSerializers);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.plannedOrder} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedOrder = this._fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.capacityRequirement} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacityRequirement = this._fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', false);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.capacityRequirementItem} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacityRequirementItem = this._fieldBuilder.buildEdmTypeField('CapacityRequirementItem', 'Edm.String', false);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.capacityRqmtItemCapacity} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    capacityRqmtItemCapacity = this._fieldBuilder.buildEdmTypeField('CapacityRqmtItemCapacity', 'Edm.String', false);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.operation} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    operation = this._fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', false);
    /**
     * Representation of the {@link SchedldProdOrdOpMessage.message} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message = this._fieldBuilder.buildEdmTypeField('Message', 'Edm.String', true);
    /**
     * Creates an instance of SchedldProdOrdOpMessageField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SchedldProdOrdOpMessage, fieldOptions);
    }
}
export var SchedldProdOrdOpMessage;
(function (SchedldProdOrdOpMessage) {
    /**
     * Metadata information on all properties of the `SchedldProdOrdOpMessage` complex type.
     */
    SchedldProdOrdOpMessage._propertyMetadata = [
        {
            originalName: 'PlannedOrder',
            name: 'plannedOrder',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'CapacityRequirement',
            name: 'capacityRequirement',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'CapacityRequirementItem',
            name: 'capacityRequirementItem',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'CapacityRqmtItemCapacity',
            name: 'capacityRqmtItemCapacity',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Operation',
            name: 'operation',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Message',
            name: 'message',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(SchedldProdOrdOpMessage || (SchedldProdOrdOpMessage = {}));
