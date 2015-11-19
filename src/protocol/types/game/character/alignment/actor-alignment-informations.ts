/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ActorAlignmentInformations implements INetworkType {
    public static ID: number = 201;

    alignmentSide: number;
    alignmentValue: number;
    alignmentGrade: number;
    characterPower: number;

    constructor() {
        this.alignmentSide = 0;
        this.alignmentValue = 0;
        this.alignmentGrade = 0;
        this.characterPower = 0;
    }

    public getTypeId(): number {
        return ActorAlignmentInformations.ID;
    }

    public reset(): void {
        this.alignmentSide = 0;
        this.alignmentValue = 0;
        this.alignmentGrade = 0;
        this.characterPower = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ActorAlignmentInformations(param1);
    }

    public serializeAs_ActorAlignmentInformations(param1: ICustomDataOutput): void {
        param1.writeByte(this.alignmentSide);
        if (this.alignmentValue < 0) {
            throw new Error('Forbidden value (' + this.alignmentValue + ') on element alignmentValue.');
        }
        param1.writeByte(this.alignmentValue);
        if (this.alignmentGrade < 0) {
            throw new Error('Forbidden value (' + this.alignmentGrade + ') on element alignmentGrade.');
        }
        param1.writeByte(this.alignmentGrade);
        if (this.characterPower < 0) {
            throw new Error('Forbidden value (' + this.characterPower + ') on element characterPower.');
        }
        param1.writeVarInt(this.characterPower);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ActorAlignmentInformations(param1);
    }

    public deserializeAs_ActorAlignmentInformations(param1: ICustomDataInput): void {
        this.alignmentSide = param1.readByte();
        this.alignmentValue = param1.readByte();
        if (this.alignmentValue < 0) {
            throw new Error('Forbidden value (' + this.alignmentValue + ') on element of ActorAlignmentInformations.alignmentValue.');
        }
        this.alignmentGrade = param1.readByte();
        if (this.alignmentGrade < 0) {
            throw new Error('Forbidden value (' + this.alignmentGrade + ') on element of ActorAlignmentInformations.alignmentGrade.');
        }
        this.characterPower = param1.readVarUhInt();
        if (this.characterPower < 0) {
            throw new Error('Forbidden value (' + this.characterPower + ') on element of ActorAlignmentInformations.characterPower.');
        }

    }
}

export = ActorAlignmentInformations;
