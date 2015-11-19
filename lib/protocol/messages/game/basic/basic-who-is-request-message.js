/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicWhoIsRequestMessage = (function (_super) {
    __extends(BasicWhoIsRequestMessage, _super);
    function BasicWhoIsRequestMessage() {
        this.verbose = false;
        this.search = '';
        _super.call(this);
    }
    BasicWhoIsRequestMessage.prototype.getMessageId = function () {
        return BasicWhoIsRequestMessage.ID;
    };
    BasicWhoIsRequestMessage.prototype.reset = function () {
        this.verbose = false;
        this.search = '';
    };
    BasicWhoIsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicWhoIsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicWhoIsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicWhoIsRequestMessage(param1);
    };
    BasicWhoIsRequestMessage.prototype.serializeAs_BasicWhoIsRequestMessage = function (param1) {
        param1.writeBoolean(this.verbose);
        param1.writeUTF(this.search);
    };
    BasicWhoIsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicWhoIsRequestMessage(param1);
    };
    BasicWhoIsRequestMessage.prototype.deserializeAs_BasicWhoIsRequestMessage = function (param1) {
        this.verbose = param1.readBoolean();
        this.search = param1.readUTF();
    };
    BasicWhoIsRequestMessage.ID = 181;
    return BasicWhoIsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicWhoIsRequestMessage;
