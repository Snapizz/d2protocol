/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamMemberInformations = require('./fight-team-member-informations');

class FightTeamMemberTaxCollectorInformations extends FightTeamMemberInformations implements INetworkType {
    public static ID: number = 177;

    firstNameId: number;
    lastNameId: number;
    level: number;
    guildId: number;
    uid: number;

    constructor() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        this.guildId = 0;
        this.uid = 0;
        super();
    }

    public getTypeId(): number {
        return FightTeamMemberTaxCollectorInformations.ID;
    }

    public reset(): void {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.level = 0;
        this.guildId = 0;
        this.uid = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTeamMemberTaxCollectorInformations(param1);
    }

    public serializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataOutput): void {
        super.serializeAs_FightTeamMemberInformations(param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTeamMemberTaxCollectorInformations(param1);
    }

    public deserializeAs_FightTeamMemberTaxCollectorInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of FightTeamMemberTaxCollectorInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of FightTeamMemberTaxCollectorInformations.lastNameId.');
        }
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightTeamMemberTaxCollectorInformations.level.');
        }
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of FightTeamMemberTaxCollectorInformations.guildId.');
        }
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of FightTeamMemberTaxCollectorInformations.uid.');
        }

    }
}

export = FightTeamMemberTaxCollectorInformations;
