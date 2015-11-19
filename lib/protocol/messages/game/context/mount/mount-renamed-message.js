/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountRenamedMessage = (function (_super) {
    __extends(MountRenamedMessage, _super);
    function MountRenamedMessage() {
        this.mountId = 0;
        this.name = '';
        _super.call(this);
    }
    MountRenamedMessage.prototype.getMessageId = function () {
        return MountRenamedMessage.ID;
    };
    MountRenamedMessage.prototype.reset = function () {
        this.mountId = 0;
        this.name = '';
    };
    MountRenamedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountRenamedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountRenamedMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountRenamedMessage(param1);
    };
    MountRenamedMessage.prototype.serializeAs_MountRenamedMessage = function (param1) {
        param1.writeVarInt(this.mountId);
        param1.writeUTF(this.name);
    };
    MountRenamedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountRenamedMessage(param1);
    };
    MountRenamedMessage.prototype.deserializeAs_MountRenamedMessage = function (param1) {
        this.mountId = param1.readVarInt();
        this.name = param1.readUTF();
    };
    MountRenamedMessage.ID = 5983;
    return MountRenamedMessage;
})(network_message_1.NetworkMessage);
module.exports = MountRenamedMessage;
