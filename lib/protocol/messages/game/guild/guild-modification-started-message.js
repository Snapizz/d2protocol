/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var GuildModificationStartedMessage = (function (_super) {
    __extends(GuildModificationStartedMessage, _super);
    function GuildModificationStartedMessage() {
        this.canChangeName = false;
        this.canChangeEmblem = false;
        _super.call(this);
    }
    GuildModificationStartedMessage.prototype.getMessageId = function () {
        return GuildModificationStartedMessage.ID;
    };
    GuildModificationStartedMessage.prototype.reset = function () {
        this.canChangeName = false;
        this.canChangeEmblem = false;
    };
    GuildModificationStartedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildModificationStartedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildModificationStartedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildModificationStartedMessage(param1);
    };
    GuildModificationStartedMessage.prototype.serializeAs_GuildModificationStartedMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canChangeName);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canChangeEmblem);
        param1.writeByte(_loc2_);
    };
    GuildModificationStartedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildModificationStartedMessage(param1);
    };
    GuildModificationStartedMessage.prototype.deserializeAs_GuildModificationStartedMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.canChangeName = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canChangeEmblem = BooleanByteWrapper.getFlag(_loc2_, 1);
    };
    GuildModificationStartedMessage.ID = 6324;
    return GuildModificationStartedMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildModificationStartedMessage;
