/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockItem = require('../../../../types/game/paddock/paddock-item');
var GameDataPaddockObjectListAddMessage = (function (_super) {
    __extends(GameDataPaddockObjectListAddMessage, _super);
    function GameDataPaddockObjectListAddMessage() {
        this.paddockItemDescription = [];
        _super.call(this);
    }
    GameDataPaddockObjectListAddMessage.prototype.getMessageId = function () {
        return GameDataPaddockObjectListAddMessage.ID;
    };
    GameDataPaddockObjectListAddMessage.prototype.reset = function () {
        this.paddockItemDescription = [];
    };
    GameDataPaddockObjectListAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameDataPaddockObjectListAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameDataPaddockObjectListAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameDataPaddockObjectListAddMessage(param1);
    };
    GameDataPaddockObjectListAddMessage.prototype.serializeAs_GameDataPaddockObjectListAddMessage = function (param1) {
        param1.writeShort(this.paddockItemDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.paddockItemDescription.length) {
            (this.paddockItemDescription[_loc2_]).serializeAs_PaddockItem(param1);
            _loc2_++;
        }
    };
    GameDataPaddockObjectListAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameDataPaddockObjectListAddMessage(param1);
    };
    GameDataPaddockObjectListAddMessage.prototype.deserializeAs_GameDataPaddockObjectListAddMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PaddockItem();
            _loc4_.deserialize(param1);
            this.paddockItemDescription.push(_loc4_);
            _loc3_++;
        }
    };
    GameDataPaddockObjectListAddMessage.ID = 5992;
    return GameDataPaddockObjectListAddMessage;
})(network_message_1.NetworkMessage);
module.exports = GameDataPaddockObjectListAddMessage;
