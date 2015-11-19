/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendDeleteResultMessage = (function (_super) {
    __extends(FriendDeleteResultMessage, _super);
    function FriendDeleteResultMessage() {
        this.success = false;
        this.name = '';
        _super.call(this);
    }
    FriendDeleteResultMessage.prototype.getMessageId = function () {
        return FriendDeleteResultMessage.ID;
    };
    FriendDeleteResultMessage.prototype.reset = function () {
        this.success = false;
        this.name = '';
    };
    FriendDeleteResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendDeleteResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendDeleteResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendDeleteResultMessage(param1);
    };
    FriendDeleteResultMessage.prototype.serializeAs_FriendDeleteResultMessage = function (param1) {
        param1.writeBoolean(this.success);
        param1.writeUTF(this.name);
    };
    FriendDeleteResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendDeleteResultMessage(param1);
    };
    FriendDeleteResultMessage.prototype.deserializeAs_FriendDeleteResultMessage = function (param1) {
        this.success = param1.readBoolean();
        this.name = param1.readUTF();
    };
    FriendDeleteResultMessage.ID = 5601;
    return FriendDeleteResultMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendDeleteResultMessage;
