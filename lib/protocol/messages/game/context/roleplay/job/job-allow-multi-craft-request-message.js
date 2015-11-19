/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobAllowMultiCraftRequestMessage = (function (_super) {
    __extends(JobAllowMultiCraftRequestMessage, _super);
    function JobAllowMultiCraftRequestMessage() {
        this.enabled = false;
        _super.call(this);
    }
    JobAllowMultiCraftRequestMessage.prototype.getMessageId = function () {
        return JobAllowMultiCraftRequestMessage.ID;
    };
    JobAllowMultiCraftRequestMessage.prototype.reset = function () {
        this.enabled = false;
    };
    JobAllowMultiCraftRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobAllowMultiCraftRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobAllowMultiCraftRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobAllowMultiCraftRequestMessage(param1);
    };
    JobAllowMultiCraftRequestMessage.prototype.serializeAs_JobAllowMultiCraftRequestMessage = function (param1) {
        param1.writeBoolean(this.enabled);
    };
    JobAllowMultiCraftRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobAllowMultiCraftRequestMessage(param1);
    };
    JobAllowMultiCraftRequestMessage.prototype.deserializeAs_JobAllowMultiCraftRequestMessage = function (param1) {
        this.enabled = param1.readBoolean();
    };
    JobAllowMultiCraftRequestMessage.ID = 5748;
    return JobAllowMultiCraftRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = JobAllowMultiCraftRequestMessage;
