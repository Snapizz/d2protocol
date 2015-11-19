/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor');

class ExchangeStartedBidBuyerMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5904;

    buyerDescriptor: SellerBuyerDescriptor;

    constructor() {
        this.buyerDescriptor = new SellerBuyerDescriptor();
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedBidBuyerMessage.ID;
    }

    public reset(): void {
        this.buyerDescriptor = new SellerBuyerDescriptor();
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
        this.serializeAs_ExchangeStartedBidBuyerMessage(param1);
    }

    public serializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataOutput): void {
        this.buyerDescriptor.serializeAs_SellerBuyerDescriptor(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedBidBuyerMessage(param1);
    }

    public deserializeAs_ExchangeStartedBidBuyerMessage(param1: ICustomDataInput): void {
        this.buyerDescriptor = new SellerBuyerDescriptor();
        this.buyerDescriptor.deserialize(param1);

    }
}

export = ExchangeStartedBidBuyerMessage;
