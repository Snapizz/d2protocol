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
var GameActionFightDeathMessage = (function (_super) {
    __extends(GameActionFightDeathMessage, _super);
    function GameActionFightDeathMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    GameActionFightDeathMessage.prototype.getMessageId = function () {
        return GameActionFightDeathMessage.ID;
    };
    GameActionFightDeathMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    GameActionFightDeathMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightDeathMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightDeathMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightDeathMessage(param1);
    };
    GameActionFightDeathMessage.prototype.serializeAs_GameActionFightDeathMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
    };
    GameActionFightDeathMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightDeathMessage(param1);
    };
    GameActionFightDeathMessage.prototype.deserializeAs_GameActionFightDeathMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
    };
    GameActionFightDeathMessage.ID = 1099;
    return GameActionFightDeathMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightDeathMessage;
