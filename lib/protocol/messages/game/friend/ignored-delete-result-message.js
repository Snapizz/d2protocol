/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var IgnoredDeleteResultMessage = (function (_super) {
    __extends(IgnoredDeleteResultMessage, _super);
    function IgnoredDeleteResultMessage() {
        this.success = false;
        this.name = '';
        this.session = false;
        _super.call(this);
    }
    IgnoredDeleteResultMessage.prototype.getMessageId = function () {
        return IgnoredDeleteResultMessage.ID;
    };
    IgnoredDeleteResultMessage.prototype.reset = function () {
        this.success = false;
        this.name = '';
        this.session = false;
    };
    IgnoredDeleteResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredDeleteResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredDeleteResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredDeleteResultMessage(param1);
    };
    IgnoredDeleteResultMessage.prototype.serializeAs_IgnoredDeleteResultMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.session);
        param1.writeByte(_loc2_);
        param1.writeUTF(this.name);
    };
    IgnoredDeleteResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredDeleteResultMessage(param1);
    };
    IgnoredDeleteResultMessage.prototype.deserializeAs_IgnoredDeleteResultMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.session = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.name = param1.readUTF();
    };
    IgnoredDeleteResultMessage.ID = 5677;
    return IgnoredDeleteResultMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredDeleteResultMessage;
