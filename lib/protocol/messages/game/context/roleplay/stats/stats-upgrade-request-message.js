/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StatsUpgradeRequestMessage = (function (_super) {
    __extends(StatsUpgradeRequestMessage, _super);
    function StatsUpgradeRequestMessage() {
        this.useAdditionnal = false;
        this.statId = 11;
        this.boostPoint = 0;
        _super.call(this);
    }
    StatsUpgradeRequestMessage.prototype.getMessageId = function () {
        return StatsUpgradeRequestMessage.ID;
    };
    StatsUpgradeRequestMessage.prototype.reset = function () {
        this.useAdditionnal = false;
        this.statId = 11;
        this.boostPoint = 0;
    };
    StatsUpgradeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StatsUpgradeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StatsUpgradeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_StatsUpgradeRequestMessage(param1);
    };
    StatsUpgradeRequestMessage.prototype.serializeAs_StatsUpgradeRequestMessage = function (param1) {
        param1.writeBoolean(this.useAdditionnal);
        param1.writeByte(this.statId);
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element boostPoint.');
        }
        param1.writeVarShort(this.boostPoint);
    };
    StatsUpgradeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StatsUpgradeRequestMessage(param1);
    };
    StatsUpgradeRequestMessage.prototype.deserializeAs_StatsUpgradeRequestMessage = function (param1) {
        this.useAdditionnal = param1.readBoolean();
        this.statId = param1.readByte();
        if (this.statId < 0) {
            throw new Error('Forbidden value (' + this.statId + ') on element of StatsUpgradeRequestMessage.statId.');
        }
        this.boostPoint = param1.readVarUhShort();
        if (this.boostPoint < 0) {
            throw new Error('Forbidden value (' + this.boostPoint + ') on element of StatsUpgradeRequestMessage.boostPoint.');
        }
    };
    StatsUpgradeRequestMessage.ID = 5610;
    return StatsUpgradeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = StatsUpgradeRequestMessage;
