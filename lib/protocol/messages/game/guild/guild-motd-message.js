/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildMotdMessage = (function (_super) {
    __extends(GuildMotdMessage, _super);
    function GuildMotdMessage() {
        this.content = '';
        this.timestamp = 0;
        _super.call(this);
    }
    GuildMotdMessage.prototype.getMessageId = function () {
        return GuildMotdMessage.ID;
    };
    GuildMotdMessage.prototype.reset = function () {
        this.content = '';
        this.timestamp = 0;
    };
    GuildMotdMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildMotdMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildMotdMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildMotdMessage(param1);
    };
    GuildMotdMessage.prototype.serializeAs_GuildMotdMessage = function (param1) {
        param1.writeUTF(this.content);
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeInt(this.timestamp);
    };
    GuildMotdMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildMotdMessage(param1);
    };
    GuildMotdMessage.prototype.deserializeAs_GuildMotdMessage = function (param1) {
        this.content = param1.readUTF();
        this.timestamp = param1.readInt();
        if (this.timestamp < 0) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of GuildMotdMessage.timestamp.');
        }
    };
    GuildMotdMessage.ID = 6590;
    return GuildMotdMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildMotdMessage;
