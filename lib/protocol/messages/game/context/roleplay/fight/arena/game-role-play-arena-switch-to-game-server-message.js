/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaSwitchToGameServerMessage = (function (_super) {
    __extends(GameRolePlayArenaSwitchToGameServerMessage, _super);
    function GameRolePlayArenaSwitchToGameServerMessage() {
        this.validToken = false;
        this.ticket = [];
        this.homeServerId = 0;
        _super.call(this);
    }
    GameRolePlayArenaSwitchToGameServerMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaSwitchToGameServerMessage.ID;
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.reset = function () {
        this.validToken = false;
        this.ticket = [];
        this.homeServerId = 0;
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1);
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.serializeAs_GameRolePlayArenaSwitchToGameServerMessage = function (param1) {
        param1.writeBoolean(this.validToken);
        param1.writeVarInt(this.ticket.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.homeServerId);
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage(param1);
    };
    GameRolePlayArenaSwitchToGameServerMessage.prototype.deserializeAs_GameRolePlayArenaSwitchToGameServerMessage = function (param1) {
        var _loc4_ = 0;
        this.validToken = param1.readBoolean();
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
        this.homeServerId = param1.readShort();
    };
    GameRolePlayArenaSwitchToGameServerMessage.ID = 6574;
    return GameRolePlayArenaSwitchToGameServerMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaSwitchToGameServerMessage;
