/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameActionFightSummonMessage = (function (_super) {
    __extends(GameActionFightSummonMessage, _super);
    function GameActionFightSummonMessage() {
        this.summon = new GameFightFighterInformations();
        _super.call(this);
    }
    GameActionFightSummonMessage.prototype.getMessageId = function () {
        return GameActionFightSummonMessage.ID;
    };
    GameActionFightSummonMessage.prototype.reset = function () {
        this.summon = new GameFightFighterInformations();
    };
    GameActionFightSummonMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightSummonMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightSummonMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightSummonMessage(param1);
    };
    GameActionFightSummonMessage.prototype.serializeAs_GameActionFightSummonMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.summon.getTypeId());
        this.summon.serialize(param1);
    };
    GameActionFightSummonMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightSummonMessage(param1);
    };
    GameActionFightSummonMessage.prototype.deserializeAs_GameActionFightSummonMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.summon = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
        this.summon.deserialize(param1);
    };
    GameActionFightSummonMessage.ID = 5825;
    return GameActionFightSummonMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightSummonMessage;
