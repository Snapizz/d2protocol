/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PlayerStatus = require('../../../../types/game/character/status/player-status');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var PlayerStatusUpdateRequestMessage = (function (_super) {
    __extends(PlayerStatusUpdateRequestMessage, _super);
    function PlayerStatusUpdateRequestMessage() {
        this.status = new PlayerStatus();
        _super.call(this);
    }
    PlayerStatusUpdateRequestMessage.prototype.getMessageId = function () {
        return PlayerStatusUpdateRequestMessage.ID;
    };
    PlayerStatusUpdateRequestMessage.prototype.reset = function () {
        this.status = new PlayerStatus();
    };
    PlayerStatusUpdateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PlayerStatusUpdateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PlayerStatusUpdateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PlayerStatusUpdateRequestMessage(param1);
    };
    PlayerStatusUpdateRequestMessage.prototype.serializeAs_PlayerStatusUpdateRequestMessage = function (param1) {
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);
    };
    PlayerStatusUpdateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PlayerStatusUpdateRequestMessage(param1);
    };
    PlayerStatusUpdateRequestMessage.prototype.deserializeAs_PlayerStatusUpdateRequestMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
    };
    PlayerStatusUpdateRequestMessage.ID = 6387;
    return PlayerStatusUpdateRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PlayerStatusUpdateRequestMessage;
