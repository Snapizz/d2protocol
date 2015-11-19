/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobExperience = require('../../../../../types/game/context/roleplay/job/job-experience');
var JobExperienceUpdateMessage = (function (_super) {
    __extends(JobExperienceUpdateMessage, _super);
    function JobExperienceUpdateMessage() {
        this.experiencesUpdate = new JobExperience();
        _super.call(this);
    }
    JobExperienceUpdateMessage.prototype.getMessageId = function () {
        return JobExperienceUpdateMessage.ID;
    };
    JobExperienceUpdateMessage.prototype.reset = function () {
        this.experiencesUpdate = new JobExperience();
    };
    JobExperienceUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobExperienceUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobExperienceUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobExperienceUpdateMessage(param1);
    };
    JobExperienceUpdateMessage.prototype.serializeAs_JobExperienceUpdateMessage = function (param1) {
        this.experiencesUpdate.serializeAs_JobExperience(param1);
    };
    JobExperienceUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobExperienceUpdateMessage(param1);
    };
    JobExperienceUpdateMessage.prototype.deserializeAs_JobExperienceUpdateMessage = function (param1) {
        this.experiencesUpdate = new JobExperience();
        this.experiencesUpdate.deserialize(param1);
    };
    JobExperienceUpdateMessage.ID = 5654;
    return JobExperienceUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = JobExperienceUpdateMessage;
