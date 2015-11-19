/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildSpellUpgradeRequestMessage = (function (_super) {
    __extends(GuildSpellUpgradeRequestMessage, _super);
    function GuildSpellUpgradeRequestMessage() {
        this.spellId = 0;
        _super.call(this);
    }
    GuildSpellUpgradeRequestMessage.prototype.getMessageId = function () {
        return GuildSpellUpgradeRequestMessage.ID;
    };
    GuildSpellUpgradeRequestMessage.prototype.reset = function () {
        this.spellId = 0;
    };
    GuildSpellUpgradeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildSpellUpgradeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildSpellUpgradeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildSpellUpgradeRequestMessage(param1);
    };
    GuildSpellUpgradeRequestMessage.prototype.serializeAs_GuildSpellUpgradeRequestMessage = function (param1) {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeInt(this.spellId);
    };
    GuildSpellUpgradeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildSpellUpgradeRequestMessage(param1);
    };
    GuildSpellUpgradeRequestMessage.prototype.deserializeAs_GuildSpellUpgradeRequestMessage = function (param1) {
        this.spellId = param1.readInt();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GuildSpellUpgradeRequestMessage.spellId.');
        }
    };
    GuildSpellUpgradeRequestMessage.ID = 5699;
    return GuildSpellUpgradeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildSpellUpgradeRequestMessage;
