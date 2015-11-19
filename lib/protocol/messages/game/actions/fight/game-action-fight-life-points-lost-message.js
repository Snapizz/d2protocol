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
var GameActionFightLifePointsLostMessage = (function (_super) {
    __extends(GameActionFightLifePointsLostMessage, _super);
    function GameActionFightLifePointsLostMessage() {
        this.targetId = 0;
        this.loss = 0;
        this.permanentDamages = 0;
        _super.call(this);
    }
    GameActionFightLifePointsLostMessage.prototype.getMessageId = function () {
        return GameActionFightLifePointsLostMessage.ID;
    };
    GameActionFightLifePointsLostMessage.prototype.reset = function () {
        this.targetId = 0;
        this.loss = 0;
        this.permanentDamages = 0;
    };
    GameActionFightLifePointsLostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightLifePointsLostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightLifePointsLostMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightLifePointsLostMessage(param1);
    };
    GameActionFightLifePointsLostMessage.prototype.serializeAs_GameActionFightLifePointsLostMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        if (this.loss < 0) {
            throw new Error('Forbidden value (' + this.loss + ') on element loss.');
        }
        param1.writeVarShort(this.loss);
        if (this.permanentDamages < 0) {
            throw new Error('Forbidden value (' + this.permanentDamages + ') on element permanentDamages.');
        }
        param1.writeVarShort(this.permanentDamages);
    };
    GameActionFightLifePointsLostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightLifePointsLostMessage(param1);
    };
    GameActionFightLifePointsLostMessage.prototype.deserializeAs_GameActionFightLifePointsLostMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.loss = param1.readVarUhShort();
        if (this.loss < 0) {
            throw new Error('Forbidden value (' + this.loss + ') on element of GameActionFightLifePointsLostMessage.loss.');
        }
        this.permanentDamages = param1.readVarUhShort();
        if (this.permanentDamages < 0) {
            throw new Error('Forbidden value (' + this.permanentDamages + ') on element of GameActionFightLifePointsLostMessage.permanentDamages.');
        }
    };
    GameActionFightLifePointsLostMessage.ID = 6312;
    return GameActionFightLifePointsLostMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightLifePointsLostMessage;
