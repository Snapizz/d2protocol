/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidPriceMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5755;

    genericId: number;
    averagePrice: number;

    constructor() {
        this.genericId = 0;
        this.averagePrice = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidPriceMessage.ID;
    }

    public reset(): void {
        this.genericId = 0;
        this.averagePrice = 0;
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
        this.serializeAs_ExchangeBidPriceMessage(param1);
    }

    public serializeAs_ExchangeBidPriceMessage(param1: ICustomDataOutput): void {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        param1.writeVarInt(this.averagePrice);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidPriceMessage(param1);
    }

    public deserializeAs_ExchangeBidPriceMessage(param1: ICustomDataInput): void {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ExchangeBidPriceMessage.genericId.');
        }
        this.averagePrice = param1.readVarInt();

    }
}

export = ExchangeBidPriceMessage;
