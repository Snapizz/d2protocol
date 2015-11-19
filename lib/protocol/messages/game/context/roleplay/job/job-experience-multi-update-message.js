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
var JobExperienceMultiUpdateMessage = (function (_super) {
    __extends(JobExperienceMultiUpdateMessage, _super);
    function JobExperienceMultiUpdateMessage() {
        this.experiencesUpdate = [];
        _super.call(this);
    }
    JobExperienceMultiUpdateMessage.prototype.getMessageId = function () {
        return JobExperienceMultiUpdateMessage.ID;
    };
    JobExperienceMultiUpdateMessage.prototype.reset = function () {
        this.experiencesUpdate = [];
    };
    JobExperienceMultiUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobExperienceMultiUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobExperienceMultiUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobExperienceMultiUpdateMessage(param1);
    };
    JobExperienceMultiUpdateMessage.prototype.serializeAs_JobExperienceMultiUpdateMessage = function (param1) {
        param1.writeShort(this.experiencesUpdate.length);
        var _loc2_ = 0;
        while (_loc2_ < this.experiencesUpdate.length) {
            (this.experiencesUpdate[_loc2_]).serializeAs_JobExperience(param1);
            _loc2_++;
        }
    };
    JobExperienceMultiUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobExperienceMultiUpdateMessage(param1);
    };
    JobExperienceMultiUpdateMessage.prototype.deserializeAs_JobExperienceMultiUpdateMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new JobExperience();
            _loc4_.deserialize(param1);
            this.experiencesUpdate.push(_loc4_);
            _loc3_++;
        }
    };
    JobExperienceMultiUpdateMessage.ID = 5809;
    return JobExperienceMultiUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = JobExperienceMultiUpdateMessage;
