/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IgnoredInformations = require('../../../types/game/friend/ignored-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var IgnoredListMessage = (function (_super) {
    __extends(IgnoredListMessage, _super);
    function IgnoredListMessage() {
        this.ignoredList = [];
        _super.call(this);
    }
    IgnoredListMessage.prototype.getMessageId = function () {
        return IgnoredListMessage.ID;
    };
    IgnoredListMessage.prototype.reset = function () {
        this.ignoredList = [];
    };
    IgnoredListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredListMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredListMessage(param1);
    };
    IgnoredListMessage.prototype.serializeAs_IgnoredListMessage = function (param1) {
        param1.writeShort(this.ignoredList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ignoredList.length) {
            param1.writeShort((this.ignoredList[_loc2_]).getTypeId());
            (this.ignoredList[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    IgnoredListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredListMessage(param1);
    };
    IgnoredListMessage.prototype.deserializeAs_IgnoredListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(IgnoredInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.ignoredList.push(_loc5_);
            _loc3_++;
        }
    };
    IgnoredListMessage.ID = 5674;
    return IgnoredListMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredListMessage;
