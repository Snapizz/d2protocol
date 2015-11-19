/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations');
var CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var GuildFactsMessage = (function (_super) {
    __extends(GuildFactsMessage, _super);
    function GuildFactsMessage() {
        this.infos = new GuildFactSheetInformations();
        this.creationDate = 0;
        this.nbTaxCollectors = 0;
        this.enabled = false;
        this.members = [];
        _super.call(this);
    }
    GuildFactsMessage.prototype.getMessageId = function () {
        return GuildFactsMessage.ID;
    };
    GuildFactsMessage.prototype.reset = function () {
        this.infos = new GuildFactSheetInformations();
        this.creationDate = 0;
        this.nbTaxCollectors = 0;
        this.enabled = false;
        this.members = [];
    };
    GuildFactsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFactsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFactsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFactsMessage(param1);
    };
    GuildFactsMessage.prototype.serializeAs_GuildFactsMessage = function (param1) {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element nbTaxCollectors.');
        }
        param1.writeVarShort(this.nbTaxCollectors);
        param1.writeBoolean(this.enabled);
        param1.writeShort(this.members.length);
        var _loc2_ = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_CharacterMinimalInformations(param1);
            _loc2_++;
        }
    };
    GuildFactsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFactsMessage(param1);
    };
    GuildFactsMessage.prototype.deserializeAs_GuildFactsMessage = function (param1) {
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        this.infos = ProtocolTypeManager.getInstance(GuildFactSheetInformations, _loc2_);
        this.infos.deserialize(param1);
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of GuildFactsMessage.creationDate.');
        }
        this.nbTaxCollectors = param1.readVarUhShort();
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element of GuildFactsMessage.nbTaxCollectors.');
        }
        this.enabled = param1.readBoolean();
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = new CharacterMinimalInformations();
            _loc5_.deserialize(param1);
            this.members.push(_loc5_);
            _loc4_++;
        }
    };
    GuildFactsMessage.ID = 6415;
    return GuildFactsMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFactsMessage;
