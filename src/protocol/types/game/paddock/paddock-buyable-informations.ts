/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import PaddockInformations = require('./paddock-informations');

class PaddockBuyableInformations extends PaddockInformations implements INetworkType {
    public static ID: number = 130;

    price: number;
    locked: boolean;

    constructor() {
        this.price = 0;
        this.locked = false;
        super();
    }

    public getTypeId(): number {
        return PaddockBuyableInformations.ID;
    }

    public reset(): void {
        this.price = 0;
        this.locked = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockBuyableInformations(param1);
    }

    public serializeAs_PaddockBuyableInformations(param1: ICustomDataOutput): void {
        super.serializeAs_PaddockInformations(param1);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
        param1.writeBoolean(this.locked);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockBuyableInformations(param1);
    }

    public deserializeAs_PaddockBuyableInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockBuyableInformations.price.');
        }
        this.locked = param1.readBoolean();

    }
}

export = PaddockBuyableInformations;
