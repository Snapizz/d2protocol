/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import BasicGuildInformations = require('./basic-guild-informations');
import GuildEmblem = require('../../guild/guild-emblem');

class GuildInformations extends BasicGuildInformations implements INetworkType {
    public static ID: number = 127;

    guildEmblem: GuildEmblem;

    constructor() {
        this.guildEmblem = new GuildEmblem();
        super();
    }

    public getTypeId(): number {
        return GuildInformations.ID;
    }

    public reset(): void {
        this.guildEmblem = new GuildEmblem();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildInformations(param1);
    }

    public serializeAs_GuildInformations(param1: ICustomDataOutput): void {
        super.serializeAs_BasicGuildInformations(param1);
        this.guildEmblem.serializeAs_GuildEmblem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInformations(param1);
    }

    public deserializeAs_GuildInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);

    }
}

export = GuildInformations;
