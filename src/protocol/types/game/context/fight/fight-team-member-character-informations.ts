/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberInformations = require('./fight-team-member-informations');

class FightTeamMemberCharacterInformations extends FightTeamMemberInformations implements INetworkType {
    public static ID: number = 13;

    name: string;
    level: number;

    constructor() {
        this.name = '';
        this.level = 0;
        super();
    }

    public getTypeId(): number {
        return FightTeamMemberCharacterInformations.ID;
    }

    public reset(): void {
        this.name = '';
        this.level = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberCharacterInformations(param1);
    }

    public serializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamMemberInformations(param1);
        param1.writeUTF(this.name);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberCharacterInformations(param1);
    }

    public deserializeAs_FightTeamMemberCharacterInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.name = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberCharacterInformations.level.');
        }

    }
}

export = FightTeamMemberCharacterInformations;
