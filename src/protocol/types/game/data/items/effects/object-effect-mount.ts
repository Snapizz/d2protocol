/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectMount extends ObjectEffect implements INetworkType {
    public static ID: number = 179;

    mountId: number;
    date: number;
    modelId: number;

    constructor() {
        this.mountId = 0;
        this.date = 0;
        this.modelId = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectMount.ID;
    }

    public reset(): void {
        this.mountId = 0;
        this.date = 0;
        this.modelId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectMount(param1);
    }

    public serializeAs_ObjectEffectMount(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.mountId < 0) {
            throw new Error('Forbidden value (' + this.mountId + ') on element mountId.');
        }
        param1.writeInt(this.mountId);
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeDouble(this.date);
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element modelId.');
        }
        param1.writeVarShort(this.modelId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectMount(param1);
    }

    public deserializeAs_ObjectEffectMount(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.mountId = param1.readInt();
        if (this.mountId < 0) {
            throw new Error('Forbidden value (' + this.mountId + ') on element of ObjectEffectMount.mountId.');
        }
        this.date = param1.readDouble();
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element of ObjectEffectMount.date.');
        }
        this.modelId = param1.readVarUhShort();
        if (this.modelId < 0) {
            throw new Error('Forbidden value (' + this.modelId + ') on element of ObjectEffectMount.modelId.');
        }

    }
}

export = ObjectEffectMount;
