/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class LivingObjectMessageMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6065;

    msgId: number;
    timeStamp: number;
    owner: string;
    objectGenericId: number;

    constructor() {
        this.msgId = 0;
        this.timeStamp = 0;
        this.owner = '';
        this.objectGenericId = 0;
        super();
    }

    public getMessageId(): number {
        return LivingObjectMessageMessage.ID;
    }

    public reset(): void {
        this.msgId = 0;
        this.timeStamp = 0;
        this.owner = '';
        this.objectGenericId = 0;
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
        this.serializeAs_LivingObjectMessageMessage(param1);
    }

    public serializeAs_LivingObjectMessageMessage(param1: ICustomDataOutput): void {
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element msgId.');
        }
        param1.writeVarShort(this.msgId);
        if (this.timeStamp < 0) {
            throw new Error('Forbidden value (' + this.timeStamp + ') on element timeStamp.');
        }
        param1.writeInt(this.timeStamp);
        param1.writeUTF(this.owner);
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element objectGenericId.');
        }
        param1.writeVarShort(this.objectGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LivingObjectMessageMessage(param1);
    }

    public deserializeAs_LivingObjectMessageMessage(param1: ICustomDataInput): void {
        this.msgId = param1.readVarUhShort();
        if (this.msgId < 0) {
            throw new Error('Forbidden value (' + this.msgId + ') on element of LivingObjectMessageMessage.msgId.');
        }
        this.timeStamp = param1.readInt();
        if (this.timeStamp < 0) {
            throw new Error('Forbidden value (' + this.timeStamp + ') on element of LivingObjectMessageMessage.timeStamp.');
        }
        this.owner = param1.readUTF();
        this.objectGenericId = param1.readVarUhShort();
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element of LivingObjectMessageMessage.objectGenericId.');
        }

    }
}

export = LivingObjectMessageMessage;
