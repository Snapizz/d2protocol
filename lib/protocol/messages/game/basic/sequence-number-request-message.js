/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SequenceNumberRequestMessage = (function (_super) {
    __extends(SequenceNumberRequestMessage, _super);
    function SequenceNumberRequestMessage() {
        _super.call(this);
    }
    SequenceNumberRequestMessage.prototype.getMessageId = function () {
        return SequenceNumberRequestMessage.ID;
    };
    SequenceNumberRequestMessage.prototype.reset = function () {
    };
    SequenceNumberRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SequenceNumberRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SequenceNumberRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_SequenceNumberRequestMessage(param1);
    };
    SequenceNumberRequestMessage.prototype.serializeAs_SequenceNumberRequestMessage = function (param1) {
    };
    SequenceNumberRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SequenceNumberRequestMessage(param1);
    };
    SequenceNumberRequestMessage.prototype.deserializeAs_SequenceNumberRequestMessage = function (param1) {
    };
    SequenceNumberRequestMessage.ID = 6316;
    return SequenceNumberRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = SequenceNumberRequestMessage;
