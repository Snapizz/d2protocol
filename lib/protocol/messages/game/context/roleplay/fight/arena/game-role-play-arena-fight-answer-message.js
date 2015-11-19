/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaFightAnswerMessage = (function (_super) {
    __extends(GameRolePlayArenaFightAnswerMessage, _super);
    function GameRolePlayArenaFightAnswerMessage() {
        this.fightId = 0;
        this.accept = false;
        _super.call(this);
    }
    GameRolePlayArenaFightAnswerMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaFightAnswerMessage.ID;
    };
    GameRolePlayArenaFightAnswerMessage.prototype.reset = function () {
        this.fightId = 0;
        this.accept = false;
    };
    GameRolePlayArenaFightAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaFightAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaFightAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaFightAnswerMessage(param1);
    };
    GameRolePlayArenaFightAnswerMessage.prototype.serializeAs_GameRolePlayArenaFightAnswerMessage = function (param1) {
        param1.writeInt(this.fightId);
        param1.writeBoolean(this.accept);
    };
    GameRolePlayArenaFightAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaFightAnswerMessage(param1);
    };
    GameRolePlayArenaFightAnswerMessage.prototype.deserializeAs_GameRolePlayArenaFightAnswerMessage = function (param1) {
        this.fightId = param1.readInt();
        this.accept = param1.readBoolean();
    };
    GameRolePlayArenaFightAnswerMessage.ID = 6279;
    return GameRolePlayArenaFightAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaFightAnswerMessage;
