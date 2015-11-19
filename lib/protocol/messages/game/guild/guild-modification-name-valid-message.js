/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildModificationNameValidMessage = (function (_super) {
    __extends(GuildModificationNameValidMessage, _super);
    function GuildModificationNameValidMessage() {
        this.guildName = '';
        _super.call(this);
    }
    GuildModificationNameValidMessage.prototype.getMessageId = function () {
        return GuildModificationNameValidMessage.ID;
    };
    GuildModificationNameValidMessage.prototype.reset = function () {
        this.guildName = '';
    };
    GuildModificationNameValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildModificationNameValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildModificationNameValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildModificationNameValidMessage(param1);
    };
    GuildModificationNameValidMessage.prototype.serializeAs_GuildModificationNameValidMessage = function (param1) {
        param1.writeUTF(this.guildName);
    };
    GuildModificationNameValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildModificationNameValidMessage(param1);
    };
    GuildModificationNameValidMessage.prototype.deserializeAs_GuildModificationNameValidMessage = function (param1) {
        this.guildName = param1.readUTF();
    };
    GuildModificationNameValidMessage.ID = 6327;
    return GuildModificationNameValidMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildModificationNameValidMessage;
