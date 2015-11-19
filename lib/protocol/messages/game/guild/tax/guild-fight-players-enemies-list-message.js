/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterMinimalPlusLookInformations = require('../../../../types/game/character/character-minimal-plus-look-informations');
var GuildFightPlayersEnemiesListMessage = (function (_super) {
    __extends(GuildFightPlayersEnemiesListMessage, _super);
    function GuildFightPlayersEnemiesListMessage() {
        this.fightId = 0;
        this.playerInfo = [];
        _super.call(this);
    }
    GuildFightPlayersEnemiesListMessage.prototype.getMessageId = function () {
        return GuildFightPlayersEnemiesListMessage.ID;
    };
    GuildFightPlayersEnemiesListMessage.prototype.reset = function () {
        this.fightId = 0;
        this.playerInfo = [];
    };
    GuildFightPlayersEnemiesListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightPlayersEnemiesListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightPlayersEnemiesListMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightPlayersEnemiesListMessage(param1);
    };
    GuildFightPlayersEnemiesListMessage.prototype.serializeAs_GuildFightPlayersEnemiesListMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.playerInfo.length);
        var _loc2_ = 0;
        while (_loc2_ < this.playerInfo.length) {
            (this.playerInfo[_loc2_]).serializeAs_CharacterMinimalPlusLookInformations(param1);
            _loc2_++;
        }
    };
    GuildFightPlayersEnemiesListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightPlayersEnemiesListMessage(param1);
    };
    GuildFightPlayersEnemiesListMessage.prototype.deserializeAs_GuildFightPlayersEnemiesListMessage = function (param1) {
        var _loc4_ = null;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersEnemiesListMessage.fightId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new CharacterMinimalPlusLookInformations();
            _loc4_.deserialize(param1);
            this.playerInfo.push(_loc4_);
            _loc3_++;
        }
    };
    GuildFightPlayersEnemiesListMessage.ID = 5928;
    return GuildFightPlayersEnemiesListMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightPlayersEnemiesListMessage;
