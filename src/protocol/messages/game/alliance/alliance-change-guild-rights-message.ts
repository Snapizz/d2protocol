/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AllianceChangeGuildRightsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6426;

    guildId: number;
    rights: number;

    constructor() {
        this.guildId = 0;
        this.rights = 0;
        super();
    }

    public getMessageId(): number {
        return AllianceChangeGuildRightsMessage.ID;
    }

    public reset(): void {
        this.guildId = 0;
        this.rights = 0;
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
        this.serializeAs_AllianceChangeGuildRightsMessage(param1);
    }

    public serializeAs_AllianceChangeGuildRightsMessage(param1: ICustomDataOutput): void {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeByte(this.rights);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceChangeGuildRightsMessage(param1);
    }

    public deserializeAs_AllianceChangeGuildRightsMessage(param1: ICustomDataInput): void {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of AllianceChangeGuildRightsMessage.guildId.');
        }
        this.rights = param1.readByte();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of AllianceChangeGuildRightsMessage.rights.');
        }

    }
}

export = AllianceChangeGuildRightsMessage;
