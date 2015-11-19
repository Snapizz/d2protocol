/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectEffect = require('../../../../types/game/data/items/effects/object-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var ExchangeBidHouseInListAddedMessage = (function (_super) {
    __extends(ExchangeBidHouseInListAddedMessage, _super);
    function ExchangeBidHouseInListAddedMessage() {
        this.itemUID = 0;
        this.objGenericId = 0;
        this.effects = [];
        this.prices = [];
        _super.call(this);
    }
    ExchangeBidHouseInListAddedMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseInListAddedMessage.ID;
    };
    ExchangeBidHouseInListAddedMessage.prototype.reset = function () {
        this.itemUID = 0;
        this.objGenericId = 0;
        this.effects = [];
        this.prices = [];
    };
    ExchangeBidHouseInListAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseInListAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseInListAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseInListAddedMessage(param1);
    };
    ExchangeBidHouseInListAddedMessage.prototype.serializeAs_ExchangeBidHouseInListAddedMessage = function (param1) {
        param1.writeInt(this.itemUID);
        param1.writeInt(this.objGenericId);
        param1.writeShort(this.effects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.prices.length);
        var _loc3_ = 0;
        while (_loc3_ < this.prices.length) {
            if (this.prices[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.prices[_loc3_] + ') on element 4 (starting at 1) of prices.');
            }
            param1.writeVarInt(this.prices[_loc3_]);
            _loc3_++;
        }
    };
    ExchangeBidHouseInListAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseInListAddedMessage(param1);
    };
    ExchangeBidHouseInListAddedMessage.prototype.deserializeAs_ExchangeBidHouseInListAddedMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = 0;
        this.itemUID = param1.readInt();
        this.objGenericId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc6_);
            _loc7_.deserialize(param1);
            this.effects.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readVarUhInt();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of prices.');
            }
            this.prices.push(_loc8_);
            _loc5_++;
        }
    };
    ExchangeBidHouseInListAddedMessage.ID = 5949;
    return ExchangeBidHouseInListAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseInListAddedMessage;
