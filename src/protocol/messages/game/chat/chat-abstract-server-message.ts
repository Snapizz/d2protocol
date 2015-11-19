/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ChatAbstractServerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 880;

    channel: number;
    content: string;
    timestamp: number;
    fingerprint: string;

    constructor() {
        this.channel = 0;
        this.content = '';
        this.timestamp = 0;
        this.fingerprint = '';
        super();
    }

    public getMessageId(): number {
        return ChatAbstractServerMessage.ID;
    }

    public reset(): void {
        this.channel = 0;
        this.content = '';
        this.timestamp = 0;
        this.fingerprint = '';
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
        this.serializeAs_ChatAbstractServerMessage(param1);
    }

    public serializeAs_ChatAbstractServerMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.channel);
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);
        param1.writeUTF(this.fingerprint);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatAbstractServerMessage(param1);
    }

    public deserializeAs_ChatAbstractServerMessage(param1: ICustomDataInput): void {
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatAbstractServerMessage.channel.');
        }
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of ChatAbstractServerMessage.timestamp.');
        }
        this.fingerprint = param1.readUTF();

    }
}

export = ChatAbstractServerMessage;
