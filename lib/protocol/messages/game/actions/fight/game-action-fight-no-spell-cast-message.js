/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightNoSpellCastMessage = (function (_super) {
    __extends(GameActionFightNoSpellCastMessage, _super);
    function GameActionFightNoSpellCastMessage() {
        this.spellLevelId = 0;
        _super.call(this);
    }
    GameActionFightNoSpellCastMessage.prototype.getMessageId = function () {
        return GameActionFightNoSpellCastMessage.ID;
    };
    GameActionFightNoSpellCastMessage.prototype.reset = function () {
        this.spellLevelId = 0;
    };
    GameActionFightNoSpellCastMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightNoSpellCastMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightNoSpellCastMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightNoSpellCastMessage(param1);
    };
    GameActionFightNoSpellCastMessage.prototype.serializeAs_GameActionFightNoSpellCastMessage = function (param1) {
        if (this.spellLevelId < 0) {
            throw new Error('Forbidden value (' + this.spellLevelId + ') on element spellLevelId.');
        }
        param1.writeVarInt(this.spellLevelId);
    };
    GameActionFightNoSpellCastMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightNoSpellCastMessage(param1);
    };
    GameActionFightNoSpellCastMessage.prototype.deserializeAs_GameActionFightNoSpellCastMessage = function (param1) {
        this.spellLevelId = param1.readVarUhInt();
        if (this.spellLevelId < 0) {
            throw new Error('Forbidden value (' + this.spellLevelId + ') on element of GameActionFightNoSpellCastMessage.spellLevelId.');
        }
    };
    GameActionFightNoSpellCastMessage.ID = 6132;
    return GameActionFightNoSpellCastMessage;
})(network_message_1.NetworkMessage);
module.exports = GameActionFightNoSpellCastMessage;
