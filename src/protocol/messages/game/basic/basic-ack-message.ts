/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicAckMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6362;

    seq: number;
    lastPacketId: number;

    constructor() {
        this.seq = 0;
        this.lastPacketId = 0;
        super();
    }

    public getMessageId(): number {
        return BasicAckMessage.ID;
    }

    public reset(): void {
        this.seq = 0;
        this.lastPacketId = 0;
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
        this.serializeAs_BasicAckMessage(param1);
    }

    public serializeAs_BasicAckMessage(param1: ICustomDataOutput): void {
        if (this.seq < 0) {
            throw new Error('Forbidden value (' + this.seq + ') on element seq.');
        }
        param1.writeVarInt(this.seq);
        if (this.lastPacketId < 0) {
            throw new Error('Forbidden value (' + this.lastPacketId + ') on element lastPacketId.');
        }
        param1.writeVarShort(this.lastPacketId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicAckMessage(param1);
    }

    public deserializeAs_BasicAckMessage(param1: ICustomDataInput): void {
        this.seq = param1.readVarUhInt();
        if (this.seq < 0) {
            throw new Error('Forbidden value (' + this.seq + ') on element of BasicAckMessage.seq.');
        }
        this.lastPacketId = param1.readVarUhShort();
        if (this.lastPacketId < 0) {
            throw new Error('Forbidden value (' + this.lastPacketId + ') on element of BasicAckMessage.lastPacketId.');
        }

    }
}

export = BasicAckMessage;
