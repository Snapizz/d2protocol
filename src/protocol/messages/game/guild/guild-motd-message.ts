/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildMotdMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6590;

    content: string;
    timestamp: number;

    constructor() {
        this.content = '';
        this.timestamp = 0;
        super();
    }

    public getMessageId(): number {
        return GuildMotdMessage.ID;
    }

    public reset(): void {
        this.content = '';
        this.timestamp = 0;
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
        this.serializeAs_GuildMotdMessage(param1);
    }

    public serializeAs_GuildMotdMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildMotdMessage(param1);
    }

    public deserializeAs_GuildMotdMessage(param1: ICustomDataInput): void {
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of GuildMotdMessage.timestamp.');
        }

    }
}

export = GuildMotdMessage;
