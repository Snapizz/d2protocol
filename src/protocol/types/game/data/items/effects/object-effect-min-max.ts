/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectMinMax extends ObjectEffect implements INetworkType {
    public static ID: number = 82;

    min: number;
    max: number;

    constructor() {
        this.min = 0;
        this.max = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectMinMax.ID;
    }

    public reset(): void {
        this.min = 0;
        this.max = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectMinMax(param1);
    }

    public serializeAs_ObjectEffectMinMax(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element min.');
        }
        param1.writeVarInt(this.min);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarInt(this.max);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectMinMax(param1);
    }

    public deserializeAs_ObjectEffectMinMax(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.min = param1.readVarUhInt();
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element of ObjectEffectMinMax.min.');
        }
        this.max = param1.readVarUhInt();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of ObjectEffectMinMax.max.');
        }

    }
}

export = ObjectEffectMinMax;
