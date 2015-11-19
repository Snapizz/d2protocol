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
var FriendUpdateMessage = (function (_super) {
    __extends(FriendUpdateMessage, _super);
    function FriendUpdateMessage() {
        this.friendUpdated = new FriendInformations();
        _super.call(this);
    }
    FriendUpdateMessage.prototype.getMessageId = function () {
        return FriendUpdateMessage.ID;
    };
    FriendUpdateMessage.prototype.reset = function () {
        this.friendUpdated = new FriendInformations();
    };
    FriendUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    FriendUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    FriendUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_FriendUpdateMessage(param1);
    };
    FriendUpdateMessage.prototype.serializeAs_FriendUpdateMessage = function (param1) {
        param1.writeShort(this.friendUpdated.getTypeId());
        this.friendUpdated.serialize(param1);
    };
    FriendUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_FriendUpdateMessage(param1);
    };
    FriendUpdateMessage.prototype.deserializeAs_FriendUpdateMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.friendUpdated = ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
        this.friendUpdated.deserialize(param1);
    };
    FriendUpdateMessage.ID = 5924;
    return FriendUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = FriendUpdateMessage;
