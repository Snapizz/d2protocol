/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextRemoveMultipleElementsMessage = (function (_super) {
    __extends(GameContextRemoveMultipleElementsMessage, _super);
    function GameContextRemoveMultipleElementsMessage() {
        this.id = [];
        _super.call(this);
    }
    GameContextRemoveMultipleElementsMessage.prototype.getMessageId = function () {
        return GameContextRemoveMultipleElementsMessage.ID;
    };
    GameContextRemoveMultipleElementsMessage.prototype.reset = function () {
        this.id = [];
    };
    GameContextRemoveMultipleElementsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextRemoveMultipleElementsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextRemoveMultipleElementsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextRemoveMultipleElementsMessage(param1);
    };
    GameContextRemoveMultipleElementsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsMessage = function (param1) {
        param1.writeShort(this.id.length);
        var _loc2_ = 0;
        while (_loc2_ < this.id.length) {
            param1.writeInt(this.id[_loc2_]);
            _loc2_++;
        }
    };
    GameContextRemoveMultipleElementsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextRemoveMultipleElementsMessage(param1);
    };
    GameContextRemoveMultipleElementsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.id.push(_loc4_);
            _loc3_++;
        }
    };
    GameContextRemoveMultipleElementsMessage.ID = 252;
    return GameContextRemoveMultipleElementsMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextRemoveMultipleElementsMessage;
