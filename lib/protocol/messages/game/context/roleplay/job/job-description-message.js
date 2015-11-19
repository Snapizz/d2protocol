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
var JobDescriptionMessage = (function (_super) {
    __extends(JobDescriptionMessage, _super);
    function JobDescriptionMessage() {
        this.jobsDescription = [];
        _super.call(this);
    }
    JobDescriptionMessage.prototype.getMessageId = function () {
        return JobDescriptionMessage.ID;
    };
    JobDescriptionMessage.prototype.reset = function () {
        this.jobsDescription = [];
    };
    JobDescriptionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobDescriptionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobDescriptionMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobDescriptionMessage(param1);
    };
    JobDescriptionMessage.prototype.serializeAs_JobDescriptionMessage = function (param1) {
        param1.writeShort(this.jobsDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.jobsDescription.length) {
            (this.jobsDescription[_loc2_]).serializeAs_JobDescription(param1);
            _loc2_++;
        }
    };
    JobDescriptionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobDescriptionMessage(param1);
    };
    JobDescriptionMessage.prototype.deserializeAs_JobDescriptionMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new JobDescription();
            _loc4_.deserialize(param1);
            this.jobsDescription.push(_loc4_);
            _loc3_++;
        }
    };
    JobDescriptionMessage.ID = 5655;
    return JobDescriptionMessage;
})(network_message_1.NetworkMessage);
module.exports = JobDescriptionMessage;
