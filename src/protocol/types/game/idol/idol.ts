/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class Idol implements INetworkType {
    public static ID: number = 489;

    id: number;
    xpBonusPercent: number;
    dropBonusPercent: number;

    constructor() {
        this.id = 0;
        this.xpBonusPercent = 0;
        this.dropBonusPercent = 0;
    }

    public getTypeId(): number {
        return Idol.ID;
    }

    public reset(): void {
        this.id = 0;
        this.xpBonusPercent = 0;
        this.dropBonusPercent = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_Idol(param1);
    }

    public serializeAs_Idol(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.xpBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element xpBonusPercent.');
        }
        param1.writeVarShort(this.xpBonusPercent);
        if (this.dropBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element dropBonusPercent.');
        }
        param1.writeVarShort(this.dropBonusPercent);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_Idol(param1);
    }

    public deserializeAs_Idol(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of Idol.id.');
        }
        this.xpBonusPercent = param1.readVarUhShort();
        if (this.xpBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.xpBonusPercent + ') on element of Idol.xpBonusPercent.');
        }
        this.dropBonusPercent = param1.readVarUhShort();
        if (this.dropBonusPercent < 0) {
            throw new Error('Forbidden value (' + this.dropBonusPercent + ') on element of Idol.dropBonusPercent.');
        }

    }
}

export = Idol;
