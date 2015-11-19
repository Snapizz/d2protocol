/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendSetWarnOnConnectionMessage = (function (_super) {
    __extends(FriendSetWarnOnConnectionMessage, _super);
    function FriendSetWarnOnConnectionMessage() {
        this.enable = false;
        _super.call(this);
    }
    FriendSetWarnOnConnectionMessage.prototype.getMessageId = function () {
        return FriendSetWarnOnConnectionMessage.ID;
    };
    FriendSetWarnOnConnectionMessage.prototype.reset = function () {
        this.enable = false;
    };
    FriendSetWarnOnConnectionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendSetWarnOnConnectionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendSetWarnOnConnectionMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendSetWarnOnConnectionMessage(param1);
    };
    FriendSetWarnOnConnectionMessage.prototype.serializeAs_FriendSetWarnOnConnectionMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    FriendSetWarnOnConnectionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendSetWarnOnConnectionMessage(param1);
    };
    FriendSetWarnOnConnectionMessage.prototype.deserializeAs_FriendSetWarnOnConnectionMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    FriendSetWarnOnConnectionMessage.ID = 5602;
    return FriendSetWarnOnConnectionMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendSetWarnOnConnectionMessage;
