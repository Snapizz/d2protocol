/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectInteger extends ObjectEffect implements INetworkType {
    public static ID: number = 70;

    value: number;

    constructor() {
        this.value = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectInteger.ID;
    }

    public reset(): void {
        this.value = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectInteger(param1);
    }

    public serializeAs_ObjectEffectInteger(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element value.');
        }
        param1.writeVarShort(this.value);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectInteger(param1);
    }

    public deserializeAs_ObjectEffectInteger(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.value = param1.readVarUhShort();
        if (this.value < 0) {
            throw new Error('Forbidden value (' + this.value + ') on element of ObjectEffectInteger.value.');
        }

    }
}

export = ObjectEffectInteger;
