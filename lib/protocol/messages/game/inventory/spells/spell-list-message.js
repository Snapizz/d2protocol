/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SpellItem = require('../../../../types/game/data/items/spell-item');
var SpellListMessage = (function (_super) {
    __extends(SpellListMessage, _super);
    function SpellListMessage() {
        this.spellPrevisualization = false;
        this.spells = [];
        _super.call(this);
    }
    SpellListMessage.prototype.getMessageId = function () {
        return SpellListMessage.ID;
    };
    SpellListMessage.prototype.reset = function () {
        this.spellPrevisualization = false;
        this.spells = [];
    };
    SpellListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SpellListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SpellListMessage.prototype.serialize = function (param1) {
        this.serializeAs_SpellListMessage(param1);
    };
    SpellListMessage.prototype.serializeAs_SpellListMessage = function (param1) {
        param1.writeBoolean(this.spellPrevisualization);
        param1.writeShort(this.spells.length);
        var _loc2_ = 0;
        while (_loc2_ < this.spells.length) {
            (this.spells[_loc2_]).serializeAs_SpellItem(param1);
            _loc2_++;
        }
    };
    SpellListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SpellListMessage(param1);
    };
    SpellListMessage.prototype.deserializeAs_SpellListMessage = function (param1) {
        var _loc4_ = null;
        this.spellPrevisualization = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new SpellItem();
            _loc4_.deserialize(param1);
            this.spells.push(_loc4_);
            _loc3_++;
        }
    };
    SpellListMessage.ID = 1200;
    return SpellListMessage;
})(network_message_1.NetworkMessage);
module.exports = SpellListMessage;
