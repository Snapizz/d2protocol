/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightDispellEffectMessage = require('./game-action-fight-dispell-effect-message');
var GameActionFightTriggerEffectMessage = (function (_super) {
    __extends(GameActionFightTriggerEffectMessage, _super);
    function GameActionFightTriggerEffectMessage() {
        _super.call(this);
    }
    GameActionFightTriggerEffectMessage.prototype.getMessageId = function () {
        return GameActionFightTriggerEffectMessage.ID;
    };
    GameActionFightTriggerEffectMessage.prototype.reset = function () {
    };
    GameActionFightTriggerEffectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightTriggerEffectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightTriggerEffectMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightTriggerEffectMessage(param1);
    };
    GameActionFightTriggerEffectMessage.prototype.serializeAs_GameActionFightTriggerEffectMessage = function (param1) {
        _super.prototype.serializeAs_GameActionFightDispellEffectMessage.call(this, param1);
    };
    GameActionFightTriggerEffectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightTriggerEffectMessage(param1);
    };
    GameActionFightTriggerEffectMessage.prototype.deserializeAs_GameActionFightTriggerEffectMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameActionFightTriggerEffectMessage.ID = 6147;
    return GameActionFightTriggerEffectMessage;
})(GameActionFightDispellEffectMessage);
module.exports = GameActionFightTriggerEffectMessage;
