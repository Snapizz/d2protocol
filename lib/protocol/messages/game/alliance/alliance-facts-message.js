/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
var GuildInAllianceInformations = require('../../../types/game/context/roleplay/guild-in-alliance-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var AllianceFactsMessage = (function (_super) {
    __extends(AllianceFactsMessage, _super);
    function AllianceFactsMessage() {
        this.infos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.controlledSubareaIds = [];
        this.leaderCharacterId = 0;
        this.leaderCharacterName = '';
        _super.call(this);
    }
    AllianceFactsMessage.prototype.getMessageId = function () {
        return AllianceFactsMessage.ID;
    };
    AllianceFactsMessage.prototype.reset = function () {
        this.infos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.controlledSubareaIds = [];
        this.leaderCharacterId = 0;
        this.leaderCharacterName = '';
    };
    AllianceFactsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceFactsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceFactsMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceFactsMessage(param1);
    };
    AllianceFactsMessage.prototype.serializeAs_AllianceFactsMessage = function (param1) {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);
        param1.writeShort(this.guilds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.guilds.length) {
            (this.guilds[_loc2_]).serializeAs_GuildInAllianceInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.controlledSubareaIds.length);
        var _loc3_ = 0;
        while (_loc3_ < this.controlledSubareaIds.length) {
            if (this.controlledSubareaIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.controlledSubareaIds[_loc3_] + ') on element 3 (starting at 1) of controlledSubareaIds.');
            }
            param1.writeVarShort(this.controlledSubareaIds[_loc3_]);
            _loc3_++;
        }
        if (this.leaderCharacterId < 0) {
            throw new Error('Forbidden value (' + this.leaderCharacterId + ') on element leaderCharacterId.');
        }
        param1.writeVarInt(this.leaderCharacterId);
        param1.writeUTF(this.leaderCharacterName);
    };
    AllianceFactsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceFactsMessage(param1);
    };
    AllianceFactsMessage.prototype.deserializeAs_AllianceFactsMessage = function (param1) {
        var _loc7_ = null;
        var _loc8_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(AllianceFactSheetInformations, _loc2_);
        this.infos.deserialize(param1);
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc7_ = new GuildInAllianceInformations();
            _loc7_.deserialize(param1);
            this.guilds.push(_loc7_);
            _loc4_++;
        }
        var _loc5_ = param1.readUnsignedShort();
        var _loc6_ = 0;
        while (_loc6_ < _loc5_) {
            _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of controlledSubareaIds.');
            }
            this.controlledSubareaIds.push(_loc8_);
            _loc6_++;
        }
        this.leaderCharacterId = param1.readVarUhInt();
        if (this.leaderCharacterId < 0) {
            throw new Error('Forbidden value (' + this.leaderCharacterId + ') on element of AllianceFactsMessage.leaderCharacterId.');
        }
        this.leaderCharacterName = param1.readUTF();
    };
    AllianceFactsMessage.ID = 6414;
    return AllianceFactsMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceFactsMessage;
