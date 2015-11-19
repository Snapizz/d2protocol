/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectoryListRequestMessage = (function (_super) {
    __extends(JobCrafterDirectoryListRequestMessage, _super);
    function JobCrafterDirectoryListRequestMessage() {
        this.jobId = 0;
        _super.call(this);
    }
    JobCrafterDirectoryListRequestMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryListRequestMessage.ID;
    };
    JobCrafterDirectoryListRequestMessage.prototype.reset = function () {
        this.jobId = 0;
    };
    JobCrafterDirectoryListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryListRequestMessage(param1);
    };
    JobCrafterDirectoryListRequestMessage.prototype.serializeAs_JobCrafterDirectoryListRequestMessage = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
    };
    JobCrafterDirectoryListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryListRequestMessage(param1);
    };
    JobCrafterDirectoryListRequestMessage.prototype.deserializeAs_JobCrafterDirectoryListRequestMessage = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectoryListRequestMessage.jobId.');
        }
    };
    JobCrafterDirectoryListRequestMessage.ID = 6047;
    return JobCrafterDirectoryListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryListRequestMessage;
