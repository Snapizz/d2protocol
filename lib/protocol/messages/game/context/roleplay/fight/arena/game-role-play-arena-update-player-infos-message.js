/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaUpdatePlayerInfosMessage = (function (_super) {
    __extends(GameRolePlayArenaUpdatePlayerInfosMessage, _super);
    function GameRolePlayArenaUpdatePlayerInfosMessage() {
        this.rank = 0;
        this.bestDailyRank = 0;
        this.bestRank = 0;
        this.victoryCount = 0;
        this.arenaFightcount = 0;
        _super.call(this);
    }
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaUpdatePlayerInfosMessage.ID;
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.reset = function () {
        this.rank = 0;
        this.bestDailyRank = 0;
        this.bestRank = 0;
        this.victoryCount = 0;
        this.arenaFightcount = 0;
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1);
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.serializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function (param1) {
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element rank.');
        }
        param1.writeVarShort(this.rank);
        if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
            throw new Error('Forbidden value (' + this.bestDailyRank + ') on element bestDailyRank.');
        }
        param1.writeVarShort(this.bestDailyRank);
        if (this.bestRank < 0 || this.bestRank > 2300) {
            throw new Error('Forbidden value (' + this.bestRank + ') on element bestRank.');
        }
        param1.writeVarShort(this.bestRank);
        if (this.victoryCount < 0) {
            throw new Error('Forbidden value (' + this.victoryCount + ') on element victoryCount.');
        }
        param1.writeVarShort(this.victoryCount);
        if (this.arenaFightcount < 0) {
            throw new Error('Forbidden value (' + this.arenaFightcount + ') on element arenaFightcount.');
        }
        param1.writeVarShort(this.arenaFightcount);
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage(param1);
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.prototype.deserializeAs_GameRolePlayArenaUpdatePlayerInfosMessage = function (param1) {
        this.rank = param1.readVarUhShort();
        if (this.rank < 0 || this.rank > 2300) {
            throw new Error('Forbidden value (' + this.rank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.rank.');
        }
        this.bestDailyRank = param1.readVarUhShort();
        if (this.bestDailyRank < 0 || this.bestDailyRank > 2300) {
            throw new Error('Forbidden value (' + this.bestDailyRank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestDailyRank.');
        }
        this.bestRank = param1.readVarUhShort();
        if (this.bestRank < 0 || this.bestRank > 2300) {
            throw new Error('Forbidden value (' + this.bestRank + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.bestRank.');
        }
        this.victoryCount = param1.readVarUhShort();
        if (this.victoryCount < 0) {
            throw new Error('Forbidden value (' + this.victoryCount + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.victoryCount.');
        }
        this.arenaFightcount = param1.readVarUhShort();
        if (this.arenaFightcount < 0) {
            throw new Error('Forbidden value (' + this.arenaFightcount + ') on element of GameRolePlayArenaUpdatePlayerInfosMessage.arenaFightcount.');
        }
    };
    GameRolePlayArenaUpdatePlayerInfosMessage.ID = 6301;
    return GameRolePlayArenaUpdatePlayerInfosMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaUpdatePlayerInfosMessage;
