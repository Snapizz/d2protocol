/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobDescription = require('../../../../../types/game/context/roleplay/job/job-description');
var JobLevelUpMessage = (function (_super) {
    __extends(JobLevelUpMessage, _super);
    function JobLevelUpMessage() {
        this.newLevel = 0;
        this.jobsDescription = new JobDescription();
        _super.call(this);
    }
    JobLevelUpMessage.prototype.getMessageId = function () {
        return JobLevelUpMessage.ID;
    };
    JobLevelUpMessage.prototype.reset = function () {
        this.newLevel = 0;
        this.jobsDescription = new JobDescription();
    };
    JobLevelUpMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobLevelUpMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobLevelUpMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobLevelUpMessage(param1);
    };
    JobLevelUpMessage.prototype.serializeAs_JobLevelUpMessage = function (param1) {
        if (this.newLevel < 0 || this.newLevel > 255) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element newLevel.');
        }
        param1.writeByte(this.newLevel);
        this.jobsDescription.serializeAs_JobDescription(param1);
    };
    JobLevelUpMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobLevelUpMessage(param1);
    };
    JobLevelUpMessage.prototype.deserializeAs_JobLevelUpMessage = function (param1) {
        this.newLevel = param1.readUnsignedByte();
        if (this.newLevel < 0 || this.newLevel > 255) {
            throw new Error('Forbidden value (' + this.newLevel + ') on element of JobLevelUpMessage.newLevel.');
        }
        this.jobsDescription = new JobDescription();
        this.jobsDescription.deserialize(param1);
    };
    JobLevelUpMessage.ID = 5656;
    return JobLevelUpMessage;
})(network_message_1.NetworkMessage);
module.exports = JobLevelUpMessage;
