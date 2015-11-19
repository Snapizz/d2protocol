/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StatedElement = require('../../../types/game/interactive/stated-element');
var StatedMapUpdateMessage = (function (_super) {
    __extends(StatedMapUpdateMessage, _super);
    function StatedMapUpdateMessage() {
        this.statedElements = [];
        _super.call(this);
    }
    StatedMapUpdateMessage.prototype.getMessageId = function () {
        return StatedMapUpdateMessage.ID;
    };
    StatedMapUpdateMessage.prototype.reset = function () {
        this.statedElements = [];
    };
    StatedMapUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StatedMapUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StatedMapUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_StatedMapUpdateMessage(param1);
    };
    StatedMapUpdateMessage.prototype.serializeAs_StatedMapUpdateMessage = function (param1) {
        param1.writeShort(this.statedElements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.statedElements.length) {
            (this.statedElements[_loc2_]).serializeAs_StatedElement(param1);
            _loc2_++;
        }
    };
    StatedMapUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StatedMapUpdateMessage(param1);
    };
    StatedMapUpdateMessage.prototype.deserializeAs_StatedMapUpdateMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new StatedElement();
            _loc4_.deserialize(param1);
            this.statedElements.push(_loc4_);
            _loc3_++;
        }
    };
    StatedMapUpdateMessage.ID = 5716;
    return StatedMapUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = StatedMapUpdateMessage;
