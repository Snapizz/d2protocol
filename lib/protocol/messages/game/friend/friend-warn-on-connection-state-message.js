/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendWarnOnConnectionStateMessage = (function (_super) {
    __extends(FriendWarnOnConnectionStateMessage, _super);
    function FriendWarnOnConnectionStateMessage() {
        this.enable = false;
        _super.call(this);
    }
    FriendWarnOnConnectionStateMessage.prototype.getMessageId = function () {
        return FriendWarnOnConnectionStateMessage.ID;
    };
    FriendWarnOnConnectionStateMessage.prototype.reset = function () {
        this.enable = false;
    };
    FriendWarnOnConnectionStateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendWarnOnConnectionStateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendWarnOnConnectionStateMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendWarnOnConnectionStateMessage(param1);
    };
    FriendWarnOnConnectionStateMessage.prototype.serializeAs_FriendWarnOnConnectionStateMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    FriendWarnOnConnectionStateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendWarnOnConnectionStateMessage(param1);
    };
    FriendWarnOnConnectionStateMessage.prototype.deserializeAs_FriendWarnOnConnectionStateMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    FriendWarnOnConnectionStateMessage.ID = 5630;
    return FriendWarnOnConnectionStateMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendWarnOnConnectionStateMessage;
