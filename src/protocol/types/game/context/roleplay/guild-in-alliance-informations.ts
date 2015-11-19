/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GuildInformations = require('./guild-informations');
import GuildEmblem = require('../../guild/guild-emblem');

class GuildInAllianceInformations extends GuildInformations implements INetworkType {
    public static ID: number = 420;

    guildLevel: number;
    nbMembers: number;
    enabled: boolean;

    constructor() {
        this.guildLevel = 0;
        this.nbMembers = 0;
        this.enabled = false;
        super();
    }

    public getTypeId(): number {
        return GuildInAllianceInformations.ID;
    }

    public reset(): void {
        this.guildLevel = 0;
        this.nbMembers = 0;
        this.enabled = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildInAllianceInformations(param1);
    }

    public serializeAs_GuildInAllianceInformations(param1: ICustomDataOutput): void {
        super.serializeAs_GuildInformations(param1);
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeByte(this.nbMembers);
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInAllianceInformations(param1);
    }

    public deserializeAs_GuildInAllianceInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildInAllianceInformations.guildLevel.');
        }
        this.nbMembers = param1.readUnsignedByte();
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildInAllianceInformations.nbMembers.');
        }
        this.enabled = param1.readBoolean();

    }
}

export = GuildInAllianceInformations;
