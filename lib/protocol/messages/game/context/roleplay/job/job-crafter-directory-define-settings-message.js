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
var JobCrafterDirectoryDefineSettingsMessage = (function (_super) {
    __extends(JobCrafterDirectoryDefineSettingsMessage, _super);
    function JobCrafterDirectoryDefineSettingsMessage() {
        this.settings = new JobCrafterDirectorySettings();
        _super.call(this);
    }
    JobCrafterDirectoryDefineSettingsMessage.prototype.getMessageId = function () {
        return JobCrafterDirectoryDefineSettingsMessage.ID;
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.reset = function () {
        this.settings = new JobCrafterDirectorySettings();
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobCrafterDirectoryDefineSettingsMessage(param1);
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.serializeAs_JobCrafterDirectoryDefineSettingsMessage = function (param1) {
        this.settings.serializeAs_JobCrafterDirectorySettings(param1);
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobCrafterDirectoryDefineSettingsMessage(param1);
    };
    JobCrafterDirectoryDefineSettingsMessage.prototype.deserializeAs_JobCrafterDirectoryDefineSettingsMessage = function (param1) {
        this.settings = new JobCrafterDirectorySettings();
        this.settings.deserialize(param1);
    };
    JobCrafterDirectoryDefineSettingsMessage.ID = 5649;
    return JobCrafterDirectoryDefineSettingsMessage;
})(network_message_1.NetworkMessage);
module.exports = JobCrafterDirectoryDefineSettingsMessage;
