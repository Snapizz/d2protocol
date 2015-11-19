/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectEffect = require('../../../../types/game/data/items/effects/object-effect');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class ExchangeBidHouseInListAddedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5949;

    itemUID: number;
    objGenericId: number;
    effects: ObjectEffect[];
    prices: number[];

    constructor() {
        this.itemUID = 0;
        this.objGenericId = 0;
        this.effects = [];
        this.prices = [];
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseInListAddedMessage.ID;
    }

    public reset(): void {
        this.itemUID = 0;
        this.objGenericId = 0;
        this.effects = [];
        this.prices = [];
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
        this.serializeAs_ExchangeBidHouseInListAddedMessage(param1);
    }

    public serializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.itemUID);
        param1.writeInt(this.objGenericId);
        param1.writeShort(this.effects.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.prices.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.prices.length) {
            if (this.prices[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 4 (starting at 1) of prices.');
            }
            param1.writeVarInt(this.prices[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseInListAddedMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseInListAddedMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: ObjectEffect = null;
        var _loc8_: number = 0;
        this.itemUID = param1.readInt();
        this.objGenericId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <ObjectEffect>ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
            _loc7_.deserialize(param1);
            this.effects.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = param1.readVarUhInt();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
            }
            this.prices.push(_loc8_);
            _loc5_++;
        }

    }
}

export = ExchangeBidHouseInListAddedMessage;
