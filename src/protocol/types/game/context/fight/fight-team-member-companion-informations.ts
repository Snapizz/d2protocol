/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberInformations = require('./fight-team-member-informations');

class FightTeamMemberCompanionInformations extends FightTeamMemberInformations implements INetworkType {
    public static ID: number = 451;

    companionId: number;
    level: number;
    masterId: number;

    constructor() {
        this.companionId = 0;
        this.level = 0;
        this.masterId = 0;
        super();
    }

    public getTypeId(): number {
        return FightTeamMemberCompanionInformations.ID;
    }

    public reset(): void {
        this.companionId = 0;
        this.level = 0;
        this.masterId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberCompanionInformations(param1);
    }

    public serializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamMemberInformations(param1);
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
        }
        param1.writeByte(this.companionId);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeInt(this.masterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberCompanionInformations(param1);
    }

    public deserializeAs_FightTeamMemberCompanionInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.companionId = param1.readByte();
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element of FightTeamMemberCompanionInformations.companionId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCompanionInformations.level.');
        }
        this.masterId = param1.readInt();

    }
}

export = FightTeamMemberCompanionInformations;
