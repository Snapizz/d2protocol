/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendAddRequestMessage = (function (_super) {
    __extends(FriendAddRequestMessage, _super);
    function FriendAddRequestMessage() {
        this.name = '';
        _super.call(this);
    }
    FriendAddRequestMessage.prototype.getMessageId = function () {
        return FriendAddRequestMessage.ID;
    };
    FriendAddRequestMessage.prototype.reset = function () {
        this.name = '';
    };
    FriendAddRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendAddRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendAddRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendAddRequestMessage(param1);
    };
    FriendAddRequestMessage.prototype.serializeAs_FriendAddRequestMessage = function (param1) {
        param1.writeUTF(this.name);
    };
    FriendAddRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendAddRequestMessage(param1);
    };
    FriendAddRequestMessage.prototype.deserializeAs_FriendAddRequestMessage = function (param1) {
        this.name = param1.readUTF();
    };
    FriendAddRequestMessage.ID = 4004;
    return FriendAddRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendAddRequestMessage;
