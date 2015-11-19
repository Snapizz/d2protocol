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
var AllianceModificationEmblemValidMessage = (function (_super) {
    __extends(AllianceModificationEmblemValidMessage, _super);
    function AllianceModificationEmblemValidMessage() {
        this.Alliancemblem = new GuildEmblem();
        _super.call(this);
    }
    AllianceModificationEmblemValidMessage.prototype.getMessageId = function () {
        return AllianceModificationEmblemValidMessage.ID;
    };
    AllianceModificationEmblemValidMessage.prototype.reset = function () {
        this.Alliancemblem = new GuildEmblem();
    };
    AllianceModificationEmblemValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceModificationEmblemValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceModificationEmblemValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceModificationEmblemValidMessage(param1);
    };
    AllianceModificationEmblemValidMessage.prototype.serializeAs_AllianceModificationEmblemValidMessage = function (param1) {
        this.Alliancemblem.serializeAs_GuildEmblem(param1);
    };
    AllianceModificationEmblemValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceModificationEmblemValidMessage(param1);
    };
    AllianceModificationEmblemValidMessage.prototype.deserializeAs_AllianceModificationEmblemValidMessage = function (param1) {
        this.Alliancemblem = new GuildEmblem();
        this.Alliancemblem.deserialize(param1);
    };
    AllianceModificationEmblemValidMessage.ID = 6447;
    return AllianceModificationEmblemValidMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceModificationEmblemValidMessage;
