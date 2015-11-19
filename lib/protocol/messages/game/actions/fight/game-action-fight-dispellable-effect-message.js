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
var AbstractFightDispellableEffect = require('../../../../types/game/actions/fight/abstract-fight-dispellable-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameActionFightDispellableEffectMessage = (function (_super) {
    __extends(GameActionFightDispellableEffectMessage, _super);
    function GameActionFightDispellableEffectMessage() {
        this.effect = new AbstractFightDispellableEffect();
        _super.call(this);
    }
    GameActionFightDispellableEffectMessage.prototype.getMessageId = function () {
        return GameActionFightDispellableEffectMessage.ID;
    };
    GameActionFightDispellableEffectMessage.prototype.reset = function () {
        this.effect = new AbstractFightDispellableEffect();
    };
    GameActionFightDispellableEffectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightDispellableEffectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightDispellableEffectMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightDispellableEffectMessage(param1);
    };
    GameActionFightDispellableEffectMessage.prototype.serializeAs_GameActionFightDispellableEffectMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.effect.getTypeId());
        this.effect.serialize(param1);
    };
    GameActionFightDispellableEffectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightDispellableEffectMessage(param1);
    };
    GameActionFightDispellableEffectMessage.prototype.deserializeAs_GameActionFightDispellableEffectMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _loc2_);
        this.effect.deserialize(param1);
    };
    GameActionFightDispellableEffectMessage.ID = 6070;
    return GameActionFightDispellableEffectMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightDispellableEffectMessage;
