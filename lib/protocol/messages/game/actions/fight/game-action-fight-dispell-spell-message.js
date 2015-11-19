/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightDispellMessage = require('./game-action-fight-dispell-message');
var GameActionFightDispellSpellMessage = (function (_super) {
    __extends(GameActionFightDispellSpellMessage, _super);
    function GameActionFightDispellSpellMessage() {
        this.spellId = 0;
        _super.call(this);
    }
    GameActionFightDispellSpellMessage.prototype.getMessageId = function () {
        return GameActionFightDispellSpellMessage.ID;
    };
    GameActionFightDispellSpellMessage.prototype.reset = function () {
        this.spellId = 0;
    };
    GameActionFightDispellSpellMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightDispellSpellMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightDispellSpellMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightDispellSpellMessage(param1);
    };
    GameActionFightDispellSpellMessage.prototype.serializeAs_GameActionFightDispellSpellMessage = function (param1) {
        _super.prototype.serializeAs_GameActionFightDispellMessage.call(this, param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
    };
    GameActionFightDispellSpellMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightDispellSpellMessage(param1);
    };
    GameActionFightDispellSpellMessage.prototype.deserializeAs_GameActionFightDispellSpellMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightDispellSpellMessage.spellId.');
        }
    };
    GameActionFightDispellSpellMessage.ID = 6176;
    return GameActionFightDispellSpellMessage;
})(GameActionFightDispellMessage);
module.exports = GameActionFightDispellSpellMessage;
