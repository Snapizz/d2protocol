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
var FriendAddedMessage = (function (_super) {
    __extends(FriendAddedMessage, _super);
    function FriendAddedMessage() {
        this.friendAdded = new FriendInformations();
        _super.call(this);
    }
    FriendAddedMessage.prototype.getMessageId = function () {
        return FriendAddedMessage.ID;
    };
    FriendAddedMessage.prototype.reset = function () {
        this.friendAdded = new FriendInformations();
    };
    FriendAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendAddedMessage(param1);
    };
    FriendAddedMessage.prototype.serializeAs_FriendAddedMessage = function (param1) {
        param1.writeShort(this.friendAdded.getTypeId());
        this.friendAdded.serialize(param1);
    };
    FriendAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendAddedMessage(param1);
    };
    FriendAddedMessage.prototype.deserializeAs_FriendAddedMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.friendAdded = ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
        this.friendAdded.deserialize(param1);
    };
    FriendAddedMessage.ID = 5599;
    return FriendAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendAddedMessage;
