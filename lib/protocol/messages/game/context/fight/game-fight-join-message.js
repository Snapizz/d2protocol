/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
var GameFightJoinMessage = (function (_super) {
    __extends(GameFightJoinMessage, _super);
    function GameFightJoinMessage() {
        this.canBeCancelled = false;
        this.canSayReady = false;
        this.isFightStarted = false;
        this.timeMaxBeforeFightStart = 0;
        this.fightType = 0;
        _super.call(this);
    }
    GameFightJoinMessage.prototype.getMessageId = function () {
        return GameFightJoinMessage.ID;
    };
    GameFightJoinMessage.prototype.reset = function () {
        this.canBeCancelled = false;
        this.canSayReady = false;
        this.isFightStarted = false;
        this.timeMaxBeforeFightStart = 0;
        this.fightType = 0;
    };
    GameFightJoinMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightJoinMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightJoinMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightJoinMessage(param1);
    };
    GameFightJoinMessage.prototype.serializeAs_GameFightJoinMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.canBeCancelled);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.canSayReady);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.isFightStarted);
        param1.writeByte(_loc2_);
        if (this.timeMaxBeforeFightStart < 0) {
            throw new Error('Forbidden value (' + this.timeMaxBeforeFightStart + ') on element timeMaxBeforeFightStart.');
        }
        param1.writeShort(this.timeMaxBeforeFightStart);
        param1.writeByte(this.fightType);
    };
    GameFightJoinMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightJoinMessage(param1);
    };
    GameFightJoinMessage.prototype.deserializeAs_GameFightJoinMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.canBeCancelled = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.canSayReady = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.isFightStarted = BooleanByteWrapper.getFlag(_loc2_, 2);
        this.timeMaxBeforeFightStart = param1.readShort();
        if (this.timeMaxBeforeFightStart < 0) {
            throw new Error('Forbidden value (' + this.timeMaxBeforeFightStart + ') on element of GameFightJoinMessage.timeMaxBeforeFightStart.');
        }
        this.fightType = param1.readByte();
        if (this.fightType < 0) {
            throw new Error('Forbidden value (' + this.fightType + ') on element of GameFightJoinMessage.fightType.');
        }
    };
    GameFightJoinMessage.ID = 702;
    return GameFightJoinMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightJoinMessage;
