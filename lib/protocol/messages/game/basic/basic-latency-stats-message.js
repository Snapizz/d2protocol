/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicLatencyStatsMessage = (function (_super) {
    __extends(BasicLatencyStatsMessage, _super);
    function BasicLatencyStatsMessage() {
        this.latency = 0;
        this.sampleCount = 0;
        this.max = 0;
        _super.call(this);
    }
    BasicLatencyStatsMessage.prototype.getMessageId = function () {
        return BasicLatencyStatsMessage.ID;
    };
    BasicLatencyStatsMessage.prototype.reset = function () {
        this.latency = 0;
        this.sampleCount = 0;
        this.max = 0;
    };
    BasicLatencyStatsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicLatencyStatsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicLatencyStatsMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicLatencyStatsMessage(param1);
    };
    BasicLatencyStatsMessage.prototype.serializeAs_BasicLatencyStatsMessage = function (param1) {
        if (this.latency < 0 || this.latency > 65535) {
            throw new Error('Forbidden value (' + this.latency + ') on element latency.');
        }
        param1.writeShort(this.latency);
        if (this.sampleCount < 0) {
            throw new Error('Forbidden value (' + this.sampleCount + ') on element sampleCount.');
        }
        param1.writeVarShort(this.sampleCount);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarShort(this.max);
    };
    BasicLatencyStatsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicLatencyStatsMessage(param1);
    };
    BasicLatencyStatsMessage.prototype.deserializeAs_BasicLatencyStatsMessage = function (param1) {
        this.latency = param1.readUnsignedShort();
        if (this.latency < 0 || this.latency > 65535) {
            throw new Error('Forbidden value (' + this.latency + ') on element of BasicLatencyStatsMessage.latency.');
        }
        this.sampleCount = param1.readVarUhShort();
        if (this.sampleCount < 0) {
            throw new Error('Forbidden value (' + this.sampleCount + ') on element of BasicLatencyStatsMessage.sampleCount.');
        }
        this.max = param1.readVarUhShort();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of BasicLatencyStatsMessage.max.');
        }
    };
    BasicLatencyStatsMessage.ID = 5663;
    return BasicLatencyStatsMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicLatencyStatsMessage;
