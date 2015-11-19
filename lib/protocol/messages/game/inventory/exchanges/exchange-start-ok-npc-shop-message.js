/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemToSellInNpcShop = require('../../../../types/game/data/items/object-item-to-sell-in-npc-shop');
var ExchangeStartOkNpcShopMessage = (function (_super) {
    __extends(ExchangeStartOkNpcShopMessage, _super);
    function ExchangeStartOkNpcShopMessage() {
        this.npcSellerId = 0;
        this.tokenId = 0;
        this.objectsInfos = [];
        _super.call(this);
    }
    ExchangeStartOkNpcShopMessage.prototype.getMessageId = function () {
        return ExchangeStartOkNpcShopMessage.ID;
    };
    ExchangeStartOkNpcShopMessage.prototype.reset = function () {
        this.npcSellerId = 0;
        this.tokenId = 0;
        this.objectsInfos = [];
    };
    ExchangeStartOkNpcShopMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkNpcShopMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkNpcShopMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkNpcShopMessage(param1);
    };
    ExchangeStartOkNpcShopMessage.prototype.serializeAs_ExchangeStartOkNpcShopMessage = function (param1) {
        param1.writeInt(this.npcSellerId);
        if (this.tokenId < 0) {
            throw new Error('Forbidden value (' + this.tokenId + ') on element tokenId.');
        }
        param1.writeVarShort(this.tokenId);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInNpcShop(param1);
            _loc2_++;
        }
    };
    ExchangeStartOkNpcShopMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkNpcShopMessage(param1);
    };
    ExchangeStartOkNpcShopMessage.prototype.deserializeAs_ExchangeStartOkNpcShopMessage = function (param1) {
        var _loc4_ = null;
        this.npcSellerId = param1.readInt();
        this.tokenId = param1.readVarUhShort();
        if (this.tokenId < 0) {
            throw new Error('Forbidden value (' + this.tokenId + ') on element of ExchangeStartOkNpcShopMessage.tokenId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemToSellInNpcShop();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartOkNpcShopMessage.ID = 5761;
    return ExchangeStartOkNpcShopMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkNpcShopMessage;
