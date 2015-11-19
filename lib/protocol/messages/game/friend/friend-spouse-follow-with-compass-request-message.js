/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendSpouseFollowWithCompassRequestMessage = (function (_super) {
    __extends(FriendSpouseFollowWithCompassRequestMessage, _super);
    function FriendSpouseFollowWithCompassRequestMessage() {
        this.enable = false;
        _super.call(this);
    }
    FriendSpouseFollowWithCompassRequestMessage.prototype.getMessageId = function () {
        return FriendSpouseFollowWithCompassRequestMessage.ID;
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.reset = function () {
        this.enable = false;
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendSpouseFollowWithCompassRequestMessage(param1);
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.serializeAs_FriendSpouseFollowWithCompassRequestMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendSpouseFollowWithCompassRequestMessage(param1);
    };
    FriendSpouseFollowWithCompassRequestMessage.prototype.deserializeAs_FriendSpouseFollowWithCompassRequestMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    FriendSpouseFollowWithCompassRequestMessage.ID = 5606;
    return FriendSpouseFollowWithCompassRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendSpouseFollowWithCompassRequestMessage;
