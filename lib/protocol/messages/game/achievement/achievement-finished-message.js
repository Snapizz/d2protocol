/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AchievementFinishedMessage = (function (_super) {
    __extends(AchievementFinishedMessage, _super);
    function AchievementFinishedMessage() {
        this.id = 0;
        this.finishedlevel = 0;
        _super.call(this);
    }
    AchievementFinishedMessage.prototype.getMessageId = function () {
        return AchievementFinishedMessage.ID;
    };
    AchievementFinishedMessage.prototype.reset = function () {
        this.id = 0;
        this.finishedlevel = 0;
    };
    AchievementFinishedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AchievementFinishedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AchievementFinishedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AchievementFinishedMessage(param1);
    };
    AchievementFinishedMessage.prototype.serializeAs_AchievementFinishedMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element finishedlevel.');
        }
        param1.writeByte(this.finishedlevel);
    };
    AchievementFinishedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AchievementFinishedMessage(param1);
    };
    AchievementFinishedMessage.prototype.deserializeAs_AchievementFinishedMessage = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of AchievementFinishedMessage.id.');
        }
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error('Forbidden value (' + this.finishedlevel + ') on element of AchievementFinishedMessage.finishedlevel.');
        }
    };
    AchievementFinishedMessage.ID = 6208;
    return AchievementFinishedMessage;
})(network_message_1.NetworkMessage);
module.exports = AchievementFinishedMessage;
