/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFightJoinRequestMessage = require('./guild-fight-join-request-message');
var GuildFightTakePlaceRequestMessage = (function (_super) {
    __extends(GuildFightTakePlaceRequestMessage, _super);
    function GuildFightTakePlaceRequestMessage() {
        this.replacedCharacterId = 0;
        _super.call(this);
    }
    GuildFightTakePlaceRequestMessage.prototype.getMessageId = function () {
        return GuildFightTakePlaceRequestMessage.ID;
    };
    GuildFightTakePlaceRequestMessage.prototype.reset = function () {
        this.replacedCharacterId = 0;
    };
    GuildFightTakePlaceRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightTakePlaceRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightTakePlaceRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightTakePlaceRequestMessage(param1);
    };
    GuildFightTakePlaceRequestMessage.prototype.serializeAs_GuildFightTakePlaceRequestMessage = function (param1) {
        _super.prototype.serializeAs_GuildFightJoinRequestMessage.call(this, param1);
        param1.writeInt(this.replacedCharacterId);
    };
    GuildFightTakePlaceRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightTakePlaceRequestMessage(param1);
    };
    GuildFightTakePlaceRequestMessage.prototype.deserializeAs_GuildFightTakePlaceRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.replacedCharacterId = param1.readInt();
    };
    GuildFightTakePlaceRequestMessage.ID = 6235;
    return GuildFightTakePlaceRequestMessage;
})(GuildFightJoinRequestMessage);
module.exports = GuildFightTakePlaceRequestMessage;
