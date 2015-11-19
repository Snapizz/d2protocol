/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayDelayedActionMessage = (function (_super) {
    __extends(GameRolePlayDelayedActionMessage, _super);
    function GameRolePlayDelayedActionMessage() {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
        this.delayEndTime = 0;
        _super.call(this);
    }
    GameRolePlayDelayedActionMessage.prototype.getMessageId = function () {
        return GameRolePlayDelayedActionMessage.ID;
    };
    GameRolePlayDelayedActionMessage.prototype.reset = function () {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
        this.delayEndTime = 0;
    };
    GameRolePlayDelayedActionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayDelayedActionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayDelayedActionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayDelayedActionMessage(param1);
    };
    GameRolePlayDelayedActionMessage.prototype.serializeAs_GameRolePlayDelayedActionMessage = function (param1) {
        param1.writeInt(this.delayedCharacterId);
        param1.writeByte(this.delayTypeId);
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element delayEndTime.');
        }
        param1.writeDouble(this.delayEndTime);
    };
    GameRolePlayDelayedActionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayDelayedActionMessage(param1);
    };
    GameRolePlayDelayedActionMessage.prototype.deserializeAs_GameRolePlayDelayedActionMessage = function (param1) {
        this.delayedCharacterId = param1.readInt();
        this.delayTypeId = param1.readByte();
        if (this.delayTypeId < 0) {
            throw new Error('Forbidden value (' + this.delayTypeId + ') on element of GameRolePlayDelayedActionMessage.delayTypeId.');
        }
        this.delayEndTime = param1.readDouble();
        if (this.delayEndTime < 0 || this.delayEndTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.delayEndTime + ') on element of GameRolePlayDelayedActionMessage.delayEndTime.');
        }
    };
    GameRolePlayDelayedActionMessage.ID = 6153;
    return GameRolePlayDelayedActionMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayDelayedActionMessage;
