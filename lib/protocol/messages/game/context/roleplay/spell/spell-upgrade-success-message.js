/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellUpgradeSuccessMessage = (function (_super) {
    __extends(SpellUpgradeSuccessMessage, _super);
    function SpellUpgradeSuccessMessage() {
        this.spellId = 0;
        this.spellLevel = 0;
        _super.call(this);
    }
    SpellUpgradeSuccessMessage.prototype.getMessageId = function () {
        return SpellUpgradeSuccessMessage.ID;
    };
    SpellUpgradeSuccessMessage.prototype.reset = function () {
        this.spellId = 0;
        this.spellLevel = 0;
    };
    SpellUpgradeSuccessMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellUpgradeSuccessMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellUpgradeSuccessMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellUpgradeSuccessMessage(param1);
    };
    SpellUpgradeSuccessMessage.prototype.serializeAs_SpellUpgradeSuccessMessage = function (param1) {
        param1.writeInt(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);
    };
    SpellUpgradeSuccessMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellUpgradeSuccessMessage(param1);
    };
    SpellUpgradeSuccessMessage.prototype.deserializeAs_SpellUpgradeSuccessMessage = function (param1) {
        this.spellId = param1.readInt();
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellUpgradeSuccessMessage.spellLevel.');
        }
    };
    SpellUpgradeSuccessMessage.ID = 1201;
    return SpellUpgradeSuccessMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellUpgradeSuccessMessage;
