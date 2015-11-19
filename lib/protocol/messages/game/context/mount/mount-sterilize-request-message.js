/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountSterilizeRequestMessage = (function (_super) {
    __extends(MountSterilizeRequestMessage, _super);
    function MountSterilizeRequestMessage() {
        _super.call(this);
    }
    MountSterilizeRequestMessage.prototype.getMessageId = function () {
        return MountSterilizeRequestMessage.ID;
    };
    MountSterilizeRequestMessage.prototype.reset = function () {
    };
    MountSterilizeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountSterilizeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountSterilizeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountSterilizeRequestMessage(param1);
    };
    MountSterilizeRequestMessage.prototype.serializeAs_MountSterilizeRequestMessage = function (param1) {
    };
    MountSterilizeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountSterilizeRequestMessage(param1);
    };
    MountSterilizeRequestMessage.prototype.deserializeAs_MountSterilizeRequestMessage = function (param1) {
    };
    MountSterilizeRequestMessage.ID = 5962;
    return MountSterilizeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountSterilizeRequestMessage;
