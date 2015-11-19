/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightLifePointsLostMessage = require('./game-action-fight-life-points-lost-message');
var GameActionFightLifeAndShieldPointsLostMessage = (function (_super) {
    __extends(GameActionFightLifeAndShieldPointsLostMessage, _super);
    function GameActionFightLifeAndShieldPointsLostMessage() {
        this.shieldLoss = 0;
        _super.call(this);
    }
    GameActionFightLifeAndShieldPointsLostMessage.prototype.getMessageId = function () {
        return GameActionFightLifeAndShieldPointsLostMessage.ID;
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.reset = function () {
        this.shieldLoss = 0;
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1);
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.serializeAs_GameActionFightLifeAndShieldPointsLostMessage = function (param1) {
        _super.prototype.serializeAs_GameActionFightLifePointsLostMessage.call(this, param1);
        if (this.shieldLoss < 0) {
            throw new Error('Forbidden value (' + this.shieldLoss + ') on element shieldLoss.');
        }
        param1.writeVarShort(this.shieldLoss);
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1);
    };
    GameActionFightLifeAndShieldPointsLostMessage.prototype.deserializeAs_GameActionFightLifeAndShieldPointsLostMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.shieldLoss = param1.readVarUhShort();
        if (this.shieldLoss < 0) {
            throw new Error('Forbidden value (' + this.shieldLoss + ') on element of GameActionFightLifeAndShieldPointsLostMessage.shieldLoss.');
        }
    };
    GameActionFightLifeAndShieldPointsLostMessage.ID = 6310;
    return GameActionFightLifeAndShieldPointsLostMessage;
})(GameActionFightLifePointsLostMessage);
module.exports = GameActionFightLifeAndShieldPointsLostMessage;
