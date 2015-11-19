/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildModificationNameValidMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6327;

    guildName: string;

    constructor() {
        this.guildName = '';
        super();
    }

    public getMessageId(): number {
        return GuildModificationNameValidMessage.ID;
    }

    public reset(): void {
        this.guildName = '';
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
        this.serializeAs_GuildModificationNameValidMessage(param1);
    }

    public serializeAs_GuildModificationNameValidMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.guildName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildModificationNameValidMessage(param1);
    }

    public deserializeAs_GuildModificationNameValidMessage(param1: ICustomDataInput): void {
        this.guildName = param1.readUTF();

    }
}

export = GuildModificationNameValidMessage;
