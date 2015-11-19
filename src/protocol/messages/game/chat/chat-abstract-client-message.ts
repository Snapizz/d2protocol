/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ChatAbstractClientMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 850;

    content: string;

    constructor() {
        this.content = '';
        super();
    }

    public getMessageId(): number {
        return ChatAbstractClientMessage.ID;
    }

    public reset(): void {
        this.content = '';
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
        this.serializeAs_ChatAbstractClientMessage(param1);
    }

    public serializeAs_ChatAbstractClientMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.content);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatAbstractClientMessage(param1);
    }

    public deserializeAs_ChatAbstractClientMessage(param1: ICustomDataInput): void {
        this.content = param1.readUTF();

    }
}

export = ChatAbstractClientMessage;
