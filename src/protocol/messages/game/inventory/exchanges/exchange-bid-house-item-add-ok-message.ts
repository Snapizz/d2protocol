/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid');

class ExchangeBidHouseItemAddOkMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5945;

    itemInfo: ObjectItemToSellInBid;

    constructor() {
        this.itemInfo = new ObjectItemToSellInBid();
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseItemAddOkMessage.ID;
    }

    public reset(): void {
        this.itemInfo = new ObjectItemToSellInBid();
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
        this.serializeAs_ExchangeBidHouseItemAddOkMessage(param1);
    }

    public serializeAs_ExchangeBidHouseItemAddOkMessage(param1: ICustomDataOutput): void {
        this.itemInfo.serializeAs_ObjectItemToSellInBid(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseItemAddOkMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseItemAddOkMessage(param1: ICustomDataInput): void {
        this.itemInfo = new ObjectItemToSellInBid();
        this.itemInfo.deserialize(param1);

    }
}

export = ExchangeBidHouseItemAddOkMessage;
