/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildVersatileInformations = require('../../../types/game/social/guild-versatile-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var GuildVersatileInfoListMessage = (function (_super) {
    __extends(GuildVersatileInfoListMessage, _super);
    function GuildVersatileInfoListMessage() {
        this.guilds = [];
        _super.call(this);
    }
    GuildVersatileInfoListMessage.prototype.getMessageId = function () {
        return GuildVersatileInfoListMessage.ID;
    };
    GuildVersatileInfoListMessage.prototype.reset = function () {
        this.guilds = [];
    };
    GuildVersatileInfoListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildVersatileInfoListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildVersatileInfoListMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildVersatileInfoListMessage(param1);
    };
    GuildVersatileInfoListMessage.prototype.serializeAs_GuildVersatileInfoListMessage = function (param1) {
        param1.writeShort(this.guilds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.guilds.length) {
            param1.writeShort((this.guilds[_loc2_]).getTypeId());
            (this.guilds[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    GuildVersatileInfoListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildVersatileInfoListMessage(param1);
    };
    GuildVersatileInfoListMessage.prototype.deserializeAs_GuildVersatileInfoListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(GuildVersatileInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.guilds.push(_loc5_);
            _loc3_++;
        }
    };
    GuildVersatileInfoListMessage.ID = 6435;
    return GuildVersatileInfoListMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildVersatileInfoListMessage;
