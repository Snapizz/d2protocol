/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class SymbioticObjectAssociateRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6522;

    symbioteUID: number;
    symbiotePos: number;
    hostUID: number;
    hostPos: number;

    constructor() {
        this.symbioteUID = 0;
        this.symbiotePos = 0;
        this.hostUID = 0;
        this.hostPos = 0;
        super();
    }

    public getMessageId(): number {
        return SymbioticObjectAssociateRequestMessage.ID;
    }

    public reset(): void {
        this.symbioteUID = 0;
        this.symbiotePos = 0;
        this.hostUID = 0;
        this.hostPos = 0;
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
        this.serializeAs_SymbioticObjectAssociateRequestMessage(param1);
    }

    public serializeAs_SymbioticObjectAssociateRequestMessage(param1: ICustomDataOutput): void {
        if (this.symbioteUID < 0) {
            throw new Error('Forbidden value (' + this.symbioteUID + ') on element symbioteUID.');
        }
        param1.writeVarInt(this.symbioteUID);
        if (this.symbiotePos < 0 || this.symbiotePos > 255) {
            throw new Error('Forbidden value (' + this.symbiotePos + ') on element symbiotePos.');
        }
        param1.writeByte(this.symbiotePos);
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element hostPos.');
        }
        param1.writeByte(this.hostPos);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SymbioticObjectAssociateRequestMessage(param1);
    }

    public deserializeAs_SymbioticObjectAssociateRequestMessage(param1: ICustomDataInput): void {
        this.symbioteUID = param1.readVarUhInt();
        if (this.symbioteUID < 0) {
            throw new Error('Forbidden value (' + this.symbioteUID + ') on element of SymbioticObjectAssociateRequestMessage.symbioteUID.');
        }
        this.symbiotePos = param1.readUnsignedByte();
        if (this.symbiotePos < 0 || this.symbiotePos > 255) {
            throw new Error('Forbidden value (' + this.symbiotePos + ') on element of SymbioticObjectAssociateRequestMessage.symbiotePos.');
        }
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of SymbioticObjectAssociateRequestMessage.hostUID.');
        }
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element of SymbioticObjectAssociateRequestMessage.hostPos.');
        }

    }
}

export = SymbioticObjectAssociateRequestMessage;
