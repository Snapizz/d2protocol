/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ChatSmileyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 801;

    entityId: number;
    smileyId: number;
    accountId: number;

    constructor() {
        this.entityId = 0;
        this.smileyId = 0;
        this.accountId = 0;
        super();
    }

    public getMessageId(): number {
        return ChatSmileyMessage.ID;
    }

    public reset(): void {
        this.entityId = 0;
        this.smileyId = 0;
        this.accountId = 0;
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
        this.serializeAs_ChatSmileyMessage(param1);
    }

    public serializeAs_ChatSmileyMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.entityId);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ChatSmileyMessage(param1);
    }

    public deserializeAs_ChatSmileyMessage(param1: ICustomDataInput): void {
        this.entityId = param1.readInt();
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of ChatSmileyMessage.smileyId.');
        }
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of ChatSmileyMessage.accountId.');
        }

    }
}

export = ChatSmileyMessage;
