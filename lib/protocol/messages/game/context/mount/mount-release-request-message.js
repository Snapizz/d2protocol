/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountReleaseRequestMessage = (function (_super) {
    __extends(MountReleaseRequestMessage, _super);
    function MountReleaseRequestMessage() {
        _super.call(this);
    }
    MountReleaseRequestMessage.prototype.getMessageId = function () {
        return MountReleaseRequestMessage.ID;
    };
    MountReleaseRequestMessage.prototype.reset = function () {
    };
    MountReleaseRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountReleaseRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountReleaseRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountReleaseRequestMessage(param1);
    };
    MountReleaseRequestMessage.prototype.serializeAs_MountReleaseRequestMessage = function (param1) {
    };
    MountReleaseRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountReleaseRequestMessage(param1);
    };
    MountReleaseRequestMessage.prototype.deserializeAs_MountReleaseRequestMessage = function (param1) {
    };
    MountReleaseRequestMessage.ID = 5980;
    return MountReleaseRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountReleaseRequestMessage;
