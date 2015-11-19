/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeShopStockMovementRemovedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5907;

    objectId: number;

    constructor() {
        this.objectId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeShopStockMovementRemovedMessage.ID;
    }

    public reset(): void {
        this.objectId = 0;
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
        this.serializeAs_ExchangeShopStockMovementRemovedMessage(param1);
    }

    public serializeAs_ExchangeShopStockMovementRemovedMessage(param1: ICustomDataOutput): void {
        if (this.objectId < 0) {
            throw new Error('Forbidden value (' + this.objectId + ') on element objectId.');
        }
        param1.writeVarInt(this.objectId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeShopStockMovementRemovedMessage(param1);
    }

    public deserializeAs_ExchangeShopStockMovementRemovedMessage(param1: ICustomDataInput): void {
        this.objectId = param1.readVarUhInt();
        if (this.objectId < 0) {
            throw new Error('Forbidden value (' + this.objectId + ') on element of ExchangeShopStockMovementRemovedMessage.objectId.');
        }

    }
}

export = ExchangeShopStockMovementRemovedMessage;
