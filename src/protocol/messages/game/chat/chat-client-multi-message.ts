/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ChatAbstractClientMessage = require('./chat-abstract-client-message');

class ChatClientMultiMessage extends ChatAbstractClientMessage {
    public static ID: number = 861;

    channel: number;

    constructor() {
        this.channel = 0;
        super();
    }

    public getMessageId(): number {
        return ChatClientMultiMessage.ID;
    }

    public reset(): void {
        this.channel = 0;
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
        this.serializeAs_ChatClientMultiMessage(param1);
    }

    public serializeAs_ChatClientMultiMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatAbstractClientMessage(param1);
        param1.writeByte(this.channel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatClientMultiMessage(param1);
    }

    public deserializeAs_ChatClientMultiMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatClientMultiMessage.channel.');
        }

    }
}

export = ChatClientMultiMessage;
