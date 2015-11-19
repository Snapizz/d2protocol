/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TaxCollectorErrorMessage = (function (_super) {
    __extends(TaxCollectorErrorMessage, _super);
    function TaxCollectorErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    TaxCollectorErrorMessage.prototype.getMessageId = function () {
        return TaxCollectorErrorMessage.ID;
    };
    TaxCollectorErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    TaxCollectorErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorErrorMessage(param1);
    };
    TaxCollectorErrorMessage.prototype.serializeAs_TaxCollectorErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    TaxCollectorErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorErrorMessage(param1);
    };
    TaxCollectorErrorMessage.prototype.deserializeAs_TaxCollectorErrorMessage = function (param1) {
        this.reason = param1.readByte();
    };
    TaxCollectorErrorMessage.ID = 5634;
    return TaxCollectorErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorErrorMessage;
