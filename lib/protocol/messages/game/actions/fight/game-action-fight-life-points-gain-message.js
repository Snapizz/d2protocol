/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var GameActionFightLifePointsGainMessage = (function (_super) {
    __extends(GameActionFightLifePointsGainMessage, _super);
    function GameActionFightLifePointsGainMessage() {
        this.targetId = 0;
        this.delta = 0;
        _super.call(this);
    }
    GameActionFightLifePointsGainMessage.prototype.getMessageId = function () {
        return GameActionFightLifePointsGainMessage.ID;
    };
    GameActionFightLifePointsGainMessage.prototype.reset = function () {
        this.targetId = 0;
        this.delta = 0;
    };
    GameActionFightLifePointsGainMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightLifePointsGainMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightLifePointsGainMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightLifePointsGainMessage(param1);
    };
    GameActionFightLifePointsGainMessage.prototype.serializeAs_GameActionFightLifePointsGainMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.delta < 0) {
            throw new Error('Forbidden value (' + this.delta + ') on element delta.');
        }
        param1.writeVarInt(this.delta);
    };
    GameActionFightLifePointsGainMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightLifePointsGainMessage(param1);
    };
    GameActionFightLifePointsGainMessage.prototype.deserializeAs_GameActionFightLifePointsGainMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.delta = param1.readVarUhInt();
        if (this.delta < 0) {
            throw new Error('Forbidden value (' + this.delta + ') on element of GameActionFightLifePointsGainMessage.delta.');
        }
    };
    GameActionFightLifePointsGainMessage.ID = 6311;
    return GameActionFightLifePointsGainMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightLifePointsGainMessage;
