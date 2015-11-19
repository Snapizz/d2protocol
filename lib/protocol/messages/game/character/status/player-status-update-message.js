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
var PlayerStatusUpdateMessage = (function (_super) {
    __extends(PlayerStatusUpdateMessage, _super);
    function PlayerStatusUpdateMessage() {
        this.accountId = 0;
        this.playerId = 0;
        this.status = new PlayerStatus();
        _super.call(this);
    }
    PlayerStatusUpdateMessage.prototype.getMessageId = function () {
        return PlayerStatusUpdateMessage.ID;
    };
    PlayerStatusUpdateMessage.prototype.reset = function () {
        this.accountId = 0;
        this.playerId = 0;
        this.status = new PlayerStatus();
    };
    PlayerStatusUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PlayerStatusUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PlayerStatusUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PlayerStatusUpdateMessage(param1);
    };
    PlayerStatusUpdateMessage.prototype.serializeAs_PlayerStatusUpdateMessage = function (param1) {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);
    };
    PlayerStatusUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PlayerStatusUpdateMessage(param1);
    };
    PlayerStatusUpdateMessage.prototype.deserializeAs_PlayerStatusUpdateMessage = function (param1) {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of PlayerStatusUpdateMessage.accountId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of PlayerStatusUpdateMessage.playerId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
    };
    PlayerStatusUpdateMessage.ID = 6386;
    return PlayerStatusUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = PlayerStatusUpdateMessage;
