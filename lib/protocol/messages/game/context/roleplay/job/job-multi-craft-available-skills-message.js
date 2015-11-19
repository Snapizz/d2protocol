/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var JobAllowMultiCraftRequestMessage = require('./job-allow-multi-craft-request-message');
var JobMultiCraftAvailableSkillsMessage = (function (_super) {
    __extends(JobMultiCraftAvailableSkillsMessage, _super);
    function JobMultiCraftAvailableSkillsMessage() {
        this.playerId = 0;
        this.skills = [];
        _super.call(this);
    }
    JobMultiCraftAvailableSkillsMessage.prototype.getMessageId = function () {
        return JobMultiCraftAvailableSkillsMessage.ID;
    };
    JobMultiCraftAvailableSkillsMessage.prototype.reset = function () {
        this.playerId = 0;
        this.skills = [];
    };
    JobMultiCraftAvailableSkillsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    JobMultiCraftAvailableSkillsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    JobMultiCraftAvailableSkillsMessage.prototype.serialize = function (param1) {
        this.serializeAs_JobMultiCraftAvailableSkillsMessage(param1);
    };
    JobMultiCraftAvailableSkillsMessage.prototype.serializeAs_JobMultiCraftAvailableSkillsMessage = function (param1) {
        _super.prototype.serializeAs_JobAllowMultiCraftRequestMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.skills.length);
        var _loc2_ = 0;
        while (_loc2_ < this.skills.length) {
            if (this.skills[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.skills[_loc2_] + ') on element 2 (starting at 1) of skills.');
            }
            param1.writeVarShort(this.skills[_loc2_]);
            _loc2_++;
        }
    };
    JobMultiCraftAvailableSkillsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_JobMultiCraftAvailableSkillsMessage(param1);
    };
    JobMultiCraftAvailableSkillsMessage.prototype.deserializeAs_JobMultiCraftAvailableSkillsMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobMultiCraftAvailableSkillsMessage.playerId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of skills.');
            }
            this.skills.push(_loc4_);
            _loc3_++;
        }
    };
    JobMultiCraftAvailableSkillsMessage.ID = 5747;
    return JobMultiCraftAvailableSkillsMessage;
})(JobAllowMultiCraftRequestMessage);
module.exports = JobMultiCraftAvailableSkillsMessage;
