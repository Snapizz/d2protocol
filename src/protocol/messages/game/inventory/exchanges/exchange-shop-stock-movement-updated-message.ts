/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell');

class ExchangeShopStockMovementUpdatedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5909;

    objectInfo: ObjectItemToSell;

    constructor() {
        this.objectInfo = new ObjectItemToSell();
        super();
    }

    public getMessageId(): number {
        return ExchangeShopStockMovementUpdatedMessage.ID;
    }

    public reset(): void {
        this.objectInfo = new ObjectItemToSell();
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
        this.serializeAs_ExchangeShopStockMovementUpdatedMessage(param1);
    }

    public serializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataOutput): void {
        this.objectInfo.serializeAs_ObjectItemToSell(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeShopStockMovementUpdatedMessage(param1);
    }

    public deserializeAs_ExchangeShopStockMovementUpdatedMessage(param1: ICustomDataInput): void {
        this.objectInfo = new ObjectItemToSell();
        this.objectInfo.deserialize(param1);

    }
}

export = ExchangeShopStockMovementUpdatedMessage;
