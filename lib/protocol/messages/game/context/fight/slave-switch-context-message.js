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
var CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations');
var Shortcut = require('../../../../types/game/shortcut/shortcut');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var SlaveSwitchContextMessage = (function (_super) {
    __extends(SlaveSwitchContextMessage, _super);
    function SlaveSwitchContextMessage() {
        this.masterId = 0;
        this.slaveId = 0;
        this.slaveSpells = [];
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.shortcuts = [];
        _super.call(this);
    }
    SlaveSwitchContextMessage.prototype.getMessageId = function () {
        return SlaveSwitchContextMessage.ID;
    };
    SlaveSwitchContextMessage.prototype.reset = function () {
        this.masterId = 0;
        this.slaveId = 0;
        this.slaveSpells = [];
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.shortcuts = [];
    };
    SlaveSwitchContextMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SlaveSwitchContextMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SlaveSwitchContextMessage.prototype.serialize = function (param1) {
        this.serializeAs_SlaveSwitchContextMessage(param1);
    };
    SlaveSwitchContextMessage.prototype.serializeAs_SlaveSwitchContextMessage = function (param1) {
        param1.writeInt(this.masterId);
        param1.writeInt(this.slaveId);
        param1.writeShort(this.slaveSpells.length);
        var _loc2_ = 0;
        while (_loc2_ < this.slaveSpells.length) {
            (this.slaveSpells[_loc2_]).serializeAs_SpellItem(param1);
            _loc2_++;
        }
        this.slaveStats.serializeAs_CharacterCharacteristicsInformations(param1);
        param1.writeShort(this.shortcuts.length);
        var _loc3_ = 0;
        while (_loc3_ < this.shortcuts.length) {
            param1.writeShort((this.shortcuts[_loc3_]).getTypeId());
            (this.shortcuts[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    SlaveSwitchContextMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SlaveSwitchContextMessage(param1);
    };
    SlaveSwitchContextMessage.prototype.deserializeAs_SlaveSwitchContextMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = 0;
        var _loc8_ = null;
        this.masterId = param1.readInt();
        this.slaveId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new SpellItem();
            _loc6_.deserialize(param1);
            this.slaveSpells.push(_loc6_);
            _loc3_++;
        }
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.slaveStats.deserialize(param1);
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readUnsignedShort();
            _loc8_ = ProtocolTypeManager.getInstance(Shortcut, _loc7_);
            _loc8_.deserialize(param1);
            this.shortcuts.push(_loc8_);
            _loc5_++;
        }
    };
    SlaveSwitchContextMessage.ID = 6214;
    return SlaveSwitchContextMessage;
})(network_message_1.NetworkMessage);
module.exports = SlaveSwitchContextMessage;
