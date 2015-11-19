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
var GameActionFightStealKamaMessage = (function (_super) {
    __extends(GameActionFightStealKamaMessage, _super);
    function GameActionFightStealKamaMessage() {
        this.targetId = 0;
        this.amount = 0;
        _super.call(this);
    }
    GameActionFightStealKamaMessage.prototype.getMessageId = function () {
        return GameActionFightStealKamaMessage.ID;
    };
    GameActionFightStealKamaMessage.prototype.reset = function () {
        this.targetId = 0;
        this.amount = 0;
    };
    GameActionFightStealKamaMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightStealKamaMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightStealKamaMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightStealKamaMessage(param1);
    };
    GameActionFightStealKamaMessage.prototype.serializeAs_GameActionFightStealKamaMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element amount.');
        }
        param1.writeVarInt(this.amount);
    };
    GameActionFightStealKamaMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightStealKamaMessage(param1);
    };
    GameActionFightStealKamaMessage.prototype.deserializeAs_GameActionFightStealKamaMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.amount = param1.readVarUhInt();
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element of GameActionFightStealKamaMessage.amount.');
        }
    };
    GameActionFightStealKamaMessage.ID = 5535;
    return GameActionFightStealKamaMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightStealKamaMessage;
