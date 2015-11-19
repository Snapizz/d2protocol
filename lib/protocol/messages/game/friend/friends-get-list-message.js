/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendsGetListMessage = (function (_super) {
    __extends(FriendsGetListMessage, _super);
    function FriendsGetListMessage() {
        _super.call(this);
    }
    FriendsGetListMessage.prototype.getMessageId = function () {
        return FriendsGetListMessage.ID;
    };
    FriendsGetListMessage.prototype.reset = function () {
    };
    FriendsGetListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendsGetListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendsGetListMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendsGetListMessage(param1);
    };
    FriendsGetListMessage.prototype.serializeAs_FriendsGetListMessage = function (param1) {
    };
    FriendsGetListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendsGetListMessage(param1);
    };
    FriendsGetListMessage.prototype.deserializeAs_FriendsGetListMessage = function (param1) {
    };
    FriendsGetListMessage.ID = 4001;
    return FriendsGetListMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendsGetListMessage;
