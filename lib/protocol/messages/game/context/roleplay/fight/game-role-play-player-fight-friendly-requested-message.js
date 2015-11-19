/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayPlayerFightFriendlyRequestedMessage = (function (_super) {
    __extends(GameRolePlayPlayerFightFriendlyRequestedMessage, _super);
    function GameRolePlayPlayerFightFriendlyRequestedMessage() {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
        _super.call(this);
    }
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.getMessageId = function () {
        return GameRolePlayPlayerFightFriendlyRequestedMessage.ID;
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.reset = function () {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.serializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element sourceId.');
        }
        param1.writeVarInt(this.sourceId);
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage(param1);
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.prototype.deserializeAs_GameRolePlayPlayerFightFriendlyRequestedMessage = function (param1) {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.fightId.');
        }
        this.sourceId = param1.readVarUhInt();
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.sourceId.');
        }
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GameRolePlayPlayerFightFriendlyRequestedMessage.targetId.');
        }
    };
    GameRolePlayPlayerFightFriendlyRequestedMessage.ID = 5937;
    return GameRolePlayPlayerFightFriendlyRequestedMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayPlayerFightFriendlyRequestedMessage;
