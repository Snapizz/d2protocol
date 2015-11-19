/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ChatAbstractServerMessage = require('./chat-abstract-server-message');

class ChatServerMessage extends ChatAbstractServerMessage {
    public static ID: number = 881;

    senderId: number;
    senderName: string;
    senderAccountId: number;

    constructor() {
        this.senderId = 0;
        this.senderName = '';
        this.senderAccountId = 0;
        super();
    }

    public getMessageId(): number {
        return ChatServerMessage.ID;
    }

    public reset(): void {
        this.senderId = 0;
        this.senderName = '';
        this.senderAccountId = 0;
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
        this.serializeAs_ChatServerMessage(param1);
    }

    public serializeAs_ChatServerMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatAbstractServerMessage(param1);
        param1.writeInt(this.senderId);
        param1.writeUTF(this.senderName);
        if (this.senderAccountId < 0) {
            throw new Error('Forbidden value (' + this.senderAccountId + ') on element senderAccountId.');
        }
        param1.writeInt(this.senderAccountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatServerMessage(param1);
    }

    public deserializeAs_ChatServerMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.senderId = param1.readInt();
        this.senderName = param1.readUTF();
        this.senderAccountId = param1.readInt();
        if (this.senderAccountId < 0) {
            throw new Error('Forbidden value (' + this.senderAccountId + ') on element of ChatServerMessage.senderAccountId.');
        }

    }
}

export = ChatServerMessage;
