/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildFactsRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6404;

    guildId: number;

    constructor() {
        this.guildId = 0;
        super();
    }

    public getMessageId(): number {
        return GuildFactsRequestMessage.ID;
    }

    public reset(): void {
        this.guildId = 0;
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
        this.serializeAs_GuildFactsRequestMessage(param1);
    }

    public serializeAs_GuildFactsRequestMessage(param1: ICustomDataOutput): void {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFactsRequestMessage(param1);
    }

    public deserializeAs_GuildFactsRequestMessage(param1: ICustomDataInput): void {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of GuildFactsRequestMessage.guildId.');
        }

    }
}

export = GuildFactsRequestMessage;
