/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemMinimalInformation = require('./object-item-minimal-information');
import ObjectEffect = require('./effects/object-effect');

class ObjectItemToSellInNpcShop extends ObjectItemMinimalInformation implements INetworkType {
    public static ID: number = 352;

    objectPrice: number;
    buyCriterion: string;

    constructor() {
        this.objectPrice = 0;
        this.buyCriterion = '';
        super();
    }

    public getTypeId(): number {
        return ObjectItemToSellInNpcShop.ID;
    }

    public reset(): void {
        this.objectPrice = 0;
        this.buyCriterion = '';
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectItemToSellInNpcShop(param1);
    }

    public serializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectItemMinimalInformation(param1);
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element objectPrice.');
        }
        param1.writeVarInt(this.objectPrice);
        param1.writeUTF(this.buyCriterion);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectItemToSellInNpcShop(param1);
    }

    public deserializeAs_ObjectItemToSellInNpcShop(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectPrice = param1.readVarUhInt();
        if (this.objectPrice < 0) {
            throw new Error('Forbidden value (' + this.objectPrice + ') on element of ObjectItemToSellInNpcShop.objectPrice.');
        }
        this.buyCriterion = param1.readUTF();

    }
}

export = ObjectItemToSellInNpcShop;
