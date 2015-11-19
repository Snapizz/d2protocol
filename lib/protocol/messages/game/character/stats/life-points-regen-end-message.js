/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var UpdateLifePointsMessage = require('./update-life-points-message');
var LifePointsRegenEndMessage = (function (_super) {
    __extends(LifePointsRegenEndMessage, _super);
    function LifePointsRegenEndMessage() {
        this.lifePointsGained = 0;
        _super.call(this);
    }
    LifePointsRegenEndMessage.prototype.getMessageId = function () {
        return LifePointsRegenEndMessage.ID;
    };
    LifePointsRegenEndMessage.prototype.reset = function () {
        this.lifePointsGained = 0;
    };
    LifePointsRegenEndMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LifePointsRegenEndMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LifePointsRegenEndMessage.prototype.serialize = function (param1) {
        this.serializeAs_LifePointsRegenEndMessage(param1);
    };
    LifePointsRegenEndMessage.prototype.serializeAs_LifePointsRegenEndMessage = function (param1) {
        _super.prototype.serializeAs_UpdateLifePointsMessage.call(this, param1);
        if (this.lifePointsGained < 0) {
            throw new Error('Forbidden value (' + this.lifePointsGained + ') on element lifePointsGained.');
        }
        param1.writeVarInt(this.lifePointsGained);
    };
    LifePointsRegenEndMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LifePointsRegenEndMessage(param1);
    };
    LifePointsRegenEndMessage.prototype.deserializeAs_LifePointsRegenEndMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.lifePointsGained = param1.readVarUhInt();
        if (this.lifePointsGained < 0) {
            throw new Error('Forbidden value (' + this.lifePointsGained + ') on element of LifePointsRegenEndMessage.lifePointsGained.');
        }
    };
    LifePointsRegenEndMessage.ID = 5686;
    return LifePointsRegenEndMessage;
})(UpdateLifePointsMessage);
module.exports = LifePointsRegenEndMessage;
