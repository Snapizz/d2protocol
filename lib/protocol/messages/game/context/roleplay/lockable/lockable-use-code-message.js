/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableUseCodeMessage = (function (_super) {
    __extends(LockableUseCodeMessage, _super);
    function LockableUseCodeMessage() {
        this.code = '';
        _super.call(this);
    }
    LockableUseCodeMessage.prototype.getMessageId = function () {
        return LockableUseCodeMessage.ID;
    };
    LockableUseCodeMessage.prototype.reset = function () {
        this.code = '';
    };
    LockableUseCodeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableUseCodeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableUseCodeMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableUseCodeMessage(param1);
    };
    LockableUseCodeMessage.prototype.serializeAs_LockableUseCodeMessage = function (param1) {
        param1.writeUTF(this.code);
    };
    LockableUseCodeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableUseCodeMessage(param1);
    };
    LockableUseCodeMessage.prototype.deserializeAs_LockableUseCodeMessage = function (param1) {
        this.code = param1.readUTF();
    };
    LockableUseCodeMessage.ID = 5667;
    return LockableUseCodeMessage;
})(network_message_1.NetworkMessage);
module.exports = LockableUseCodeMessage;
