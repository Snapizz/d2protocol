/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import Item = require('./item');

class ObjectItemQuantity extends Item implements INetworkType {
    public static ID: number = 119;

    objectUID: number;
    quantity: number;

    constructor() {
        this.objectUID = 0;
        this.quantity = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectItemQuantity.ID;
    }

    public reset(): void {
        this.objectUID = 0;
        this.quantity = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemQuantity(param1);
    }

    public serializeAs_ObjectItemQuantity(param1: ICustomDataOutput): void {
        super.serializeAs_Item(param1);
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemQuantity(param1);
    }

    public deserializeAs_ObjectItemQuantity(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ObjectItemQuantity.objectUID.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectItemQuantity.quantity.');
        }

    }
}

export = ObjectItemQuantity;
