/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicLatencyStatsRequestMessage = (function (_super) {
    __extends(BasicLatencyStatsRequestMessage, _super);
    function BasicLatencyStatsRequestMessage() {
        _super.call(this);
    }
    BasicLatencyStatsRequestMessage.prototype.getMessageId = function () {
        return BasicLatencyStatsRequestMessage.ID;
    };
    BasicLatencyStatsRequestMessage.prototype.reset = function () {
    };
    BasicLatencyStatsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicLatencyStatsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicLatencyStatsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicLatencyStatsRequestMessage(param1);
    };
    BasicLatencyStatsRequestMessage.prototype.serializeAs_BasicLatencyStatsRequestMessage = function (param1) {
    };
    BasicLatencyStatsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicLatencyStatsRequestMessage(param1);
    };
    BasicLatencyStatsRequestMessage.prototype.deserializeAs_BasicLatencyStatsRequestMessage = function (param1) {
    };
    BasicLatencyStatsRequestMessage.ID = 5816;
    return BasicLatencyStatsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicLatencyStatsRequestMessage;
