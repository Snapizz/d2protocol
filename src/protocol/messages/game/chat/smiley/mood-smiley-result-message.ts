/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class MoodSmileyResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6196;

    resultCode: number;
    smileyId: number;

    constructor() {
        this.resultCode = 1;
        this.smileyId = 0;
        super();
    }

    public getMessageId(): number {
        return MoodSmileyResultMessage.ID;
    }

    public reset(): void {
        this.resultCode = 1;
        this.smileyId = 0;
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
        this.serializeAs_MoodSmileyResultMessage(param1);
    }

    public serializeAs_MoodSmileyResultMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.resultCode);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MoodSmileyResultMessage(param1);
    }

    public deserializeAs_MoodSmileyResultMessage(param1: ICustomDataInput): void {
        this.resultCode = param1.readByte();
        if (this.resultCode < 0) {
            throw new Error('Forbidden value (' + this.resultCode + ') on element of MoodSmileyResultMessage.resultCode.');
        }
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of MoodSmileyResultMessage.smileyId.');
        }

    }
}

export = MoodSmileyResultMessage;
