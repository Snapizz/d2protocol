/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicDateMessage = (function (_super) {
    __extends(BasicDateMessage, _super);
    function BasicDateMessage() {
        this.day = 0;
        this.month = 0;
        this.year = 0;
        _super.call(this);
    }
    BasicDateMessage.prototype.getMessageId = function () {
        return BasicDateMessage.ID;
    };
    BasicDateMessage.prototype.reset = function () {
        this.day = 0;
        this.month = 0;
        this.year = 0;
    };
    BasicDateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicDateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicDateMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicDateMessage(param1);
    };
    BasicDateMessage.prototype.serializeAs_BasicDateMessage = function (param1) {
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element day.');
        }
        param1.writeByte(this.day);
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element month.');
        }
        param1.writeByte(this.month);
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element year.');
        }
        param1.writeShort(this.year);
    };
    BasicDateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicDateMessage(param1);
    };
    BasicDateMessage.prototype.deserializeAs_BasicDateMessage = function (param1) {
        this.day = param1.readByte();
        if (this.day < 0) {
            throw new Error('Forbidden value (' + this.day + ') on element of BasicDateMessage.day.');
        }
        this.month = param1.readByte();
        if (this.month < 0) {
            throw new Error('Forbidden value (' + this.month + ') on element of BasicDateMessage.month.');
        }
        this.year = param1.readShort();
        if (this.year < 0) {
            throw new Error('Forbidden value (' + this.year + ') on element of BasicDateMessage.year.');
        }
    };
    BasicDateMessage.ID = 177;
    return BasicDateMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicDateMessage;
