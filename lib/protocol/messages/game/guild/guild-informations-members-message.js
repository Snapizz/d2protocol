/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMember = require('../../../types/game/guild/guild-member');
var GuildInformationsMembersMessage = (function (_super) {
    __extends(GuildInformationsMembersMessage, _super);
    function GuildInformationsMembersMessage() {
        this.members = [];
        _super.call(this);
    }
    GuildInformationsMembersMessage.prototype.getMessageId = function () {
        return GuildInformationsMembersMessage.ID;
    };
    GuildInformationsMembersMessage.prototype.reset = function () {
        this.members = [];
    };
    GuildInformationsMembersMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInformationsMembersMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInformationsMembersMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInformationsMembersMessage(param1);
    };
    GuildInformationsMembersMessage.prototype.serializeAs_GuildInformationsMembersMessage = function (param1) {
        param1.writeShort(this.members.length);
        var _loc2_ = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_GuildMember(param1);
            _loc2_++;
        }
    };
    GuildInformationsMembersMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInformationsMembersMessage(param1);
    };
    GuildInformationsMembersMessage.prototype.deserializeAs_GuildInformationsMembersMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new GuildMember();
            _loc4_.deserialize(param1);
            this.members.push(_loc4_);
            _loc3_++;
        }
    };
    GuildInformationsMembersMessage.ID = 5558;
    return GuildInformationsMembersMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInformationsMembersMessage;
