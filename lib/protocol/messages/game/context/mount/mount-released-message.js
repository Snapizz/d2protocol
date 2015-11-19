/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountReleasedMessage = (function (_super) {
    __extends(MountReleasedMessage, _super);
    function MountReleasedMessage() {
        this.mountId = 0;
        _super.call(this);
    }
    MountReleasedMessage.prototype.getMessageId = function () {
        return MountReleasedMessage.ID;
    };
    MountReleasedMessage.prototype.reset = function () {
        this.mountId = 0;
    };
    MountReleasedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountReleasedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountReleasedMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountReleasedMessage(param1);
    };
    MountReleasedMessage.prototype.serializeAs_MountReleasedMessage = function (param1) {
        param1.writeVarInt(this.mountId);
    };
    MountReleasedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountReleasedMessage(param1);
    };
    MountReleasedMessage.prototype.deserializeAs_MountReleasedMessage = function (param1) {
        this.mountId = param1.readVarInt();
    };
    MountReleasedMessage.ID = 6308;
    return MountReleasedMessage;
})(network_message_1.NetworkMessage);
module.exports = MountReleasedMessage;
