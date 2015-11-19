/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicTimeMessage = (function (_super) {
    __extends(BasicTimeMessage, _super);
    function BasicTimeMessage() {
        this.timestamp = 0;
        this.timezoneOffset = 0;
        _super.call(this);
    }
    BasicTimeMessage.prototype.getMessageId = function () {
        return BasicTimeMessage.ID;
    };
    BasicTimeMessage.prototype.reset = function () {
        this.timestamp = 0;
        this.timezoneOffset = 0;
    };
    BasicTimeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicTimeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicTimeMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicTimeMessage(param1);
    };
    BasicTimeMessage.prototype.serializeAs_BasicTimeMessage = function (param1) {
        if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element timestamp.');
        }
        param1.writeDouble(this.timestamp);
        param1.writeShort(this.timezoneOffset);
    };
    BasicTimeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicTimeMessage(param1);
    };
    BasicTimeMessage.prototype.deserializeAs_BasicTimeMessage = function (param1) {
        this.timestamp = param1.readDouble();
        if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.timestamp + ') on element of BasicTimeMessage.timestamp.');
        }
        this.timezoneOffset = param1.readShort();
    };
    BasicTimeMessage.ID = 175;
    return BasicTimeMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicTimeMessage;
