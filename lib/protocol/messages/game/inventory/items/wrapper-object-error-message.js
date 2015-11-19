/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectErrorMessage = require('./symbiotic-object-error-message');
var WrapperObjectErrorMessage = (function (_super) {
    __extends(WrapperObjectErrorMessage, _super);
    function WrapperObjectErrorMessage() {
        _super.call(this);
    }
    WrapperObjectErrorMessage.prototype.getMessageId = function () {
        return WrapperObjectErrorMessage.ID;
    };
    WrapperObjectErrorMessage.prototype.reset = function () {
    };
    WrapperObjectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    WrapperObjectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    WrapperObjectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_WrapperObjectErrorMessage(param1);
    };
    WrapperObjectErrorMessage.prototype.serializeAs_WrapperObjectErrorMessage = function (param1) {
        _super.prototype.serializeAs_SymbioticObjectErrorMessage.call(this, param1);
    };
    WrapperObjectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_WrapperObjectErrorMessage(param1);
    };
    WrapperObjectErrorMessage.prototype.deserializeAs_WrapperObjectErrorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    WrapperObjectErrorMessage.ID = 6529;
    return WrapperObjectErrorMessage;
})(SymbioticObjectErrorMessage);
module.exports = WrapperObjectErrorMessage;
