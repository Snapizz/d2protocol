/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectoryListEntry = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-list-entry');
var JobCrafterDirectoryAddMessage = (function (_super) {
    __extends(JobCrafterDirectoryAddMessage, _super);
    function JobCrafterDirectoryAddMessage() {
        this.listEntry = new JobCrafterDirectoryListEntry();
        _super.call(this);
    }
    JobCrafterDirectoryAddMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryAddMessage.ID;
    };
    JobCrafterDirectoryAddMessage.prototype.reset = function () {
        this.listEntry = new JobCrafterDirectoryListEntry();
    };
    JobCrafterDirectoryAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryAddMessage(param1);
    };
    JobCrafterDirectoryAddMessage.prototype.serializeAs_JobCrafterDirectoryAddMessage = function (param1) {
        this.listEntry.serializeAs_JobCrafterDirectoryListEntry(param1);
    };
    JobCrafterDirectoryAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryAddMessage(param1);
    };
    JobCrafterDirectoryAddMessage.prototype.deserializeAs_JobCrafterDirectoryAddMessage = function (param1) {
        this.listEntry = new JobCrafterDirectoryListEntry();
        this.listEntry.deserialize(param1);
    };
    JobCrafterDirectoryAddMessage.ID = 5651;
    return JobCrafterDirectoryAddMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryAddMessage;
