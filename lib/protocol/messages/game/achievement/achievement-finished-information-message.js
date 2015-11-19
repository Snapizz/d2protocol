/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementFinishedMessage = require('./achievement-finished-message');
var AchievementFinishedInformationMessage = (function (_super) {
    __extends(AchievementFinishedInformationMessage, _super);
    function AchievementFinishedInformationMessage() {
        this.name = '';
        this.playerId = 0;
        _super.call(this);
    }
    AchievementFinishedInformationMessage.prototype.getMessageId = function () {
        return AchievementFinishedInformationMessage.ID;
    };
    AchievementFinishedInformationMessage.prototype.reset = function () {
        this.name = '';
        this.playerId = 0;
    };
    AchievementFinishedInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementFinishedInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementFinishedInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementFinishedInformationMessage(param1);
    };
    AchievementFinishedInformationMessage.prototype.serializeAs_AchievementFinishedInformationMessage = function (param1) {
        _super.prototype.serializeAs_AchievementFinishedMessage.call(this, param1);
        param1.writeUTF(this.name);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    AchievementFinishedInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementFinishedInformationMessage(param1);
    };
    AchievementFinishedInformationMessage.prototype.deserializeAs_AchievementFinishedInformationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of AchievementFinishedInformationMessage.playerId.');
        }
    };
    AchievementFinishedInformationMessage.ID = 6381;
    return AchievementFinishedInformationMessage;
})(AchievementFinishedMessage);
module.exports = AchievementFinishedInformationMessage;
