/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicNoOperationMessage = (function (_super) {
    __extends(BasicNoOperationMessage, _super);
    function BasicNoOperationMessage() {
        _super.call(this);
    }
    BasicNoOperationMessage.prototype.getMessageId = function () {
        return BasicNoOperationMessage.ID;
    };
    BasicNoOperationMessage.prototype.reset = function () {
    };
    BasicNoOperationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicNoOperationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicNoOperationMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicNoOperationMessage(param1);
    };
    BasicNoOperationMessage.prototype.serializeAs_BasicNoOperationMessage = function (param1) {
    };
    BasicNoOperationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicNoOperationMessage(param1);
    };
    BasicNoOperationMessage.prototype.deserializeAs_BasicNoOperationMessage = function (param1) {
    };
    BasicNoOperationMessage.ID = 176;
    return BasicNoOperationMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicNoOperationMessage;
