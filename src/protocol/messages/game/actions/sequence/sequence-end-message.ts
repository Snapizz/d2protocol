/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SequenceEndMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 956;

    actionId: number;
    authorId: number;
    sequenceType: number;

    constructor() {
        this.actionId = 0;
        this.authorId = 0;
        this.sequenceType = 0;
        super();
    }

    public getMessageId(): number {
        return SequenceEndMessage.ID;
    }

    public reset(): void {
        this.actionId = 0;
        this.authorId = 0;
        this.sequenceType = 0;
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
        this.serializeAs_SequenceEndMessage(param1);
    }

    public serializeAs_SequenceEndMessage(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.authorId);
        param1.writeByte(this.sequenceType);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SequenceEndMessage(param1);
    }

    public deserializeAs_SequenceEndMessage(param1: ICustomDataInput): void {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of SequenceEndMessage.actionId.');
        }
        this.authorId = param1.readInt();
        this.sequenceType = param1.readByte();

    }
}

export = SequenceEndMessage;
