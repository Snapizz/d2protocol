/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveElement = require('../../../types/game/interactive/interactive-element');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var InteractiveMapUpdateMessage = (function (_super) {
    __extends(InteractiveMapUpdateMessage, _super);
    function InteractiveMapUpdateMessage() {
        this.interactiveElements = [];
        _super.call(this);
    }
    InteractiveMapUpdateMessage.prototype.getMessageId = function () {
        return InteractiveMapUpdateMessage.ID;
    };
    InteractiveMapUpdateMessage.prototype.reset = function () {
        this.interactiveElements = [];
    };
    InteractiveMapUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveMapUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveMapUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveMapUpdateMessage(param1);
    };
    InteractiveMapUpdateMessage.prototype.serializeAs_InteractiveMapUpdateMessage = function (param1) {
        param1.writeShort(this.interactiveElements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.interactiveElements.length) {
            param1.writeShort((this.interactiveElements[_loc2_]).getTypeId());
            (this.interactiveElements[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    InteractiveMapUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveMapUpdateMessage(param1);
    };
    InteractiveMapUpdateMessage.prototype.deserializeAs_InteractiveMapUpdateMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(InteractiveElement, _loc4_);
            _loc5_.deserialize(param1);
            this.interactiveElements.push(_loc5_);
            _loc3_++;
        }
    };
    InteractiveMapUpdateMessage.ID = 5002;
    return InteractiveMapUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveMapUpdateMessage;
