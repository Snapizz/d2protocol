/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFightPlayersEnemyRemoveMessage = (function (_super) {
    __extends(GuildFightPlayersEnemyRemoveMessage, _super);
    function GuildFightPlayersEnemyRemoveMessage() {
        this.fightId = 0;
        this.playerId = 0;
        _super.call(this);
    }
    GuildFightPlayersEnemyRemoveMessage.prototype.getMessageId = function () {
        return GuildFightPlayersEnemyRemoveMessage.ID;
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.reset = function () {
        this.fightId = 0;
        this.playerId = 0;
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightPlayersEnemyRemoveMessage(param1);
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.serializeAs_GuildFightPlayersEnemyRemoveMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightPlayersEnemyRemoveMessage(param1);
    };
    GuildFightPlayersEnemyRemoveMessage.prototype.deserializeAs_GuildFightPlayersEnemyRemoveMessage = function (param1) {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersEnemyRemoveMessage.fightId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of GuildFightPlayersEnemyRemoveMessage.playerId.');
        }
    };
    GuildFightPlayersEnemyRemoveMessage.ID = 5929;
    return GuildFightPlayersEnemyRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightPlayersEnemyRemoveMessage;
