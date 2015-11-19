/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import ChatAbstractClientMessage = require('./chat-abstract-client-message');

class ChatClientPrivateMessage extends ChatAbstractClientMessage {
    public static ID: number = 851;

    receiver: string;

    constructor() {
        this.receiver = '';
        super();
    }

    public getMessageId(): number {
        return ChatClientPrivateMessage.ID;
    }

    public reset(): void {
        this.receiver = '';
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
        this.serializeAs_ChatClientPrivateMessage(param1);
    }

    public serializeAs_ChatClientPrivateMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ChatAbstractClientMessage(param1);
        param1.writeUTF(this.receiver);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatClientPrivateMessage(param1);
    }

    public deserializeAs_ChatClientPrivateMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.receiver = param1.readUTF();

    }
}

export = ChatClientPrivateMessage;
