/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightFighterInformations = require('../../../../../types/game/context/fight/game-fight-fighter-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var GameFightShowFighterMessage = (function (_super) {
    __extends(GameFightShowFighterMessage, _super);
    function GameFightShowFighterMessage() {
        this.informations = new GameFightFighterInformations();
        _super.call(this);
    }
    GameFightShowFighterMessage.prototype.getMessageId = function () {
        return GameFightShowFighterMessage.ID;
    };
    GameFightShowFighterMessage.prototype.reset = function () {
        this.informations = new GameFightFighterInformations();
    };
    GameFightShowFighterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightShowFighterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightShowFighterMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightShowFighterMessage(param1);
    };
    GameFightShowFighterMessage.prototype.serializeAs_GameFightShowFighterMessage = function (param1) {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);
    };
    GameFightShowFighterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightShowFighterMessage(param1);
    };
    GameFightShowFighterMessage.prototype.deserializeAs_GameFightShowFighterMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameFightFighterInformations, _loc2_);
        this.informations.deserialize(param1);
    };
    GameFightShowFighterMessage.ID = 5864;
    return GameFightShowFighterMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightShowFighterMessage;
