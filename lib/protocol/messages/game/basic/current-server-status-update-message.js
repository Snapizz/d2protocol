/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CurrentServerStatusUpdateMessage = (function (_super) {
    __extends(CurrentServerStatusUpdateMessage, _super);
    function CurrentServerStatusUpdateMessage() {
        this.status = 1;
        _super.call(this);
    }
    CurrentServerStatusUpdateMessage.prototype.getMessageId = function () {
        return CurrentServerStatusUpdateMessage.ID;
    };
    CurrentServerStatusUpdateMessage.prototype.reset = function () {
        this.status = 1;
    };
    CurrentServerStatusUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CurrentServerStatusUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CurrentServerStatusUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_CurrentServerStatusUpdateMessage(param1);
    };
    CurrentServerStatusUpdateMessage.prototype.serializeAs_CurrentServerStatusUpdateMessage = function (param1) {
        param1.writeByte(this.status);
    };
    CurrentServerStatusUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CurrentServerStatusUpdateMessage(param1);
    };
    CurrentServerStatusUpdateMessage.prototype.deserializeAs_CurrentServerStatusUpdateMessage = function (param1) {
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of CurrentServerStatusUpdateMessage.status.');
        }
    };
    CurrentServerStatusUpdateMessage.ID = 6525;
    return CurrentServerStatusUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = CurrentServerStatusUpdateMessage;
