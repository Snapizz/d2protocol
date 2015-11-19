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
var AllianceCreationValidMessage = (function (_super) {
    __extends(AllianceCreationValidMessage, _super);
    function AllianceCreationValidMessage() {
        this.allianceName = '';
        this.allianceTag = '';
        this.allianceEmblem = new GuildEmblem();
        _super.call(this);
    }
    AllianceCreationValidMessage.prototype.getMessageId = function () {
        return AllianceCreationValidMessage.ID;
    };
    AllianceCreationValidMessage.prototype.reset = function () {
        this.allianceName = '';
        this.allianceTag = '';
        this.allianceEmblem = new GuildEmblem();
    };
    AllianceCreationValidMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceCreationValidMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceCreationValidMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceCreationValidMessage(param1);
    };
    AllianceCreationValidMessage.prototype.serializeAs_AllianceCreationValidMessage = function (param1) {
        param1.writeUTF(this.allianceName);
        param1.writeUTF(this.allianceTag);
        this.allianceEmblem.serializeAs_GuildEmblem(param1);
    };
    AllianceCreationValidMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceCreationValidMessage(param1);
    };
    AllianceCreationValidMessage.prototype.deserializeAs_AllianceCreationValidMessage = function (param1) {
        this.allianceName = param1.readUTF();
        this.allianceTag = param1.readUTF();
        this.allianceEmblem = new GuildEmblem();
        this.allianceEmblem.deserialize(param1);
    };
    AllianceCreationValidMessage.ID = 6393;
    return AllianceCreationValidMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceCreationValidMessage;
