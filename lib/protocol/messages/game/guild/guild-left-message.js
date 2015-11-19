/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildLeftMessage = (function (_super) {
    __extends(GuildLeftMessage, _super);
    function GuildLeftMessage() {
        _super.call(this);
    }
    GuildLeftMessage.prototype.getMessageId = function () {
        return GuildLeftMessage.ID;
    };
    GuildLeftMessage.prototype.reset = function () {
    };
    GuildLeftMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildLeftMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildLeftMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildLeftMessage(param1);
    };
    GuildLeftMessage.prototype.serializeAs_GuildLeftMessage = function (param1) {
    };
    GuildLeftMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildLeftMessage(param1);
    };
    GuildLeftMessage.prototype.deserializeAs_GuildLeftMessage = function (param1) {
    };
    GuildLeftMessage.ID = 5562;
    return GuildLeftMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildLeftMessage;
