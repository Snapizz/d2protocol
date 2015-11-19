/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellUpgradeRequestMessage = (function (_super) {
    __extends(SpellUpgradeRequestMessage, _super);
    function SpellUpgradeRequestMessage() {
        this.spellId = 0;
        this.spellLevel = 0;
        _super.call(this);
    }
    SpellUpgradeRequestMessage.prototype.getMessageId = function () {
        return SpellUpgradeRequestMessage.ID;
    };
    SpellUpgradeRequestMessage.prototype.reset = function () {
        this.spellId = 0;
        this.spellLevel = 0;
    };
    SpellUpgradeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellUpgradeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellUpgradeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellUpgradeRequestMessage(param1);
    };
    SpellUpgradeRequestMessage.prototype.serializeAs_SpellUpgradeRequestMessage = function (param1) {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
    };
    SpellUpgradeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellUpgradeRequestMessage(param1);
    };
    SpellUpgradeRequestMessage.prototype.deserializeAs_SpellUpgradeRequestMessage = function (param1) {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of SpellUpgradeRequestMessage.spellId.');
        }
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellUpgradeRequestMessage.spellLevel.');
        }
    };
    SpellUpgradeRequestMessage.ID = 5608;
    return SpellUpgradeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellUpgradeRequestMessage;
