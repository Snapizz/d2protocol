/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicWhoAmIRequestMessage = (function (_super) {
    __extends(BasicWhoAmIRequestMessage, _super);
    function BasicWhoAmIRequestMessage() {
        this.verbose = false;
        _super.call(this);
    }
    BasicWhoAmIRequestMessage.prototype.getMessageId = function () {
        return BasicWhoAmIRequestMessage.ID;
    };
    BasicWhoAmIRequestMessage.prototype.reset = function () {
        this.verbose = false;
    };
    BasicWhoAmIRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicWhoAmIRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicWhoAmIRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicWhoAmIRequestMessage(param1);
    };
    BasicWhoAmIRequestMessage.prototype.serializeAs_BasicWhoAmIRequestMessage = function (param1) {
        param1.writeBoolean(this.verbose);
    };
    BasicWhoAmIRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicWhoAmIRequestMessage(param1);
    };
    BasicWhoAmIRequestMessage.prototype.deserializeAs_BasicWhoAmIRequestMessage = function (param1) {
        this.verbose = param1.readBoolean();
    };
    BasicWhoAmIRequestMessage.ID = 5664;
    return BasicWhoAmIRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicWhoAmIRequestMessage;
