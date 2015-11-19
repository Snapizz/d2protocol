/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SequenceStartMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 955;

    sequenceType: number;
    authorId: number;

    constructor() {
        this.sequenceType = 0;
        this.authorId = 0;
        super();
    }

    public getMessageId(): number {
        return SequenceStartMessage.ID;
    }

    public reset(): void {
        this.sequenceType = 0;
        this.authorId = 0;
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
        this.serializeAs_SequenceStartMessage(param1);
    }

    public serializeAs_SequenceStartMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.sequenceType);
        param1.writeInt(this.authorId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SequenceStartMessage(param1);
    }

    public deserializeAs_SequenceStartMessage(param1: ICustomDataInput): void {
        this.sequenceType = param1.readByte();
        this.authorId = param1.readInt();

    }
}

export = SequenceStartMessage;
