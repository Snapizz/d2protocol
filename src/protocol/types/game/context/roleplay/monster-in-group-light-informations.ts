/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MonsterInGroupLightInformations implements INetworkType {
    public static ID: number = 395;

    creatureGenericId: number;
    grade: number;

    constructor() {
        this.creatureGenericId = 0;
        this.grade = 0;
    }

    public getTypeId(): number {
        return MonsterInGroupLightInformations.ID;
    }

    public reset(): void {
        this.creatureGenericId = 0;
        this.grade = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_MonsterInGroupLightInformations(param1);
    }

    public serializeAs_MonsterInGroupLightInformations(param1: ICustomDataOutput): void {
        param1.writeInt(this.creatureGenericId);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MonsterInGroupLightInformations(param1);
    }

    public deserializeAs_MonsterInGroupLightInformations(param1: ICustomDataInput): void {
        this.creatureGenericId = param1.readInt();
        this.grade = param1.readByte();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of MonsterInGroupLightInformations.grade.');
        }

    }
}

export = MonsterInGroupLightInformations;
