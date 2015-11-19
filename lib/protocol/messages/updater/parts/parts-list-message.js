/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ContentPart = require('../../../types/updater/content-part');
var PartsListMessage = (function (_super) {
    __extends(PartsListMessage, _super);
    function PartsListMessage() {
        this.parts = [];
        _super.call(this);
    }
    PartsListMessage.prototype.getMessageId = function () {
        return PartsListMessage.ID;
    };
    PartsListMessage.prototype.reset = function () {
        this.parts = [];
    };
    PartsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartsListMessage(param1);
    };
    PartsListMessage.prototype.serializeAs_PartsListMessage = function (param1) {
        param1.writeShort(this.parts.length);
        var _loc2_ = 0;
        while (_loc2_ < this.parts.length) {
            (this.parts[_loc2_]).serializeAs_ContentPart(param1);
            _loc2_++;
        }
    };
    PartsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartsListMessage(param1);
    };
    PartsListMessage.prototype.deserializeAs_PartsListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ContentPart();
            _loc4_.deserialize(param1);
            this.parts.push(_loc4_);
            _loc3_++;
        }
    };
    PartsListMessage.ID = 1502;
    return PartsListMessage;
})(network_message_1.NetworkMessage);
module.exports = PartsListMessage;
