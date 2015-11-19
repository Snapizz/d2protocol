/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicPongMessage = (function (_super) {
    __extends(BasicPongMessage, _super);
    function BasicPongMessage() {
        this.quiet = false;
        _super.call(this);
    }
    BasicPongMessage.prototype.getMessageId = function () {
        return BasicPongMessage.ID;
    };
    BasicPongMessage.prototype.reset = function () {
        this.quiet = false;
    };
    BasicPongMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicPongMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicPongMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicPongMessage(param1);
    };
    BasicPongMessage.prototype.serializeAs_BasicPongMessage = function (param1) {
        param1.writeBoolean(this.quiet);
    };
    BasicPongMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicPongMessage(param1);
    };
    BasicPongMessage.prototype.deserializeAs_BasicPongMessage = function (param1) {
        this.quiet = param1.readBoolean();
    };
    BasicPongMessage.ID = 183;
    return BasicPongMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicPongMessage;
