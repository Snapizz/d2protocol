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
var GameActionFightSpellImmunityMessage = (function (_super) {
    __extends(GameActionFightSpellImmunityMessage, _super);
    function GameActionFightSpellImmunityMessage() {
        this.targetId = 0;
        this.spellId = 0;
        _super.call(this);
    }
    GameActionFightSpellImmunityMessage.prototype.getMessageId = function () {
        return GameActionFightSpellImmunityMessage.ID;
    };
    GameActionFightSpellImmunityMessage.prototype.reset = function () {
        this.targetId = 0;
        this.spellId = 0;
    };
    GameActionFightSpellImmunityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightSpellImmunityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightSpellImmunityMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightSpellImmunityMessage(param1);
    };
    GameActionFightSpellImmunityMessage.prototype.serializeAs_GameActionFightSpellImmunityMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
    };
    GameActionFightSpellImmunityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightSpellImmunityMessage(param1);
    };
    GameActionFightSpellImmunityMessage.prototype.deserializeAs_GameActionFightSpellImmunityMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightSpellImmunityMessage.spellId.');
        }
    };
    GameActionFightSpellImmunityMessage.ID = 6221;
    return GameActionFightSpellImmunityMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightSpellImmunityMessage;
