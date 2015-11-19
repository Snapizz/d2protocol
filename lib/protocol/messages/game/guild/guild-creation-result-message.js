/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildCreationResultMessage = (function (_super) {
    __extends(GuildCreationResultMessage, _super);
    function GuildCreationResultMessage() {
        this.result = 0;
        _super.call(this);
    }
    GuildCreationResultMessage.prototype.getMessageId = function () {
        return GuildCreationResultMessage.ID;
    };
    GuildCreationResultMessage.prototype.reset = function () {
        this.result = 0;
    };
    GuildCreationResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildCreationResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildCreationResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildCreationResultMessage(param1);
    };
    GuildCreationResultMessage.prototype.serializeAs_GuildCreationResultMessage = function (param1) {
        param1.writeByte(this.result);
    };
    GuildCreationResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildCreationResultMessage(param1);
    };
    GuildCreationResultMessage.prototype.deserializeAs_GuildCreationResultMessage = function (param1) {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of GuildCreationResultMessage.result.');
        }
    };
    GuildCreationResultMessage.ID = 5554;
    return GuildCreationResultMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildCreationResultMessage;
