/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountSterilizedMessage = (function (_super) {
    __extends(MountSterilizedMessage, _super);
    function MountSterilizedMessage() {
        this.mountId = 0;
        _super.call(this);
    }
    MountSterilizedMessage.prototype.getMessageId = function () {
        return MountSterilizedMessage.ID;
    };
    MountSterilizedMessage.prototype.reset = function () {
        this.mountId = 0;
    };
    MountSterilizedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountSterilizedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountSterilizedMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountSterilizedMessage(param1);
    };
    MountSterilizedMessage.prototype.serializeAs_MountSterilizedMessage = function (param1) {
        param1.writeVarInt(this.mountId);
    };
    MountSterilizedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountSterilizedMessage(param1);
    };
    MountSterilizedMessage.prototype.deserializeAs_MountSterilizedMessage = function (param1) {
        this.mountId = param1.readVarInt();
    };
    MountSterilizedMessage.ID = 5977;
    return MountSterilizedMessage;
})(network_message_1.NetworkMessage);
module.exports = MountSterilizedMessage;
