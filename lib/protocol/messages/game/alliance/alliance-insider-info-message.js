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
var GuildInsiderFactSheetInformations = require('../../../types/game/social/guild-insider-fact-sheet-informations');
var PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var AllianceInsiderInfoMessage = (function (_super) {
    __extends(AllianceInsiderInfoMessage, _super);
    function AllianceInsiderInfoMessage() {
        this.allianceInfos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.prisms = [];
        _super.call(this);
    }
    AllianceInsiderInfoMessage.prototype.getMessageId = function () {
        return AllianceInsiderInfoMessage.ID;
    };
    AllianceInsiderInfoMessage.prototype.reset = function () {
        this.allianceInfos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.prisms = [];
    };
    AllianceInsiderInfoMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceInsiderInfoMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceInsiderInfoMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInsiderInfoMessage(param1);
    };
    AllianceInsiderInfoMessage.prototype.serializeAs_AllianceInsiderInfoMessage = function (param1) {
        this.allianceInfos.serializeAs_AllianceFactSheetInformations(param1);
        param1.writeShort(this.guilds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.guilds.length) {
            (this.guilds[_loc2_]).serializeAs_GuildInsiderFactSheetInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.prisms.length);
        var _loc3_ = 0;
        while (_loc3_ < this.prisms.length) {
            param1.writeShort((this.prisms[_loc3_]).getTypeId());
            (this.prisms[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    AllianceInsiderInfoMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInsiderInfoMessage(param1);
    };
    AllianceInsiderInfoMessage.prototype.deserializeAs_AllianceInsiderInfoMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = 0;
        var _loc8_ = null;
        this.allianceInfos = new AllianceFactSheetInformations();
        this.allianceInfos.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new GuildInsiderFactSheetInformations();
            _loc6_.deserialize(param1);
            this.guilds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readUnsignedShort();
            _loc8_ = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _loc7_);
            _loc8_.deserialize(param1);
            this.prisms.push(_loc8_);
            _loc5_++;
        }
    };
    AllianceInsiderInfoMessage.ID = 6403;
    return AllianceInsiderInfoMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceInsiderInfoMessage;
