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
var GameActionFightDodgePointLossMessage = (function (_super) {
    __extends(GameActionFightDodgePointLossMessage, _super);
    function GameActionFightDodgePointLossMessage() {
        this.targetId = 0;
        this.amount = 0;
        _super.call(this);
    }
    GameActionFightDodgePointLossMessage.prototype.getMessageId = function () {
        return GameActionFightDodgePointLossMessage.ID;
    };
    GameActionFightDodgePointLossMessage.prototype.reset = function () {
        this.targetId = 0;
        this.amount = 0;
    };
    GameActionFightDodgePointLossMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightDodgePointLossMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightDodgePointLossMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightDodgePointLossMessage(param1);
    };
    GameActionFightDodgePointLossMessage.prototype.serializeAs_GameActionFightDodgePointLossMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element amount.');
        }
        param1.writeVarShort(this.amount);
    };
    GameActionFightDodgePointLossMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightDodgePointLossMessage(param1);
    };
    GameActionFightDodgePointLossMessage.prototype.deserializeAs_GameActionFightDodgePointLossMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.amount = param1.readVarUhShort();
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element of GameActionFightDodgePointLossMessage.amount.');
        }
    };
    GameActionFightDodgePointLossMessage.ID = 5828;
    return GameActionFightDodgePointLossMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightDodgePointLossMessage;
