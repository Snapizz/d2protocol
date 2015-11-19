/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeSellMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5778;

    objectToSellId: number;
    quantity: number;

    constructor() {
        this.objectToSellId = 0;
        this.quantity = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeSellMessage.ID;
    }

    public reset(): void {
        this.objectToSellId = 0;
        this.quantity = 0;
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
        this.serializeAs_ExchangeSellMessage(param1);
    }

    public serializeAs_ExchangeSellMessage(param1: ICustomDataOutput): void {
        if (this.objectToSellId < 0) {
            throw new Error('Forbidden value (' + this.objectToSellId + ') on element objectToSellId.');
        }
        param1.writeVarInt(this.objectToSellId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeSellMessage(param1);
    }

    public deserializeAs_ExchangeSellMessage(param1: ICustomDataInput): void {
        this.objectToSellId = param1.readVarUhInt();
        if (this.objectToSellId < 0) {
            throw new Error('Forbidden value (' + this.objectToSellId + ') on element of ExchangeSellMessage.objectToSellId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeSellMessage.quantity.');
        }

    }
}

export = ExchangeSellMessage;
