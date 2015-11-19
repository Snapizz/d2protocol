/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextActorInformations = require('../../../../../types/game/context/game-context-actor-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var GameFightRefreshFighterMessage = (function (_super) {
    __extends(GameFightRefreshFighterMessage, _super);
    function GameFightRefreshFighterMessage() {
        this.informations = new GameContextActorInformations();
        _super.call(this);
    }
    GameFightRefreshFighterMessage.prototype.getMessageId = function () {
        return GameFightRefreshFighterMessage.ID;
    };
    GameFightRefreshFighterMessage.prototype.reset = function () {
        this.informations = new GameContextActorInformations();
    };
    GameFightRefreshFighterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightRefreshFighterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightRefreshFighterMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightRefreshFighterMessage(param1);
    };
    GameFightRefreshFighterMessage.prototype.serializeAs_GameFightRefreshFighterMessage = function (param1) {
        param1.writeShort(this.informations.getTypeId());
        this.informations.serialize(param1);
    };
    GameFightRefreshFighterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightRefreshFighterMessage(param1);
    };
    GameFightRefreshFighterMessage.prototype.deserializeAs_GameFightRefreshFighterMessage = function (param1) {
        var _loc2_ = param1.readUnsignedShort();
        this.informations = ProtocolTypeManager.getInstance(GameContextActorInformations, _loc2_);
        this.informations.deserialize(param1);
    };
    GameFightRefreshFighterMessage.ID = 6309;
    return GameFightRefreshFighterMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightRefreshFighterMessage;
