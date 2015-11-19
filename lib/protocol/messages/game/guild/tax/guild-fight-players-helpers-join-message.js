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
var GuildFightPlayersHelpersJoinMessage = (function (_super) {
    __extends(GuildFightPlayersHelpersJoinMessage, _super);
    function GuildFightPlayersHelpersJoinMessage() {
        this.fightId = 0;
        this.playerInfo = new CharacterMinimalPlusLookInformations();
        _super.call(this);
    }
    GuildFightPlayersHelpersJoinMessage.prototype.getMessageId = function () {
        return GuildFightPlayersHelpersJoinMessage.ID;
    };
    GuildFightPlayersHelpersJoinMessage.prototype.reset = function () {
        this.fightId = 0;
        this.playerInfo = new CharacterMinimalPlusLookInformations();
    };
    GuildFightPlayersHelpersJoinMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightPlayersHelpersJoinMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightPlayersHelpersJoinMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightPlayersHelpersJoinMessage(param1);
    };
    GuildFightPlayersHelpersJoinMessage.prototype.serializeAs_GuildFightPlayersHelpersJoinMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        this.playerInfo.serializeAs_CharacterMinimalPlusLookInformations(param1);
    };
    GuildFightPlayersHelpersJoinMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightPlayersHelpersJoinMessage(param1);
    };
    GuildFightPlayersHelpersJoinMessage.prototype.deserializeAs_GuildFightPlayersHelpersJoinMessage = function (param1) {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersHelpersJoinMessage.fightId.');
        }
        this.playerInfo = new CharacterMinimalPlusLookInformations();
        this.playerInfo.deserialize(param1);
    };
    GuildFightPlayersHelpersJoinMessage.ID = 5720;
    return GuildFightPlayersHelpersJoinMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightPlayersHelpersJoinMessage;
