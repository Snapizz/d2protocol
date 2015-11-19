/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendJoinRequestMessage = (function (_super) {
    __extends(FriendJoinRequestMessage, _super);
    function FriendJoinRequestMessage() {
        this.name = '';
        _super.call(this);
    }
    FriendJoinRequestMessage.prototype.getMessageId = function () {
        return FriendJoinRequestMessage.ID;
    };
    FriendJoinRequestMessage.prototype.reset = function () {
        this.name = '';
    };
    FriendJoinRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendJoinRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendJoinRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendJoinRequestMessage(param1);
    };
    FriendJoinRequestMessage.prototype.serializeAs_FriendJoinRequestMessage = function (param1) {
        param1.writeUTF(this.name);
    };
    FriendJoinRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendJoinRequestMessage(param1);
    };
    FriendJoinRequestMessage.prototype.deserializeAs_FriendJoinRequestMessage = function (param1) {
        this.name = param1.readUTF();
    };
    FriendJoinRequestMessage.ID = 5605;
    return FriendJoinRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendJoinRequestMessage;
