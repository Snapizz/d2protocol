/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildInformations = require('../../../types/game/context/roleplay/guild-informations');

class GuildJoinedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5564;

    guildInfo: GuildInformations;
    memberRights: number;
    enabled: boolean;

    constructor() {
        this.guildInfo = new GuildInformations();
        this.memberRights = 0;
        this.enabled = false;
        super();
    }

    public getMessageId(): number {
        return GuildJoinedMessage.ID;
    }

    public reset(): void {
        this.guildInfo = new GuildInformations();
        this.memberRights = 0;
        this.enabled = false;
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildJoinedMessage(param1);
    }

    public serializeAs_GuildJoinedMessage(param1: ICustomDataOutput): void {
        this.guildInfo.serializeAs_GuildInformations(param1);
        if (this.memberRights < 0) {
            throw new Error('Forbidden value (' + this.memberRights + ') on element memberRights.');
        }
        param1.writeVarInt(this.memberRights);
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildJoinedMessage(param1);
    }

    public deserializeAs_GuildJoinedMessage(param1: ICustomDataInput): void {
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
        this.memberRights = param1.readVarUhInt();
        if (this.memberRights < 0) {
            throw new Error('Forbidden value (' + this.memberRights + ') on element of GuildJoinedMessage.memberRights.');
        }
        this.enabled = param1.readBoolean();

    }
}

export = GuildJoinedMessage;
