/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemToSell = require('./object-item-to-sell');
import ObjectEffect = require('./effects/object-effect');

class ObjectItemToSellInBid extends ObjectItemToSell implements INetworkType {
    public static ID: number = 164;

    unsoldDelay: number;

    constructor() {
        this.unsoldDelay = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectItemToSellInBid.ID;
    }

    public reset(): void {
        this.unsoldDelay = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemToSellInBid(param1);
    }

    public serializeAs_ObjectItemToSellInBid(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectItemToSell(param1);
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element unsoldDelay.');
        }
        param1.writeInt(this.unsoldDelay);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemToSellInBid(param1);
    }

    public deserializeAs_ObjectItemToSellInBid(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.unsoldDelay = param1.readInt();
        if (this.unsoldDelay < 0) {
            throw new Error('Forbidden value (' + this.unsoldDelay + ') on element of ObjectItemToSellInBid.unsoldDelay.');
        }

    }
}

export = ObjectItemToSellInBid;
