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
var GameActionFightReflectSpellMessage = (function (_super) {
    __extends(GameActionFightReflectSpellMessage, _super);
    function GameActionFightReflectSpellMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    GameActionFightReflectSpellMessage.prototype.getMessageId = function () {
        return GameActionFightReflectSpellMessage.ID;
    };
    GameActionFightReflectSpellMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    GameActionFightReflectSpellMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightReflectSpellMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightReflectSpellMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightReflectSpellMessage(param1);
    };
    GameActionFightReflectSpellMessage.prototype.serializeAs_GameActionFightReflectSpellMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
    };
    GameActionFightReflectSpellMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightReflectSpellMessage(param1);
    };
    GameActionFightReflectSpellMessage.prototype.deserializeAs_GameActionFightReflectSpellMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
    };
    GameActionFightReflectSpellMessage.ID = 5531;
    return GameActionFightReflectSpellMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightReflectSpellMessage;
