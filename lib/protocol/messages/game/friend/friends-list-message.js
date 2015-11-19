/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FriendInformations = require('../../../types/game/friend/friend-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var FriendsListMessage = (function (_super) {
    __extends(FriendsListMessage, _super);
    function FriendsListMessage() {
        this.friendsList = [];
        _super.call(this);
    }
    FriendsListMessage.prototype.getMessageId = function () {
        return FriendsListMessage.ID;
    };
    FriendsListMessage.prototype.reset = function () {
        this.friendsList = [];
    };
    FriendsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendsListMessage(param1);
    };
    FriendsListMessage.prototype.serializeAs_FriendsListMessage = function (param1) {
        param1.writeShort(this.friendsList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.friendsList.length) {
            param1.writeShort((this.friendsList[_loc2_]).getTypeId());
            (this.friendsList[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    FriendsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendsListMessage(param1);
    };
    FriendsListMessage.prototype.deserializeAs_FriendsListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(FriendInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.friendsList.push(_loc5_);
            _loc3_++;
        }
    };
    FriendsListMessage.ID = 4002;
    return FriendsListMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendsListMessage;
