/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInvitationByNameMessage = (function (_super) {
    __extends(GuildInvitationByNameMessage, _super);
    function GuildInvitationByNameMessage() {
        this.name = '';
        _super.call(this);
    }
    GuildInvitationByNameMessage.prototype.getMessageId = function () {
        return GuildInvitationByNameMessage.ID;
    };
    GuildInvitationByNameMessage.prototype.reset = function () {
        this.name = '';
    };
    GuildInvitationByNameMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInvitationByNameMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInvitationByNameMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInvitationByNameMessage(param1);
    };
    GuildInvitationByNameMessage.prototype.serializeAs_GuildInvitationByNameMessage = function (param1) {
        param1.writeUTF(this.name);
    };
    GuildInvitationByNameMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInvitationByNameMessage(param1);
    };
    GuildInvitationByNameMessage.prototype.deserializeAs_GuildInvitationByNameMessage = function (param1) {
        this.name = param1.readUTF();
    };
    GuildInvitationByNameMessage.ID = 6115;
    return GuildInvitationByNameMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInvitationByNameMessage;
