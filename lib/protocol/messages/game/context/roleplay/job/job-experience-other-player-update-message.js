/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobExperienceUpdateMessage = require('./job-experience-update-message');
var JobExperienceOtherPlayerUpdateMessage = (function (_super) {
    __extends(JobExperienceOtherPlayerUpdateMessage, _super);
    function JobExperienceOtherPlayerUpdateMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    JobExperienceOtherPlayerUpdateMessage.prototype.getMessageId = function () {
        return JobExperienceOtherPlayerUpdateMessage.ID;
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobExperienceOtherPlayerUpdateMessage(param1);
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.serializeAs_JobExperienceOtherPlayerUpdateMessage = function (param1) {
        _super.prototype.serializeAs_JobExperienceUpdateMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobExperienceOtherPlayerUpdateMessage(param1);
    };
    JobExperienceOtherPlayerUpdateMessage.prototype.deserializeAs_JobExperienceOtherPlayerUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobExperienceOtherPlayerUpdateMessage.playerId.');
        }
    };
    JobExperienceOtherPlayerUpdateMessage.ID = 6599;
    return JobExperienceOtherPlayerUpdateMessage;
})(JobExperienceUpdateMessage);
module.exports = JobExperienceOtherPlayerUpdateMessage;
