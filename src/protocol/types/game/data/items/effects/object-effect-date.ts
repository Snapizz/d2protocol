/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectDate extends ObjectEffect implements INetworkType {
    public static ID: number = 72;

    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;

    constructor() {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectDate.ID;
    }

    public reset(): void {
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectDate(param1);
    }

    public serializeAs_ObjectEffectDate(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element year.');
        }
        param1.writeVarShort(this.year);
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element month.');
        }
        param1.writeByte(this.month);
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element day.');
        }
        param1.writeByte(this.day);
        if (this.hour < 0) {
            throw new Error('Forbidden value (' + this.hour + ') on element hour.');
        }
        param1.writeByte(this.hour);
        if (this.minute < 0) {
            throw new Error('Forbidden value (' + this.minute + ') on element minute.');
        }
        param1.writeByte(this.minute);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectDate(param1);
    }

    public deserializeAs_ObjectEffectDate(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.year = param1.readVarUhShort();
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element of ObjectEffectDate.year.');
        }
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element of ObjectEffectDate.month.');
        }
        this.day = param1.readByte();
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element of ObjectEffectDate.day.');
        }
        this.hour = param1.readByte();
        if (this.hour < 0) {
            throw new Error('Forbidden value (' + this.hour + ') on element of ObjectEffectDate.hour.');
        }
        this.minute = param1.readByte();
        if (this.minute < 0) {
            throw new Error('Forbidden value (' + this.minute + ') on element of ObjectEffectDate.minute.');
        }

    }
}

export = ObjectEffectDate;
