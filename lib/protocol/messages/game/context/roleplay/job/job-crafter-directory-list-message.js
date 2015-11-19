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
var JobCrafterDirectoryListMessage = (function (_super) {
    __extends(JobCrafterDirectoryListMessage, _super);
    function JobCrafterDirectoryListMessage() {
        this.listEntries = [];
        _super.call(this);
    }
    JobCrafterDirectoryListMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryListMessage.ID;
    };
    JobCrafterDirectoryListMessage.prototype.reset = function () {
        this.listEntries = [];
    };
    JobCrafterDirectoryListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryListMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryListMessage(param1);
    };
    JobCrafterDirectoryListMessage.prototype.serializeAs_JobCrafterDirectoryListMessage = function (param1) {
        param1.writeShort(this.listEntries.length);
        var _loc2_ = 0;
        while (_loc2_ < this.listEntries.length) {
            (this.listEntries[_loc2_]).serializeAs_JobCrafterDirectoryListEntry(param1);
            _loc2_++;
        }
    };
    JobCrafterDirectoryListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryListMessage(param1);
    };
    JobCrafterDirectoryListMessage.prototype.deserializeAs_JobCrafterDirectoryListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new JobCrafterDirectoryListEntry();
            _loc4_.deserialize(param1);
            this.listEntries.push(_loc4_);
            _loc3_++;
        }
    };
    JobCrafterDirectoryListMessage.ID = 6046;
    return JobCrafterDirectoryListMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryListMessage;
