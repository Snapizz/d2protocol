/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectJobAddedMessage = (function (_super) {
    __extends(ObjectJobAddedMessage, _super);
    function ObjectJobAddedMessage() {
        this.jobId = 0;
        _super.call(this);
    }
    ObjectJobAddedMessage.prototype.getMessageId = function () {
        return ObjectJobAddedMessage.ID;
    };
    ObjectJobAddedMessage.prototype.reset = function () {
        this.jobId = 0;
    };
    ObjectJobAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectJobAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectJobAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectJobAddedMessage(param1);
    };
    ObjectJobAddedMessage.prototype.serializeAs_ObjectJobAddedMessage = function (param1) {
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element jobId.');
        }
        param1.writeByte(this.jobId);
    };
    ObjectJobAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectJobAddedMessage(param1);
    };
    ObjectJobAddedMessage.prototype.deserializeAs_ObjectJobAddedMessage = function (param1) {
        this.jobId = param1.readByte();
        if (this.jobId < 0) {
            throw new Error('Forbidden value (' + this.jobId + ') on element of ObjectJobAddedMessage.jobId.');
        }
    };
    ObjectJobAddedMessage.ID = 6014;
    return ObjectJobAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectJobAddedMessage;
