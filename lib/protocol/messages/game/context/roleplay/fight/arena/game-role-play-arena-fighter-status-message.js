/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaFighterStatusMessage = (function (_super) {
    __extends(GameRolePlayArenaFighterStatusMessage, _super);
    function GameRolePlayArenaFighterStatusMessage() {
        this.fightId = 0;
        this.playerId = 0;
        this.accepted = false;
        _super.call(this);
    }
    GameRolePlayArenaFighterStatusMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaFighterStatusMessage.ID;
    };
    GameRolePlayArenaFighterStatusMessage.prototype.reset = function () {
        this.fightId = 0;
        this.playerId = 0;
        this.accepted = false;
    };
    GameRolePlayArenaFighterStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaFighterStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaFighterStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaFighterStatusMessage(param1);
    };
    GameRolePlayArenaFighterStatusMessage.prototype.serializeAs_GameRolePlayArenaFighterStatusMessage = function (param1) {
        param1.writeInt(this.fightId);
        param1.writeInt(this.playerId);
        param1.writeBoolean(this.accepted);
    };
    GameRolePlayArenaFighterStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaFighterStatusMessage(param1);
    };
    GameRolePlayArenaFighterStatusMessage.prototype.deserializeAs_GameRolePlayArenaFighterStatusMessage = function (param1) {
        this.fightId = param1.readInt();
        this.playerId = param1.readInt();
        this.accepted = param1.readBoolean();
    };
    GameRolePlayArenaFighterStatusMessage.ID = 6281;
    return GameRolePlayArenaFighterStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaFighterStatusMessage;
