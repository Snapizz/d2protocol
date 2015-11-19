/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectoryRemoveMessage = (function (_super) {
    __extends(JobCrafterDirectoryRemoveMessage, _super);
    function JobCrafterDirectoryRemoveMessage() {
        this.jobId = 0;
        this.playerId = 0;
        _super.call(this);
    }
    JobCrafterDirectoryRemoveMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryRemoveMessage.ID;
    };
    JobCrafterDirectoryRemoveMessage.prototype.reset = function () {
        this.jobId = 0;
        this.playerId = 0;
    };
    JobCrafterDirectoryRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryRemoveMessage(param1);
    };
    JobCrafterDirectoryRemoveMessage.prototype.serializeAs_JobCrafterDirectoryRemoveMessage = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    JobCrafterDirectoryRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryRemoveMessage(param1);
    };
    JobCrafterDirectoryRemoveMessage.prototype.deserializeAs_JobCrafterDirectoryRemoveMessage = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of JobCrafterDirectoryRemoveMessage.jobId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobCrafterDirectoryRemoveMessage.playerId.');
        }
    };
    JobCrafterDirectoryRemoveMessage.ID = 5653;
    return JobCrafterDirectoryRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryRemoveMessage;
