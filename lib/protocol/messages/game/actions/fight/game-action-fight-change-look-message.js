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
var EntityLook = require('../../../../types/game/look/entity-look');
var GameActionFightChangeLookMessage = (function (_super) {
    __extends(GameActionFightChangeLookMessage, _super);
    function GameActionFightChangeLookMessage() {
        this.targetId = 0;
        this.entityLook = new EntityLook();
        _super.call(this);
    }
    GameActionFightChangeLookMessage.prototype.getMessageId = function () {
        return GameActionFightChangeLookMessage.ID;
    };
    GameActionFightChangeLookMessage.prototype.reset = function () {
        this.targetId = 0;
        this.entityLook = new EntityLook();
    };
    GameActionFightChangeLookMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightChangeLookMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightChangeLookMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightChangeLookMessage(param1);
    };
    GameActionFightChangeLookMessage.prototype.serializeAs_GameActionFightChangeLookMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        this.entityLook.serializeAs_EntityLook(param1);
    };
    GameActionFightChangeLookMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightChangeLookMessage(param1);
    };
    GameActionFightChangeLookMessage.prototype.deserializeAs_GameActionFightChangeLookMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);
    };
    GameActionFightChangeLookMessage.ID = 5532;
    return GameActionFightChangeLookMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightChangeLookMessage;
