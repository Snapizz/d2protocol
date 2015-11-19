/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableStateUpdateAbstractMessage = (function (_super) {
    __extends(LockableStateUpdateAbstractMessage, _super);
    function LockableStateUpdateAbstractMessage() {
        this.locked = false;
        _super.call(this);
    }
    LockableStateUpdateAbstractMessage.prototype.getMessageId = function () {
        return LockableStateUpdateAbstractMessage.ID;
    };
    LockableStateUpdateAbstractMessage.prototype.reset = function () {
        this.locked = false;
    };
    LockableStateUpdateAbstractMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableStateUpdateAbstractMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableStateUpdateAbstractMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableStateUpdateAbstractMessage(param1);
    };
    LockableStateUpdateAbstractMessage.prototype.serializeAs_LockableStateUpdateAbstractMessage = function (param1) {
        param1.writeBoolean(this.locked);
    };
    LockableStateUpdateAbstractMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableStateUpdateAbstractMessage(param1);
    };
    LockableStateUpdateAbstractMessage.prototype.deserializeAs_LockableStateUpdateAbstractMessage = function (param1) {
        this.locked = param1.readBoolean();
    };
    LockableStateUpdateAbstractMessage.ID = 5671;
    return LockableStateUpdateAbstractMessage;
})(network_message_1.NetworkMessage);
module.exports = LockableStateUpdateAbstractMessage;
