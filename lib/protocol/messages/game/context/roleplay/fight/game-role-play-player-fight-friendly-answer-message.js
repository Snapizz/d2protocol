/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayPlayerFightFriendlyAnswerMessage = (function (_super) {
    __extends(GameRolePlayPlayerFightFriendlyAnswerMessage, _super);
    function GameRolePlayPlayerFightFriendlyAnswerMessage() {
        this.fightId = 0;
        this.accept = false;
        _super.call(this);
    }
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.getMessageId = function () {
        return GameRolePlayPlayerFightFriendlyAnswerMessage.ID;
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.reset = function () {
        this.fightId = 0;
        this.accept = false;
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function (param1) {
        param1.writeInt(this.fightId);
        param1.writeBoolean(this.accept);
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyAnswerMessage = function (param1) {
        this.fightId = param1.readInt();
        this.accept = param1.readBoolean();
    };
    GameRolePlayPlayerFightFriendlyAnswerMessage.ID = 5732;
    return GameRolePlayPlayerFightFriendlyAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayPlayerFightFriendlyAnswerMessage;
