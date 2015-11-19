/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectoryEntryRequestMessage = (function (_super) {
    __extends(JobCrafterDirectoryEntryRequestMessage, _super);
    function JobCrafterDirectoryEntryRequestMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    JobCrafterDirectoryEntryRequestMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryEntryRequestMessage.ID;
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryEntryRequestMessage(param1);
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.serializeAs_JobCrafterDirectoryEntryRequestMessage = function (param1) {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryEntryRequestMessage(param1);
    };
    JobCrafterDirectoryEntryRequestMessage.prototype.deserializeAs_JobCrafterDirectoryEntryRequestMessage = function (param1) {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobCrafterDirectoryEntryRequestMessage.playerId.');
        }
    };
    JobCrafterDirectoryEntryRequestMessage.ID = 6043;
    return JobCrafterDirectoryEntryRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryEntryRequestMessage;
