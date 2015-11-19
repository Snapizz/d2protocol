/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountUnSetMessage = (function (_super) {
    __extends(MountUnSetMessage, _super);
    function MountUnSetMessage() {
        _super.call(this);
    }
    MountUnSetMessage.prototype.getMessageId = function () {
        return MountUnSetMessage.ID;
    };
    MountUnSetMessage.prototype.reset = function () {
    };
    MountUnSetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountUnSetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountUnSetMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountUnSetMessage(param1);
    };
    MountUnSetMessage.prototype.serializeAs_MountUnSetMessage = function (param1) {
    };
    MountUnSetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountUnSetMessage(param1);
    };
    MountUnSetMessage.prototype.deserializeAs_MountUnSetMessage = function (param1) {
    };
    MountUnSetMessage.ID = 5982;
    return MountUnSetMessage;
})(network_message_1.NetworkMessage);
module.exports = MountUnSetMessage;
