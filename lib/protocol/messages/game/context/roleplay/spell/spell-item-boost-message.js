/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellItemBoostMessage = (function (_super) {
    __extends(SpellItemBoostMessage, _super);
    function SpellItemBoostMessage() {
        this.statId = 0;
        this.spellId = 0;
        this.value = 0;
        _super.call(this);
    }
    SpellItemBoostMessage.prototype.getMessageId = function () {
        return SpellItemBoostMessage.ID;
    };
    SpellItemBoostMessage.prototype.reset = function () {
        this.statId = 0;
        this.spellId = 0;
        this.value = 0;
    };
    SpellItemBoostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellItemBoostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellItemBoostMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellItemBoostMessage(param1);
    };
    SpellItemBoostMessage.prototype.serializeAs_SpellItemBoostMessage = function (param1) {
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element statId.');
        }
        param1.writeVarInt(this.statId);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        param1.writeVarShort(this.value);
    };
    SpellItemBoostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellItemBoostMessage(param1);
    };
    SpellItemBoostMessage.prototype.deserializeAs_SpellItemBoostMessage = function (param1) {
        this.statId = param1.readVarUhInt();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of SpellItemBoostMessage.statId.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of SpellItemBoostMessage.spellId.');
        }
        this.value = param1.readVarShort();
    };
    SpellItemBoostMessage.ID = 6011;
    return SpellItemBoostMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellItemBoostMessage;
