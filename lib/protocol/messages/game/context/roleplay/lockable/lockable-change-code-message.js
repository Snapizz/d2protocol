/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableChangeCodeMessage = (function (_super) {
    __extends(LockableChangeCodeMessage, _super);
    function LockableChangeCodeMessage() {
        this.code = '';
        _super.call(this);
    }
    LockableChangeCodeMessage.prototype.getMessageId = function () {
        return LockableChangeCodeMessage.ID;
    };
    LockableChangeCodeMessage.prototype.reset = function () {
        this.code = '';
    };
    LockableChangeCodeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableChangeCodeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableChangeCodeMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableChangeCodeMessage(param1);
    };
    LockableChangeCodeMessage.prototype.serializeAs_LockableChangeCodeMessage = function (param1) {
        param1.writeUTF(this.code);
    };
    LockableChangeCodeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableChangeCodeMessage(param1);
    };
    LockableChangeCodeMessage.prototype.deserializeAs_LockableChangeCodeMessage = function (param1) {
        this.code = param1.readUTF();
    };
    LockableChangeCodeMessage.ID = 5666;
    return LockableChangeCodeMessage;
})(network_message_1.NetworkMessage);
module.exports = LockableChangeCodeMessage;
