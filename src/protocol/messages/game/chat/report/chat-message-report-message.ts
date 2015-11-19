/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ChatMessageReportMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 821;

    senderName: string;
    content: string;
    timestamp: number;
    channel: number;
    fingerprint: string;
    reason: number;

    constructor() {
        this.senderName = '';
        this.content = '';
        this.timestamp = 0;
        this.channel = 0;
        this.fingerprint = '';
        this.reason = 0;
        super();
    }

    public getMessageId(): number {
        return ChatMessageReportMessage.ID;
    }

    public reset(): void {
        this.senderName = '';
        this.content = '';
        this.timestamp = 0;
        this.channel = 0;
        this.fingerprint = '';
        this.reason = 0;
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
        this.serializeAs_ChatMessageReportMessage(param1);
    }

    public serializeAs_ChatMessageReportMessage(param1: ICustomDataOutput): void {
        param1.writeUTF(this.senderName);
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);
        param1.writeByte(this.channel);
        param1.writeUTF(this.fingerprint);
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element reason.');
        }
        param1.writeByte(this.reason);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatMessageReportMessage(param1);
    }

    public deserializeAs_ChatMessageReportMessage(param1: ICustomDataInput): void {
        this.senderName = param1.readUTF();
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of ChatMessageReportMessage.timestamp.');
        }
        this.channel = param1.readByte();
        if (this.channel < 0) {
            throw new Error('Forbidden value (' + this.channel + ') on element of ChatMessageReportMessage.channel.');
        }
        this.fingerprint = param1.readUTF();
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of ChatMessageReportMessage.reason.');
        }

    }
}

export = ChatMessageReportMessage;
