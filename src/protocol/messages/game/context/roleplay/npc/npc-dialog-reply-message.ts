/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class NpcDialogReplyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5616;

    replyId: number;

    constructor() {
        this.replyId = 0;
        super();
    }

    public getMessageId(): number {
        return NpcDialogReplyMessage.ID;
    }

    public reset(): void {
        this.replyId = 0;
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
        this.serializeAs_NpcDialogReplyMessage(param1);
    }

    public serializeAs_NpcDialogReplyMessage(param1: ICustomDataOutput): void {
        if (this.replyId < 0) {
            throw new Error('Forbidden value (' + this.replyId + ') on element replyId.');
        }
        param1.writeVarShort(this.replyId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_NpcDialogReplyMessage(param1);
    }

    public deserializeAs_NpcDialogReplyMessage(param1: ICustomDataInput): void {
        this.replyId = param1.readVarUhShort();
        if (this.replyId < 0) {
            throw new Error('Forbidden value (' + this.replyId + ') on element of NpcDialogReplyMessage.replyId.');
        }

    }
}

export = NpcDialogReplyMessage;
