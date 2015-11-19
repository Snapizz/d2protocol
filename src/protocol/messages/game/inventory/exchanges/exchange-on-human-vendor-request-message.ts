/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeOnHumanVendorRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5772;

    humanVendorId: number;
    humanVendorCell: number;

    constructor() {
        this.humanVendorId = 0;
        this.humanVendorCell = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeOnHumanVendorRequestMessage.ID;
    }

    public reset(): void {
        this.humanVendorId = 0;
        this.humanVendorCell = 0;
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
        this.serializeAs_ExchangeOnHumanVendorRequestMessage(param1);
    }

    public serializeAs_ExchangeOnHumanVendorRequestMessage(param1: ICustomDataOutput): void {
        if (this.humanVendorId < 0) {
            throw new Error('Forbidden value (' + this.humanVendorId + ') on element humanVendorId.');
        }
        param1.writeVarInt(this.humanVendorId);
        if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
            throw new Error('Forbidden value (' + this.humanVendorCell + ') on element humanVendorCell.');
        }
        param1.writeVarShort(this.humanVendorCell);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeOnHumanVendorRequestMessage(param1);
    }

    public deserializeAs_ExchangeOnHumanVendorRequestMessage(param1: ICustomDataInput): void {
        this.humanVendorId = param1.readVarUhInt();
        if (this.humanVendorId < 0) {
            throw new Error('Forbidden value (' + this.humanVendorId + ') on element of ExchangeOnHumanVendorRequestMessage.humanVendorId.');
        }
        this.humanVendorCell = param1.readVarUhShort();
        if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
            throw new Error('Forbidden value (' + this.humanVendorCell + ') on element of ExchangeOnHumanVendorRequestMessage.humanVendorCell.');
        }

    }
}

export = ExchangeOnHumanVendorRequestMessage;
