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
var GameActionFightCarryCharacterMessage = (function (_super) {
    __extends(GameActionFightCarryCharacterMessage, _super);
    function GameActionFightCarryCharacterMessage() {
        this.targetId = 0;
        this.cellId = 0;
        _super.call(this);
    }
    GameActionFightCarryCharacterMessage.prototype.getMessageId = function () {
        return GameActionFightCarryCharacterMessage.ID;
    };
    GameActionFightCarryCharacterMessage.prototype.reset = function () {
        this.targetId = 0;
        this.cellId = 0;
    };
    GameActionFightCarryCharacterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightCarryCharacterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightCarryCharacterMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightCarryCharacterMessage(param1);
    };
    GameActionFightCarryCharacterMessage.prototype.serializeAs_GameActionFightCarryCharacterMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeShort(this.cellId);
    };
    GameActionFightCarryCharacterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightCarryCharacterMessage(param1);
    };
    GameActionFightCarryCharacterMessage.prototype.deserializeAs_GameActionFightCarryCharacterMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.cellId = param1.readShort();
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionFightCarryCharacterMessage.cellId.');
        }
    };
    GameActionFightCarryCharacterMessage.ID = 5830;
    return GameActionFightCarryCharacterMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightCarryCharacterMessage;
