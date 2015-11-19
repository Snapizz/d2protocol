/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlaySpellAnimMessage = (function (_super) {
    __extends(GameRolePlaySpellAnimMessage, _super);
    function GameRolePlaySpellAnimMessage() {
        this.casterId = 0;
        this.targetCellId = 0;
        this.spellId = 0;
        this.spellLevel = 0;
        _super.call(this);
    }
    GameRolePlaySpellAnimMessage.prototype.getMessageId = function () {
        return GameRolePlaySpellAnimMessage.ID;
    };
    GameRolePlaySpellAnimMessage.prototype.reset = function () {
        this.casterId = 0;
        this.targetCellId = 0;
        this.spellId = 0;
        this.spellLevel = 0;
    };
    GameRolePlaySpellAnimMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlaySpellAnimMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlaySpellAnimMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlaySpellAnimMessage(param1);
    };
    GameRolePlaySpellAnimMessage.prototype.serializeAs_GameRolePlaySpellAnimMessage = function (param1) {
        param1.writeInt(this.casterId);
        if (this.targetCellId < 0 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeVarShort(this.targetCellId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
    };
    GameRolePlaySpellAnimMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlaySpellAnimMessage(param1);
    };
    GameRolePlaySpellAnimMessage.prototype.deserializeAs_GameRolePlaySpellAnimMessage = function (param1) {
        this.casterId = param1.readInt();
        this.targetCellId = param1.readVarUhShort();
        if (this.targetCellId < 0 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameRolePlaySpellAnimMessage.targetCellId.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameRolePlaySpellAnimMessage.spellId.');
        }
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of GameRolePlaySpellAnimMessage.spellLevel.');
        }
    };
    GameRolePlaySpellAnimMessage.ID = 6114;
    return GameRolePlaySpellAnimMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlaySpellAnimMessage;
