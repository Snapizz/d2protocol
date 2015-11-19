/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobBookSubscriptionMessage = (function (_super) {
    __extends(JobBookSubscriptionMessage, _super);
    function JobBookSubscriptionMessage() {
        this.addedOrDeleted = false;
        this.jobId = 0;
        _super.call(this);
    }
    JobBookSubscriptionMessage.prototype.getMessageId = function () {
        return JobBookSubscriptionMessage.ID;
    };
    JobBookSubscriptionMessage.prototype.reset = function () {
        this.addedOrDeleted = false;
        this.jobId = 0;
    };
    JobBookSubscriptionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobBookSubscriptionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobBookSubscriptionMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobBookSubscriptionMessage(param1);
    };
    JobBookSubscriptionMessage.prototype.serializeAs_JobBookSubscriptionMessage = function (param1) {
        param1.writeBoolean(this.addedOrDeleted);
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
    };
    JobBookSubscriptionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobBookSubscriptionMessage(param1);
    };
    JobBookSubscriptionMessage.prototype.deserializeAs_JobBookSubscriptionMessage = function (param1) {
        this.addedOrDeleted = param1.readBoolean();
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobBookSubscriptionMessage.jobId.');
        }
    };
    JobBookSubscriptionMessage.ID = 6593;
    return JobBookSubscriptionMessage;
})(network_message_1.NetworkMessage);
module.exports = JobBookSubscriptionMessage;
