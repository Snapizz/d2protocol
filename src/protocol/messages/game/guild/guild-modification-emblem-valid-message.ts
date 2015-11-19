/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildEmblem = require('../../../types/game/guild/guild-emblem');

class GuildModificationEmblemValidMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6328;

    guildEmblem: GuildEmblem;

    constructor() {
        this.guildEmblem = new GuildEmblem();
        super();
    }

    public getMessageId(): number {
        return GuildModificationEmblemValidMessage.ID;
    }

    public reset(): void {
        this.guildEmblem = new GuildEmblem();
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
        this.serializeAs_GuildModificationEmblemValidMessage(param1);
    }

    public serializeAs_GuildModificationEmblemValidMessage(param1: ICustomDataOutput): void {
        this.guildEmblem.serializeAs_GuildEmblem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildModificationEmblemValidMessage(param1);
    }

    public deserializeAs_GuildModificationEmblemValidMessage(param1: ICustomDataInput): void {
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);

    }
}

export = GuildModificationEmblemValidMessage;
