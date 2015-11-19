/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ChatAbstractServerMessage = require('./chat-abstract-server-message');

class ChatServerCopyMessage extends ChatAbstractServerMessage {
    public static ID: number = 882;

    receiverId: number;
    receiverName: string;

    constructor() {
        this.receiverId = 0;
        this.receiverName = '';
        super();
    }

    public getMessageId(): number {
        return ChatServerCopyMessage.ID;
    }

    public reset(): void {
        this.receiverId = 0;
        this.receiverName = '';
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
        this.serializeAs_ChatServerCopyMessage(param1);
    }

    public serializeAs_ChatServerCopyMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatAbstractServerMessage(param1);
        if (this.receiverId < 0) {
            throw new Error('Forbidden value (' + this.receiverId + ') on element receiverId.');
        }
        param1.writeVarInt(this.receiverId);
        param1.writeUTF(this.receiverName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatServerCopyMessage(param1);
    }

    public deserializeAs_ChatServerCopyMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.receiverId = param1.readVarUhInt();
        if (this.receiverId < 0) {
            throw new Error('Forbidden value (' + this.receiverId + ') on element of ChatServerCopyMessage.receiverId.');
        }
        this.receiverName = param1.readUTF();

    }
}

export = ChatServerCopyMessage;
