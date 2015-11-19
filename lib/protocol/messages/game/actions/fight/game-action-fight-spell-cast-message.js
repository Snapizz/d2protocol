/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionFightTargetedAbilityMessage = require('./abstract-game-action-fight-targeted-ability-message');
var GameActionFightSpellCastMessage = (function (_super) {
    __extends(GameActionFightSpellCastMessage, _super);
    function GameActionFightSpellCastMessage() {
        this.spellId = 0;
        this.spellLevel = 0;
        this.portalsIds = [];
        _super.call(this);
    }
    GameActionFightSpellCastMessage.prototype.getMessageId = function () {
        return GameActionFightSpellCastMessage.ID;
    };
    GameActionFightSpellCastMessage.prototype.reset = function () {
        this.spellId = 0;
        this.spellLevel = 0;
        this.portalsIds = [];
    };
    GameActionFightSpellCastMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightSpellCastMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightSpellCastMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightSpellCastMessage(param1);
    };
    GameActionFightSpellCastMessage.prototype.serializeAs_GameActionFightSpellCastMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionFightTargetedAbilityMessage.call(this, param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
        param1.writeShort(this.portalsIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.portalsIds.length) {
            param1.writeShort(this.portalsIds[_loc2_]);
            _loc2_++;
        }
    };
    GameActionFightSpellCastMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightSpellCastMessage(param1);
    };
    GameActionFightSpellCastMessage.prototype.deserializeAs_GameActionFightSpellCastMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightSpellCastMessage.spellId.');
        }
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of GameActionFightSpellCastMessage.spellLevel.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readShort();
            this.portalsIds.push(_loc4_);
            _loc3_++;
        }
    };
    GameActionFightSpellCastMessage.ID = 1010;
    return GameActionFightSpellCastMessage;
})(AbstractGameActionFightTargetedAbilityMessage);
module.exports = GameActionFightSpellCastMessage;
