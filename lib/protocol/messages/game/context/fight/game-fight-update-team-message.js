/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FightTeamInformations = require('../../../../types/game/context/fight/fight-team-informations');
var GameFightUpdateTeamMessage = (function (_super) {
    __extends(GameFightUpdateTeamMessage, _super);
    function GameFightUpdateTeamMessage() {
        this.fightId = 0;
        this.team = new FightTeamInformations();
        _super.call(this);
    }
    GameFightUpdateTeamMessage.prototype.getMessageId = function () {
        return GameFightUpdateTeamMessage.ID;
    };
    GameFightUpdateTeamMessage.prototype.reset = function () {
        this.fightId = 0;
        this.team = new FightTeamInformations();
    };
    GameFightUpdateTeamMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightUpdateTeamMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightUpdateTeamMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightUpdateTeamMessage(param1);
    };
    GameFightUpdateTeamMessage.prototype.serializeAs_GameFightUpdateTeamMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        this.team.serializeAs_FightTeamInformations(param1);
    };
    GameFightUpdateTeamMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightUpdateTeamMessage(param1);
    };
    GameFightUpdateTeamMessage.prototype.deserializeAs_GameFightUpdateTeamMessage = function (param1) {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightUpdateTeamMessage.fightId.');
        }
        this.team = new FightTeamInformations();
        this.team.deserialize(param1);
    };
    GameFightUpdateTeamMessage.ID = 5572;
    return GameFightUpdateTeamMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightUpdateTeamMessage;
