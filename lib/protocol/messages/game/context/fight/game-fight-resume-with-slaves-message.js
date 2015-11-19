/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightResumeMessage = require('./game-fight-resume-message');
var GameFightResumeSlaveInfo = require('../../../../types/game/context/fight/game-fight-resume-slave-info');
var GameFightResumeWithSlavesMessage = (function (_super) {
    __extends(GameFightResumeWithSlavesMessage, _super);
    function GameFightResumeWithSlavesMessage() {
        this.slavesInfo = [];
        _super.call(this);
    }
    GameFightResumeWithSlavesMessage.prototype.getMessageId = function () {
        return GameFightResumeWithSlavesMessage.ID;
    };
    GameFightResumeWithSlavesMessage.prototype.reset = function () {
        this.slavesInfo = [];
    };
    GameFightResumeWithSlavesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightResumeWithSlavesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightResumeWithSlavesMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightResumeWithSlavesMessage(param1);
    };
    GameFightResumeWithSlavesMessage.prototype.serializeAs_GameFightResumeWithSlavesMessage = function (param1) {
        _super.prototype.serializeAs_GameFightResumeMessage.call(this, param1);
        param1.writeShort(this.slavesInfo.length);
        var _loc2_ = 0;
        while (_loc2_ < this.slavesInfo.length) {
            (this.slavesInfo[_loc2_]).serializeAs_GameFightResumeSlaveInfo(param1);
            _loc2_++;
        }
    };
    GameFightResumeWithSlavesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightResumeWithSlavesMessage(param1);
    };
    GameFightResumeWithSlavesMessage.prototype.deserializeAs_GameFightResumeWithSlavesMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new GameFightResumeSlaveInfo();
            _loc4_.deserialize(param1);
            this.slavesInfo.push(_loc4_);
            _loc3_++;
        }
    };
    GameFightResumeWithSlavesMessage.ID = 6215;
    return GameFightResumeWithSlavesMessage;
})(GameFightResumeMessage);
module.exports = GameFightResumeWithSlavesMessage;
