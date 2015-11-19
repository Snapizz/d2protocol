/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../../boolean-byte-wrapper');
var StartupActionFinishedMessage = (function (_super) {
    __extends(StartupActionFinishedMessage, _super);
    function StartupActionFinishedMessage() {
        this.success = false;
        this.actionId = 0;
        this.automaticAction = false;
        _super.call(this);
    }
    StartupActionFinishedMessage.prototype.getMessageId = function () {
        return StartupActionFinishedMessage.ID;
    };
    StartupActionFinishedMessage.prototype.reset = function () {
        this.success = false;
        this.actionId = 0;
        this.automaticAction = false;
    };
    StartupActionFinishedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StartupActionFinishedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StartupActionFinishedMessage.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionFinishedMessage(param1);
    };
    StartupActionFinishedMessage.prototype.serializeAs_StartupActionFinishedMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.success);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.automaticAction);
        param1.writeByte(_loc2_);
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeInt(this.actionId);
    };
    StartupActionFinishedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionFinishedMessage(param1);
    };
    StartupActionFinishedMessage.prototype.deserializeAs_StartupActionFinishedMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.success = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.automaticAction = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.actionId = param1.readInt();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StartupActionFinishedMessage.actionId.');
        }
    };
    StartupActionFinishedMessage.ID = 1304;
    return StartupActionFinishedMessage;
})(network_message_1.NetworkMessage);
module.exports = StartupActionFinishedMessage;
