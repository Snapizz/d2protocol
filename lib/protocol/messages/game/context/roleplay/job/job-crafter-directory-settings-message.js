/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobCrafterDirectorySettings = require('../../../../../types/game/context/roleplay/job/job-crafter-directory-settings');
var JobCrafterDirectorySettingsMessage = (function (_super) {
    __extends(JobCrafterDirectorySettingsMessage, _super);
    function JobCrafterDirectorySettingsMessage() {
        this.craftersSettings = [];
        _super.call(this);
    }
    JobCrafterDirectorySettingsMessage.prototype.getMessageId = function () {
        return JobCrafterDirectorySettingsMessage.ID;
    };
    JobCrafterDirectorySettingsMessage.prototype.reset = function () {
        this.craftersSettings = [];
    };
    JobCrafterDirectorySettingsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectorySettingsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectorySettingsMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectorySettingsMessage(param1);
    };
    JobCrafterDirectorySettingsMessage.prototype.serializeAs_JobCrafterDirectorySettingsMessage = function (param1) {
        param1.writeShort(this.craftersSettings.length);
        var _loc2_ = 0;
        while (_loc2_ < this.craftersSettings.length) {
            (this.craftersSettings[_loc2_]).serializeAs_JobCrafterDirectorySettings(param1);
            _loc2_++;
        }
    };
    JobCrafterDirectorySettingsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectorySettingsMessage(param1);
    };
    JobCrafterDirectorySettingsMessage.prototype.deserializeAs_JobCrafterDirectorySettingsMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new JobCrafterDirectorySettings();
            _loc4_.deserialize(param1);
            this.craftersSettings.push(_loc4_);
            _loc3_++;
        }
    };
    JobCrafterDirectorySettingsMessage.ID = 5652;
    return JobCrafterDirectorySettingsMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectorySettingsMessage;
