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
var GameActionFightTriggerGlyphTrapMessage = (function (_super) {
    __extends(GameActionFightTriggerGlyphTrapMessage, _super);
    function GameActionFightTriggerGlyphTrapMessage() {
        this.markId = 0;
        this.triggeringCharacterId = 0;
        this.triggeredSpellId = 0;
        _super.call(this);
    }
    GameActionFightTriggerGlyphTrapMessage.prototype.getMessageId = function () {
        return GameActionFightTriggerGlyphTrapMessage.ID;
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.reset = function () {
        this.markId = 0;
        this.triggeringCharacterId = 0;
        this.triggeredSpellId = 0;
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightTriggerGlyphTrapMessage(param1);
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.serializeAs_GameActionFightTriggerGlyphTrapMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.markId);
        param1.writeInt(this.triggeringCharacterId);
        if (this.triggeredSpellId < 0) {
            throw new Error('Forbidden value (' + this.triggeredSpellId + ') on element triggeredSpellId.');
        }
        param1.writeVarShort(this.triggeredSpellId);
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightTriggerGlyphTrapMessage(param1);
    };
    GameActionFightTriggerGlyphTrapMessage.prototype.deserializeAs_GameActionFightTriggerGlyphTrapMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.markId = param1.readShort();
        this.triggeringCharacterId = param1.readInt();
        this.triggeredSpellId = param1.readVarUhShort();
        if (this.triggeredSpellId < 0) {
            throw new Error('Forbidden value (' + this.triggeredSpellId + ') on element of GameActionFightTriggerGlyphTrapMessage.triggeredSpellId.');
        }
    };
    GameActionFightTriggerGlyphTrapMessage.ID = 5741;
    return GameActionFightTriggerGlyphTrapMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightTriggerGlyphTrapMessage;
