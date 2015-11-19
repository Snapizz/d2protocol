/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayPlayerFightFriendlyAnsweredMessage = (function (_super) {
    __extends(GameRolePlayPlayerFightFriendlyAnsweredMessage, _super);
    function GameRolePlayPlayerFightFriendlyAnsweredMessage() {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
        this.accept = false;
        _super.call(this);
    }
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.getMessageId = function () {
        return GameRolePlayPlayerFightFriendlyAnsweredMessage.ID;
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.reset = function () {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
        this.accept = false;
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage = function (param1) {
        param1.writeInt(this.fightId);
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element sourceId.');
        }
        param1.writeVarInt(this.sourceId);
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
        param1.writeBoolean(this.accept);
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyAnsweredMessage = function (param1) {
        this.fightId = param1.readInt();
        this.sourceId = param1.readVarUhInt();
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.sourceId.');
        }
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GameRolePlayPlayerFightFriendlyAnsweredMessage.targetId.');
        }
        this.accept = param1.readBoolean();
    };
    GameRolePlayPlayerFightFriendlyAnsweredMessage.ID = 5733;
    return GameRolePlayPlayerFightFriendlyAnsweredMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayPlayerFightFriendlyAnsweredMessage;
