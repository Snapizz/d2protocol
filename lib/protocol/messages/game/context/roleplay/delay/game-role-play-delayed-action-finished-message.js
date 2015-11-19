/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayDelayedActionFinishedMessage = (function (_super) {
    __extends(GameRolePlayDelayedActionFinishedMessage, _super);
    function GameRolePlayDelayedActionFinishedMessage() {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
        _super.call(this);
    }
    GameRolePlayDelayedActionFinishedMessage.prototype.getMessageId = function () {
        return GameRolePlayDelayedActionFinishedMessage.ID;
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.reset = function () {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayDelayedActionFinishedMessage(param1);
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.serializeAs_GameRolePlayDelayedActionFinishedMessage = function (param1) {
        param1.writeInt(this.delayedCharacterId);
        param1.writeByte(this.delayTypeId);
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayDelayedActionFinishedMessage(param1);
    };
    GameRolePlayDelayedActionFinishedMessage.prototype.deserializeAs_GameRolePlayDelayedActionFinishedMessage = function (param1) {
        this.delayedCharacterId = param1.readInt();
        this.delayTypeId = param1.readByte();
        if (this.delayTypeId < 0) {
            throw new Error('Forbidden value (' + this.delayTypeId + ') on element of GameRolePlayDelayedActionFinishedMessage.delayTypeId.');
        }
    };
    GameRolePlayDelayedActionFinishedMessage.ID = 6150;
    return GameRolePlayDelayedActionFinishedMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayDelayedActionFinishedMessage;
