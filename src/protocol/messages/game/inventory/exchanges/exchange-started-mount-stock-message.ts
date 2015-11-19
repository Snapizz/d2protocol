/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class ExchangeStartedMountStockMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5984;

    objectsInfos: ObjectItem[];

    constructor() {
        this.objectsInfos = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeStartedMountStockMessage.ID;
    }

    public reset(): void {
        this.objectsInfos = [];
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
        this.serializeAs_ExchangeStartedMountStockMessage(param1);
    }

    public serializeAs_ExchangeStartedMountStockMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.objectsInfos.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartedMountStockMessage(param1);
    }

    public deserializeAs_ExchangeStartedMountStockMessage(param1: ICustomDataInput): void {
        var _loc4_: ObjectItem = null;
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }

    }
}

export = ExchangeStartedMountStockMessage;
