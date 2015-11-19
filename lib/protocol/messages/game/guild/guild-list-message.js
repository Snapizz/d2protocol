/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInformations = require('../../../types/game/context/roleplay/guild-informations');
var GuildListMessage = (function (_super) {
    __extends(GuildListMessage, _super);
    function GuildListMessage() {
        this.guilds = [];
        _super.call(this);
    }
    GuildListMessage.prototype.getMessageId = function () {
        return GuildListMessage.ID;
    };
    GuildListMessage.prototype.reset = function () {
        this.guilds = [];
    };
    GuildListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildListMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildListMessage(param1);
    };
    GuildListMessage.prototype.serializeAs_GuildListMessage = function (param1) {
        param1.writeShort(this.guilds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.guilds.length) {
            (this.guilds[_loc2_]).serializeAs_GuildInformations(param1);
            _loc2_++;
        }
    };
    GuildListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildListMessage(param1);
    };
    GuildListMessage.prototype.deserializeAs_GuildListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new GuildInformations();
            _loc4_.deserialize(param1);
            this.guilds.push(_loc4_);
            _loc3_++;
        }
    };
    GuildListMessage.ID = 6413;
    return GuildListMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildListMessage;
