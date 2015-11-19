/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StopToListenRunningFightRequestMessage = (function (_super) {
    __extends(StopToListenRunningFightRequestMessage, _super);
    function StopToListenRunningFightRequestMessage() {
        _super.call(this);
    }
    StopToListenRunningFightRequestMessage.prototype.getMessageId = function () {
        return StopToListenRunningFightRequestMessage.ID;
    };
    StopToListenRunningFightRequestMessage.prototype.reset = function () {
    };
    StopToListenRunningFightRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StopToListenRunningFightRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StopToListenRunningFightRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_StopToListenRunningFightRequestMessage(param1);
    };
    StopToListenRunningFightRequestMessage.prototype.serializeAs_StopToListenRunningFightRequestMessage = function (param1) {
    };
    StopToListenRunningFightRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StopToListenRunningFightRequestMessage(param1);
    };
    StopToListenRunningFightRequestMessage.prototype.deserializeAs_StopToListenRunningFightRequestMessage = function (param1) {
    };
    StopToListenRunningFightRequestMessage.ID = 6124;
    return StopToListenRunningFightRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = StopToListenRunningFightRequestMessage;
