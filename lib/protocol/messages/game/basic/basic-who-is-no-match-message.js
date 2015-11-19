/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicWhoIsNoMatchMessage = (function (_super) {
    __extends(BasicWhoIsNoMatchMessage, _super);
    function BasicWhoIsNoMatchMessage() {
        this.search = '';
        _super.call(this);
    }
    BasicWhoIsNoMatchMessage.prototype.getMessageId = function () {
        return BasicWhoIsNoMatchMessage.ID;
    };
    BasicWhoIsNoMatchMessage.prototype.reset = function () {
        this.search = '';
    };
    BasicWhoIsNoMatchMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicWhoIsNoMatchMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicWhoIsNoMatchMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicWhoIsNoMatchMessage(param1);
    };
    BasicWhoIsNoMatchMessage.prototype.serializeAs_BasicWhoIsNoMatchMessage = function (param1) {
        param1.writeUTF(this.search);
    };
    BasicWhoIsNoMatchMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicWhoIsNoMatchMessage(param1);
    };
    BasicWhoIsNoMatchMessage.prototype.deserializeAs_BasicWhoIsNoMatchMessage = function (param1) {
        this.search = param1.readUTF();
    };
    BasicWhoIsNoMatchMessage.ID = 179;
    return BasicWhoIsNoMatchMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicWhoIsNoMatchMessage;
