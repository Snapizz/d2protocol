/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicPingMessage = (function (_super) {
    __extends(BasicPingMessage, _super);
    function BasicPingMessage() {
        this.quiet = false;
        _super.call(this);
    }
    BasicPingMessage.prototype.getMessageId = function () {
        return BasicPingMessage.ID;
    };
    BasicPingMessage.prototype.reset = function () {
        this.quiet = false;
    };
    BasicPingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicPingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicPingMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicPingMessage(param1);
    };
    BasicPingMessage.prototype.serializeAs_BasicPingMessage = function (param1) {
        param1.writeBoolean(this.quiet);
    };
    BasicPingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicPingMessage(param1);
    };
    BasicPingMessage.prototype.deserializeAs_BasicPingMessage = function (param1) {
        this.quiet = param1.readBoolean();
    };
    BasicPingMessage.ID = 182;
    return BasicPingMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicPingMessage;
