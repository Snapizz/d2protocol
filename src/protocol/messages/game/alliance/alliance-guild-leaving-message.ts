/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceGuildLeavingMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6399;

    kicked: boolean;
    guildId: number;

    constructor() {
        this.kicked = false;
        this.guildId = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceGuildLeavingMessage.ID;
    }

    public reset(): void {
        this.kicked = false;
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
        this.serializeAs_AllianceGuildLeavingMessage(param1);
    }

    public serializeAs_AllianceGuildLeavingMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.kicked);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceGuildLeavingMessage(param1);
    }

    public deserializeAs_AllianceGuildLeavingMessage(param1: ICustomDataInput): void {
        this.kicked = param1.readBoolean();
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of AllianceGuildLeavingMessage.guildId.');
        }

    }
}

export = AllianceGuildLeavingMessage;
