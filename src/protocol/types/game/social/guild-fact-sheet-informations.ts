/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildInformations = require('../context/roleplay/guild-informations');
import GuildEmblem = require('../guild/guild-emblem');

class GuildFactSheetInformations extends GuildInformations implements INetworkType {
    public static ID: number = 424;

    leaderId: number;
    guildLevel: number;
    nbMembers: number;

    constructor() {
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
        super();
    }

    public getTypeId(): number {
        return GuildFactSheetInformations.ID;
    }

    public reset(): void {
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildFactSheetInformations(param1);
    }

    public serializeAs_GuildFactSheetInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GuildInformations(param1);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeVarShort(this.nbMembers);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFactSheetInformations(param1);
    }

    public deserializeAs_GuildFactSheetInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildFactSheetInformations.leaderId.');
        }
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildFactSheetInformations.guildLevel.');
        }
        this.nbMembers = param1.readVarUhShort();
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildFactSheetInformations.nbMembers.');
        }

    }
}

export = GuildFactSheetInformations;
