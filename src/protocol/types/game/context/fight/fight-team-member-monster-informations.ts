/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberInformations = require('./fight-team-member-informations');

class FightTeamMemberMonsterInformations extends FightTeamMemberInformations implements INetworkType {
    public static ID: number = 6;

    monsterId: number;
    grade: number;

    constructor() {
        this.monsterId = 0;
        this.grade = 0;
        super();
    }

    public getTypeId(): number {
        return FightTeamMemberMonsterInformations.ID;
    }

    public reset(): void {
        this.monsterId = 0;
        this.grade = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberMonsterInformations(param1);
    }

    public serializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamMemberInformations(param1);
        param1.writeInt(this.monsterId);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeByte(this.grade);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberMonsterInformations(param1);
    }

    public deserializeAs_FightTeamMemberMonsterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.monsterId = param1.readInt();
        this.grade = param1.readByte();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of FightTeamMemberMonsterInformations.grade.');
        }

    }
}

export = FightTeamMemberMonsterInformations;
