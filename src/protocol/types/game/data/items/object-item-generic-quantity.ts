/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import Item = require('./item');

class ObjectItemGenericQuantity extends Item implements INetworkType {
    public static ID: number = 483;

    objectGID: number;
    quantity: number;

    constructor() {
        this.objectGID = 0;
        this.quantity = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectItemGenericQuantity.ID;
    }

    public reset(): void {
        this.objectGID = 0;
        this.quantity = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemGenericQuantity(param1);
    }

    public serializeAs_ObjectItemGenericQuantity(param1: ICustomDataOutput): void {
        super.serializeAs_Item(param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemGenericQuantity(param1);
    }

    public deserializeAs_ObjectItemGenericQuantity(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of ObjectItemGenericQuantity.objectGID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemGenericQuantity.quantity.');
        }

    }
}

export = ObjectItemGenericQuantity;
