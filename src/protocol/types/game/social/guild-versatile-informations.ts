/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildVersatileInformations implements INetworkType {
    public static ID: number = 435;

    guildId: number;
    leaderId: number;
    guildLevel: number;
    nbMembers: number;

    constructor() {
        this.guildId = 0;
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    }

    public getTypeId(): number {
        return GuildVersatileInformations.ID;
    }

    public reset(): void {
        this.guildId = 0;
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildVersatileInformations(param1);
    }

    public serializeAs_GuildVersatileInformations(param1: ICustomDataOutput): void {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeByte(this.nbMembers);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildVersatileInformations(param1);
    }

    public deserializeAs_GuildVersatileInformations(param1: ICustomDataInput): void {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of GuildVersatileInformations.guildId.');
        }
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildVersatileInformations.leaderId.');
        }
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildVersatileInformations.guildLevel.');
        }
        this.nbMembers = param1.readUnsignedByte();
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildVersatileInformations.nbMembers.');
        }

    }
}

export = GuildVersatileInformations;
