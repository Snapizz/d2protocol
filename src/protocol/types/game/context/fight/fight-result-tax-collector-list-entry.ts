/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
import BasicGuildInformations = require('../roleplay/basic-guild-informations');

class FightResultTaxCollectorListEntry extends FightResultFighterListEntry implements INetworkType {
    public static ID: number = 84;

    level: number;
    guildInfo: BasicGuildInformations;
    experienceForGuild: number;

    constructor() {
        this.level = 0;
        this.guildInfo = new BasicGuildInformations();
        this.experienceForGuild = 0;
        super();
    }

    public getTypeId(): number {
        return FightResultTaxCollectorListEntry.ID;
    }

    public reset(): void {
        this.level = 0;
        this.guildInfo = new BasicGuildInformations();
        this.experienceForGuild = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultTaxCollectorListEntry(param1);
    }

    public serializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultFighterListEntry(param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeInt(this.experienceForGuild);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultTaxCollectorListEntry(param1);
    }

    public deserializeAs_FightResultTaxCollectorListEntry(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultTaxCollectorListEntry.level.');
        }
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.experienceForGuild = param1.readInt();

    }
}

export = FightResultTaxCollectorListEntry;
