/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountClientData = require('../../../../types/game/mount/mount-client-data');
var MountSetMessage = (function (_super) {
    __extends(MountSetMessage, _super);
    function MountSetMessage() {
        this.mountData = new MountClientData();
        _super.call(this);
    }
    MountSetMessage.prototype.getMessageId = function () {
        return MountSetMessage.ID;
    };
    MountSetMessage.prototype.reset = function () {
        this.mountData = new MountClientData();
    };
    MountSetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountSetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountSetMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountSetMessage(param1);
    };
    MountSetMessage.prototype.serializeAs_MountSetMessage = function (param1) {
        this.mountData.serializeAs_MountClientData(param1);
    };
    MountSetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountSetMessage(param1);
    };
    MountSetMessage.prototype.deserializeAs_MountSetMessage = function (param1) {
        this.mountData = new MountClientData();
        this.mountData.deserialize(param1);
    };
    MountSetMessage.ID = 5968;
    return MountSetMessage;
})(network_message_1.NetworkMessage);
module.exports = MountSetMessage;
