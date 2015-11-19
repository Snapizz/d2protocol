/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class LivingObjectChangeSkinRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5725;

    livingUID: number;
    livingPosition: number;
    skinId: number;

    constructor() {
        this.livingUID = 0;
        this.livingPosition = 0;
        this.skinId = 0;
        super();
    }

    public getMessageId(): number {
        return LivingObjectChangeSkinRequestMessage.ID;
    }

    public reset(): void {
        this.livingUID = 0;
        this.livingPosition = 0;
        this.skinId = 0;
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
        this.serializeAs_LivingObjectChangeSkinRequestMessage(param1);
    }

    public serializeAs_LivingObjectChangeSkinRequestMessage(param1: ICustomDataOutput): void {
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element livingUID.');
        }
        param1.writeVarInt(this.livingUID);
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element livingPosition.');
        }
        param1.writeByte(this.livingPosition);
        if (this.skinId < 0) {
            throw new Error('Forbidden value (' + this.skinId + ') on element skinId.');
        }
        param1.writeVarInt(this.skinId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LivingObjectChangeSkinRequestMessage(param1);
    }

    public deserializeAs_LivingObjectChangeSkinRequestMessage(param1: ICustomDataInput): void {
        this.livingUID = param1.readVarUhInt();
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element of LivingObjectChangeSkinRequestMessage.livingUID.');
        }
        this.livingPosition = param1.readUnsignedByte();
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element of LivingObjectChangeSkinRequestMessage.livingPosition.');
        }
        this.skinId = param1.readVarUhInt();
        if (this.skinId < 0) {
            throw new Error('Forbidden value (' + this.skinId + ') on element of LivingObjectChangeSkinRequestMessage.skinId.');
        }

    }
}

export = LivingObjectChangeSkinRequestMessage;
