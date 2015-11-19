/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendDeleteRequestMessage = (function (_super) {
    __extends(FriendDeleteRequestMessage, _super);
    function FriendDeleteRequestMessage() {
        this.accountId = 0;
        _super.call(this);
    }
    FriendDeleteRequestMessage.prototype.getMessageId = function () {
        return FriendDeleteRequestMessage.ID;
    };
    FriendDeleteRequestMessage.prototype.reset = function () {
        this.accountId = 0;
    };
    FriendDeleteRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendDeleteRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendDeleteRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendDeleteRequestMessage(param1);
    };
    FriendDeleteRequestMessage.prototype.serializeAs_FriendDeleteRequestMessage = function (param1) {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
    };
    FriendDeleteRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendDeleteRequestMessage(param1);
    };
    FriendDeleteRequestMessage.prototype.deserializeAs_FriendDeleteRequestMessage = function (param1) {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of FriendDeleteRequestMessage.accountId.');
        }
    };
    FriendDeleteRequestMessage.ID = 5603;
    return FriendDeleteRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendDeleteRequestMessage;
