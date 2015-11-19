/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemMinimalInformation = require('./object-item-minimal-information');
import ObjectEffect = require('./effects/object-effect');

class ObjectItemInformationWithQuantity extends ObjectItemMinimalInformation implements INetworkType {
    public static ID: number = 387;

    quantity: number;

    constructor() {
        this.quantity = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectItemInformationWithQuantity.ID;
    }

    public reset(): void {
        this.quantity = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemInformationWithQuantity(param1);
    }

    public serializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectItemMinimalInformation(param1);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemInformationWithQuantity(param1);
    }

    public deserializeAs_ObjectItemInformationWithQuantity(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemInformationWithQuantity.quantity.');
        }

    }
}

export = ObjectItemInformationWithQuantity;
