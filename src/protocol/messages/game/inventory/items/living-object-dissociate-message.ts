/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class LivingObjectDissociateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5723;

    livingUID: number;
    livingPosition: number;

    constructor() {
        this.livingUID = 0;
        this.livingPosition = 0;
        super();
    }

    public getMessageId(): number {
        return LivingObjectDissociateMessage.ID;
    }

    public reset(): void {
        this.livingUID = 0;
        this.livingPosition = 0;
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
        this.serializeAs_LivingObjectDissociateMessage(param1);
    }

    public serializeAs_LivingObjectDissociateMessage(param1: ICustomDataOutput): void {
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element livingUID.');
        }
        param1.writeVarInt(this.livingUID);
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element livingPosition.');
        }
        param1.writeByte(this.livingPosition);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LivingObjectDissociateMessage(param1);
    }

    public deserializeAs_LivingObjectDissociateMessage(param1: ICustomDataInput): void {
        this.livingUID = param1.readVarUhInt();
        if (this.livingUID < 0) {
            throw new Error('Forbidden value (' + this.livingUID + ') on element of LivingObjectDissociateMessage.livingUID.');
        }
        this.livingPosition = param1.readUnsignedByte();
        if (this.livingPosition < 0 || this.livingPosition > 255) {
            throw new Error('Forbidden value (' + this.livingPosition + ') on element of LivingObjectDissociateMessage.livingPosition.');
        }

    }
}

export = LivingObjectDissociateMessage;
