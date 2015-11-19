/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeReplyTaxVendorMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5787;

    objectValue: number;
    totalTaxValue: number;

    constructor() {
        this.objectValue = 0;
        this.totalTaxValue = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeReplyTaxVendorMessage.ID;
    }

    public reset(): void {
        this.objectValue = 0;
        this.totalTaxValue = 0;
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
        this.serializeAs_ExchangeReplyTaxVendorMessage(param1);
    }

    public serializeAs_ExchangeReplyTaxVendorMessage(param1: ICustomDataOutput): void {
        if (this.objectValue < 0) {
            throw new Error('Forbidden value (' + this.objectValue + ') on element objectValue.');
        }
        param1.writeVarInt(this.objectValue);
        if (this.totalTaxValue < 0) {
            throw new Error('Forbidden value (' + this.totalTaxValue + ') on element totalTaxValue.');
        }
        param1.writeVarInt(this.totalTaxValue);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeReplyTaxVendorMessage(param1);
    }

    public deserializeAs_ExchangeReplyTaxVendorMessage(param1: ICustomDataInput): void {
        this.objectValue = param1.readVarUhInt();
        if (this.objectValue < 0) {
            throw new Error('Forbidden value (' + this.objectValue + ') on element of ExchangeReplyTaxVendorMessage.objectValue.');
        }
        this.totalTaxValue = param1.readVarUhInt();
        if (this.totalTaxValue < 0) {
            throw new Error('Forbidden value (' + this.totalTaxValue + ') on element of ExchangeReplyTaxVendorMessage.totalTaxValue.');
        }

    }
}

export = ExchangeReplyTaxVendorMessage;
