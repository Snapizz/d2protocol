/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountToggleRidingRequestMessage = (function (_super) {
    __extends(MountToggleRidingRequestMessage, _super);
    function MountToggleRidingRequestMessage() {
        _super.call(this);
    }
    MountToggleRidingRequestMessage.prototype.getMessageId = function () {
        return MountToggleRidingRequestMessage.ID;
    };
    MountToggleRidingRequestMessage.prototype.reset = function () {
    };
    MountToggleRidingRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountToggleRidingRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountToggleRidingRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountToggleRidingRequestMessage(param1);
    };
    MountToggleRidingRequestMessage.prototype.serializeAs_MountToggleRidingRequestMessage = function (param1) {
    };
    MountToggleRidingRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountToggleRidingRequestMessage(param1);
    };
    MountToggleRidingRequestMessage.prototype.deserializeAs_MountToggleRidingRequestMessage = function (param1) {
    };
    MountToggleRidingRequestMessage.ID = 5976;
    return MountToggleRidingRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountToggleRidingRequestMessage;
