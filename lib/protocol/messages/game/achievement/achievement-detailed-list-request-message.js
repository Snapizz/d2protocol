/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementDetailedListRequestMessage = (function (_super) {
    __extends(AchievementDetailedListRequestMessage, _super);
    function AchievementDetailedListRequestMessage() {
        this.categoryId = 0;
        _super.call(this);
    }
    AchievementDetailedListRequestMessage.prototype.getMessageId = function () {
        return AchievementDetailedListRequestMessage.ID;
    };
    AchievementDetailedListRequestMessage.prototype.reset = function () {
        this.categoryId = 0;
    };
    AchievementDetailedListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementDetailedListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementDetailedListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementDetailedListRequestMessage(param1);
    };
    AchievementDetailedListRequestMessage.prototype.serializeAs_AchievementDetailedListRequestMessage = function (param1) {
        if (this.categoryId < 0) {
            throw new Error('Forbidden value (' + this.categoryId + ') on element categoryId.');
        }
        param1.writeVarShort(this.categoryId);
    };
    AchievementDetailedListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementDetailedListRequestMessage(param1);
    };
    AchievementDetailedListRequestMessage.prototype.deserializeAs_AchievementDetailedListRequestMessage = function (param1) {
        this.categoryId = param1.readVarUhShort();
        if (this.categoryId < 0) {
            throw new Error('Forbidden value (' + this.categoryId + ') on element of AchievementDetailedListRequestMessage.categoryId.');
        }
    };
    AchievementDetailedListRequestMessage.ID = 6357;
    return AchievementDetailedListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementDetailedListRequestMessage;
