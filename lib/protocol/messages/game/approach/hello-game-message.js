/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HelloGameMessage = (function (_super) {
    __extends(HelloGameMessage, _super);
    function HelloGameMessage() {
        _super.call(this);
    }
    HelloGameMessage.prototype.getMessageId = function () {
        return HelloGameMessage.ID;
    };
    HelloGameMessage.prototype.reset = function () {
    };
    HelloGameMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HelloGameMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HelloGameMessage.prototype.serialize = function (param1) {
        this.serializeAs_HelloGameMessage(param1);
    };
    HelloGameMessage.prototype.serializeAs_HelloGameMessage = function (param1) {
    };
    HelloGameMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HelloGameMessage(param1);
    };
    HelloGameMessage.prototype.deserializeAs_HelloGameMessage = function (param1) {
    };
    HelloGameMessage.ID = 101;
    return HelloGameMessage;
})(network_message_1.NetworkMessage);
module.exports = HelloGameMessage;
