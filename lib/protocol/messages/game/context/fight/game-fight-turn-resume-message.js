/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnStartMessage = require('./game-fight-turn-start-message');
var GameFightTurnResumeMessage = (function (_super) {
    __extends(GameFightTurnResumeMessage, _super);
    function GameFightTurnResumeMessage() {
        this.remainingTime = 0;
        _super.call(this);
    }
    GameFightTurnResumeMessage.prototype.getMessageId = function () {
        return GameFightTurnResumeMessage.ID;
    };
    GameFightTurnResumeMessage.prototype.reset = function () {
        this.remainingTime = 0;
    };
    GameFightTurnResumeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnResumeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnResumeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnResumeMessage(param1);
    };
    GameFightTurnResumeMessage.prototype.serializeAs_GameFightTurnResumeMessage = function (param1) {
        _super.prototype.serializeAs_GameFightTurnStartMessage.call(this, param1);
        if (this.remainingTime < 0) {
            throw new Error('Forbidden value (' + this.remainingTime + ') on element remainingTime.');
        }
        param1.writeVarInt(this.remainingTime);
    };
    GameFightTurnResumeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnResumeMessage(param1);
    };
    GameFightTurnResumeMessage.prototype.deserializeAs_GameFightTurnResumeMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.remainingTime = param1.readVarUhInt();
        if (this.remainingTime < 0) {
            throw new Error('Forbidden value (' + this.remainingTime + ') on element of GameFightTurnResumeMessage.remainingTime.');
        }
    };
    GameFightTurnResumeMessage.ID = 6307;
    return GameFightTurnResumeMessage;
})(GameFightTurnStartMessage);
module.exports = GameFightTurnResumeMessage;
