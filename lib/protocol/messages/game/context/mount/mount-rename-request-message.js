/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountRenameRequestMessage = (function (_super) {
    __extends(MountRenameRequestMessage, _super);
    function MountRenameRequestMessage() {
        this.name = '';
        this.mountId = 0;
        _super.call(this);
    }
    MountRenameRequestMessage.prototype.getMessageId = function () {
        return MountRenameRequestMessage.ID;
    };
    MountRenameRequestMessage.prototype.reset = function () {
        this.name = '';
        this.mountId = 0;
    };
    MountRenameRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountRenameRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountRenameRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountRenameRequestMessage(param1);
    };
    MountRenameRequestMessage.prototype.serializeAs_MountRenameRequestMessage = function (param1) {
        param1.writeUTF(this.name);
        param1.writeVarInt(this.mountId);
    };
    MountRenameRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountRenameRequestMessage(param1);
    };
    MountRenameRequestMessage.prototype.deserializeAs_MountRenameRequestMessage = function (param1) {
        this.name = param1.readUTF();
        this.mountId = param1.readVarInt();
    };
    MountRenameRequestMessage.ID = 5987;
    return MountRenameRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountRenameRequestMessage;
