/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentificationFailedMessage = (function (_super) {
    __extends(IdentificationFailedMessage, _super);
    function IdentificationFailedMessage() {
        this.reason = 99;
        _super.call(this);
    }
    IdentificationFailedMessage.prototype.getMessageId = function () {
        return IdentificationFailedMessage.ID;
    };
    IdentificationFailedMessage.prototype.reset = function () {
        this.reason = 99;
    };
    IdentificationFailedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationFailedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationFailedMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationFailedMessage(param1);
    };
    IdentificationFailedMessage.prototype.serializeAs_IdentificationFailedMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    IdentificationFailedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationFailedMessage(param1);
    };
    IdentificationFailedMessage.prototype.deserializeAs_IdentificationFailedMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of IdentificationFailedMessage.reason.');
        }
    };
    IdentificationFailedMessage.ID = 20;
    return IdentificationFailedMessage;
})(network_message_1.NetworkMessage);
module.exports = IdentificationFailedMessage;
