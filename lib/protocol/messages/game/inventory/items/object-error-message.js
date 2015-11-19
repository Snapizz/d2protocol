/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectErrorMessage = (function (_super) {
    __extends(ObjectErrorMessage, _super);
    function ObjectErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    ObjectErrorMessage.prototype.getMessageId = function () {
        return ObjectErrorMessage.ID;
    };
    ObjectErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    ObjectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectErrorMessage(param1);
    };
    ObjectErrorMessage.prototype.serializeAs_ObjectErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    ObjectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectErrorMessage(param1);
    };
    ObjectErrorMessage.prototype.deserializeAs_ObjectErrorMessage = function (param1) {
        this.reason = param1.readByte();
    };
    ObjectErrorMessage.ID = 3004;
    return ObjectErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectErrorMessage;
