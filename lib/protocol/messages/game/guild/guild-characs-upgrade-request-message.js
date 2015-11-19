/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildCharacsUpgradeRequestMessage = (function (_super) {
    __extends(GuildCharacsUpgradeRequestMessage, _super);
    function GuildCharacsUpgradeRequestMessage() {
        this.charaTypeTarget = 0;
        _super.call(this);
    }
    GuildCharacsUpgradeRequestMessage.prototype.getMessageId = function () {
        return GuildCharacsUpgradeRequestMessage.ID;
    };
    GuildCharacsUpgradeRequestMessage.prototype.reset = function () {
        this.charaTypeTarget = 0;
    };
    GuildCharacsUpgradeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildCharacsUpgradeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildCharacsUpgradeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildCharacsUpgradeRequestMessage(param1);
    };
    GuildCharacsUpgradeRequestMessage.prototype.serializeAs_GuildCharacsUpgradeRequestMessage = function (param1) {
        param1.writeByte(this.charaTypeTarget);
    };
    GuildCharacsUpgradeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildCharacsUpgradeRequestMessage(param1);
    };
    GuildCharacsUpgradeRequestMessage.prototype.deserializeAs_GuildCharacsUpgradeRequestMessage = function (param1) {
        this.charaTypeTarget = param1.readByte();
        if (this.charaTypeTarget < 0) {
            throw new Error('Forbidden value (' + this.charaTypeTarget + ') on element of GuildCharacsUpgradeRequestMessage.charaTypeTarget.');
        }
    };
    GuildCharacsUpgradeRequestMessage.ID = 5706;
    return GuildCharacsUpgradeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildCharacsUpgradeRequestMessage;
