/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class ObjectEffect implements INetworkType {
    public static ID: number = 76;

    actionId: number;

    constructor() {
        this.actionId = 0;
    }

    public getTypeId(): number {
        return ObjectEffect.ID;
    }

    public reset(): void {
        this.actionId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffect(param1);
    }

    public serializeAs_ObjectEffect(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffect(param1);
    }

    public deserializeAs_ObjectEffect(param1: ICustomDataInput): void {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of ObjectEffect.actionId.');
        }

    }
}

export = ObjectEffect;
