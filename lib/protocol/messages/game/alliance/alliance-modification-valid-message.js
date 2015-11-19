/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildEmblem = require('../../../types/game/guild/guild-emblem');
var AllianceModificationValidMessage = (function (_super) {
    __extends(AllianceModificationValidMessage, _super);
    function AllianceModificationValidMessage() {
        this.allianceName = '';
        this.allianceTag = '';
        this.Alliancemblem = new GuildEmblem();
        _super.call(this);
    }
    AllianceModificationValidMessage.prototype.getMessageId = function () {
        return AllianceModificationValidMessage.ID;
    };
    AllianceModificationValidMessage.prototype.reset = function () {
        this.allianceName = '';
        this.allianceTag = '';
        this.Alliancemblem = new GuildEmblem();
    };
    AllianceModificationValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceModificationValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceModificationValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceModificationValidMessage(param1);
    };
    AllianceModificationValidMessage.prototype.serializeAs_AllianceModificationValidMessage = function (param1) {
        param1.writeUTF(this.allianceName);
        param1.writeUTF(this.allianceTag);
        this.Alliancemblem.serializeAs_GuildEmblem(param1);
    };
    AllianceModificationValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceModificationValidMessage(param1);
    };
    AllianceModificationValidMessage.prototype.deserializeAs_AllianceModificationValidMessage = function (param1) {
        this.allianceName = param1.readUTF();
        this.allianceTag = param1.readUTF();
        this.Alliancemblem = new GuildEmblem();
        this.Alliancemblem.deserialize(param1);
    };
    AllianceModificationValidMessage.ID = 6450;
    return AllianceModificationValidMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceModificationValidMessage;
