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
var GameActionFightReflectDamagesMessage = (function (_super) {
    __extends(GameActionFightReflectDamagesMessage, _super);
    function GameActionFightReflectDamagesMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    GameActionFightReflectDamagesMessage.prototype.getMessageId = function () {
        return GameActionFightReflectDamagesMessage.ID;
    };
    GameActionFightReflectDamagesMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    GameActionFightReflectDamagesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightReflectDamagesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightReflectDamagesMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightReflectDamagesMessage(param1);
    };
    GameActionFightReflectDamagesMessage.prototype.serializeAs_GameActionFightReflectDamagesMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
    };
    GameActionFightReflectDamagesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightReflectDamagesMessage(param1);
    };
    GameActionFightReflectDamagesMessage.prototype.deserializeAs_GameActionFightReflectDamagesMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
    };
    GameActionFightReflectDamagesMessage.ID = 5530;
    return GameActionFightReflectDamagesMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightReflectDamagesMessage;
