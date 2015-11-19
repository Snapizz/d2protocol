/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StatsUpgradeResultMessage = (function (_super) {
    __extends(StatsUpgradeResultMessage, _super);
    function StatsUpgradeResultMessage() {
        this.result = 0;
        this.nbCharacBoost = 0;
        _super.call(this);
    }
    StatsUpgradeResultMessage.prototype.getMessageId = function () {
        return StatsUpgradeResultMessage.ID;
    };
    StatsUpgradeResultMessage.prototype.reset = function () {
        this.result = 0;
        this.nbCharacBoost = 0;
    };
    StatsUpgradeResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StatsUpgradeResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StatsUpgradeResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_StatsUpgradeResultMessage(param1);
    };
    StatsUpgradeResultMessage.prototype.serializeAs_StatsUpgradeResultMessage = function (param1) {
        param1.writeByte(this.result);
        if (this.nbCharacBoost < 0) {
            throw new Error('Forbidden value (' + this.nbCharacBoost + ') on element nbCharacBoost.');
        }
        param1.writeVarShort(this.nbCharacBoost);
    };
    StatsUpgradeResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StatsUpgradeResultMessage(param1);
    };
    StatsUpgradeResultMessage.prototype.deserializeAs_StatsUpgradeResultMessage = function (param1) {
        this.result = param1.readByte();
        this.nbCharacBoost = param1.readVarUhShort();
        if (this.nbCharacBoost < 0) {
            throw new Error('Forbidden value (' + this.nbCharacBoost + ') on element of StatsUpgradeResultMessage.nbCharacBoost.');
        }
    };
    StatsUpgradeResultMessage.ID = 5609;
    return StatsUpgradeResultMessage;
})(network_message_1.NetworkMessage);
module.exports = StatsUpgradeResultMessage;
