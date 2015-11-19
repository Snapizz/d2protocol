/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectDuration extends ObjectEffect implements INetworkType {
    public static ID: number = 75;

    days: number;
    hours: number;
    minutes: number;

    constructor() {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectDuration.ID;
    }

    public reset(): void {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectDuration(param1);
    }

    public serializeAs_ObjectEffectDuration(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element days.');
        }
        param1.writeVarShort(this.days);
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element hours.');
        }
        param1.writeByte(this.hours);
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element minutes.');
        }
        param1.writeByte(this.minutes);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectDuration(param1);
    }

    public deserializeAs_ObjectEffectDuration(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.days = param1.readVarUhShort();
        if (this.days < 0) {
            throw new Error('Forbidden value (' + this.days + ') on element of ObjectEffectDuration.days.');
        }
        this.hours = param1.readByte();
        if (this.hours < 0) {
            throw new Error('Forbidden value (' + this.hours + ') on element of ObjectEffectDuration.hours.');
        }
        this.minutes = param1.readByte();
        if (this.minutes < 0) {
            throw new Error('Forbidden value (' + this.minutes + ') on element of ObjectEffectDuration.minutes.');
        }

    }
}

export = ObjectEffectDuration;
