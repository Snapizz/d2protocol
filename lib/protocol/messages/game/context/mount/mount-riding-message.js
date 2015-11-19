/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountRidingMessage = (function (_super) {
    __extends(MountRidingMessage, _super);
    function MountRidingMessage() {
        this.isRiding = false;
        _super.call(this);
    }
    MountRidingMessage.prototype.getMessageId = function () {
        return MountRidingMessage.ID;
    };
    MountRidingMessage.prototype.reset = function () {
        this.isRiding = false;
    };
    MountRidingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountRidingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountRidingMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountRidingMessage(param1);
    };
    MountRidingMessage.prototype.serializeAs_MountRidingMessage = function (param1) {
        param1.writeBoolean(this.isRiding);
    };
    MountRidingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountRidingMessage(param1);
    };
    MountRidingMessage.prototype.deserializeAs_MountRidingMessage = function (param1) {
        this.isRiding = param1.readBoolean();
    };
    MountRidingMessage.ID = 5967;
    return MountRidingMessage;
})(network_message_1.NetworkMessage);
module.exports = MountRidingMessage;
