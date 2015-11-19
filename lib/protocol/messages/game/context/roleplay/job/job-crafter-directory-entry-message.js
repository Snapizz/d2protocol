/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectoryEntryPlayerInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-player-info');
var JobCrafterDirectoryEntryJobInfo = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-entry-job-info');
var EntityLook = require('../../../../../types/game/look/entity-look');
var JobCrafterDirectoryEntryMessage = (function (_super) {
    __extends(JobCrafterDirectoryEntryMessage, _super);
    function JobCrafterDirectoryEntryMessage() {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfoList = [];
        this.playerLook = new EntityLook();
        _super.call(this);
    }
    JobCrafterDirectoryEntryMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryEntryMessage.ID;
    };
    JobCrafterDirectoryEntryMessage.prototype.reset = function () {
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.jobInfoList = [];
        this.playerLook = new EntityLook();
    };
    JobCrafterDirectoryEntryMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryEntryMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryEntryMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryEntryMessage(param1);
    };
    JobCrafterDirectoryEntryMessage.prototype.serializeAs_JobCrafterDirectoryEntryMessage = function (param1) {
        this.playerInfo.serializeAs_JobCrafterDirectoryEntryPlayerInfo(param1);
        param1.writeShort(this.jobInfoList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.jobInfoList.length) {
            (this.jobInfoList[_loc2_]).serializeAs_JobCrafterDirectoryEntryJobInfo(param1);
            _loc2_++;
        }
        this.playerLook.serializeAs_EntityLook(param1);
    };
    JobCrafterDirectoryEntryMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryEntryMessage(param1);
    };
    JobCrafterDirectoryEntryMessage.prototype.deserializeAs_JobCrafterDirectoryEntryMessage = function (param1) {
        var _loc4_ = null;
        this.playerInfo = new JobCrafterDirectoryEntryPlayerInfo();
        this.playerInfo.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new JobCrafterDirectoryEntryJobInfo();
            _loc4_.deserialize(param1);
            this.jobInfoList.push(_loc4_);
            _loc3_++;
        }
        this.playerLook = new EntityLook();
        this.playerLook.deserialize(param1);
    };
    JobCrafterDirectoryEntryMessage.ID = 6044;
    return JobCrafterDirectoryEntryMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryEntryMessage;
