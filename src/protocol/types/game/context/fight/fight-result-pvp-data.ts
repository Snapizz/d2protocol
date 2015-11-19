/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultAdditionalData = require('./fight-result-additional-data');

class FightResultPvpData extends FightResultAdditionalData implements INetworkType {
    public static ID: number = 190;

    grade: number;
    minHonorForGrade: number;
    maxHonorForGrade: number;
    honor: number;
    honorDelta: number;

    constructor() {
        this.grade = 0;
        this.minHonorForGrade = 0;
        this.maxHonorForGrade = 0;
        this.honor = 0;
        this.honorDelta = 0;
        super();
    }

    public getTypeId(): number {
        return FightResultPvpData.ID;
    }

    public reset(): void {
        this.grade = 0;
        this.minHonorForGrade = 0;
        this.maxHonorForGrade = 0;
        this.honor = 0;
        this.honorDelta = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultPvpData(param1);
    }

    public serializeAs_FightResultPvpData(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultAdditionalData(param1);
        if (this.grade < 0 || this.grade > 255) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);
        if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element minHonorForGrade.');
        }
        param1.writeVarShort(this.minHonorForGrade);
        if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element maxHonorForGrade.');
        }
        param1.writeVarShort(this.maxHonorForGrade);
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element honor.');
        }
        param1.writeVarShort(this.honor);
        param1.writeVarShort(this.honorDelta);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultPvpData(param1);
    }

    public deserializeAs_FightResultPvpData(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.grade = param1.readUnsignedByte();
        if (this.grade < 0 || this.grade > 255) {
            throw new Error('Forbidden value (' + this.grade + ') on element of FightResultPvpData.grade.');
        }
        this.minHonorForGrade = param1.readVarUhShort();
        if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.minHonorForGrade + ') on element of FightResultPvpData.minHonorForGrade.');
        }
        this.maxHonorForGrade = param1.readVarUhShort();
        if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
            throw new Error('Forbidden value (' + this.maxHonorForGrade + ') on element of FightResultPvpData.maxHonorForGrade.');
        }
        this.honor = param1.readVarUhShort();
        if (this.honor < 0 || this.honor > 20000) {
            throw new Error('Forbidden value (' + this.honor + ') on element of FightResultPvpData.honor.');
        }
        this.honorDelta = param1.readVarShort();

    }
}

export = FightResultPvpData;
