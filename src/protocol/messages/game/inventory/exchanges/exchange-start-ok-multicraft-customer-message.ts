/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeStartOkMulticraftCustomerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5817;

    skillId: number;
    crafterJobLevel: number;

    constructor() {
        this.skillId = 0;
        this.crafterJobLevel = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkMulticraftCustomerMessage.ID;
    }

    public reset(): void {
        this.skillId = 0;
        this.crafterJobLevel = 0;
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
        this.serializeAs_ExchangeStartOkMulticraftCustomerMessage(param1);
    }

    public serializeAs_ExchangeStartOkMulticraftCustomerMessage(param1: ICustomDataOutput): void {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element crafterJobLevel.');
        }
        param1.writeByte(this.crafterJobLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkMulticraftCustomerMessage(param1);
    }

    public deserializeAs_ExchangeStartOkMulticraftCustomerMessage(param1: ICustomDataInput): void {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of ExchangeStartOkMulticraftCustomerMessage.skillId.');
        }
        this.crafterJobLevel = param1.readUnsignedByte();
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element of ExchangeStartOkMulticraftCustomerMessage.crafterJobLevel.');
        }

    }
}

export = ExchangeStartOkMulticraftCustomerMessage;
