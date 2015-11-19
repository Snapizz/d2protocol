/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectErrorMessage = require('./object-error-message');
var SymbioticObjectErrorMessage = (function (_super) {
    __extends(SymbioticObjectErrorMessage, _super);
    function SymbioticObjectErrorMessage() {
        this.errorCode = 0;
        _super.call(this);
    }
    SymbioticObjectErrorMessage.prototype.getMessageId = function () {
        return SymbioticObjectErrorMessage.ID;
    };
    SymbioticObjectErrorMessage.prototype.reset = function () {
        this.errorCode = 0;
    };
    SymbioticObjectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SymbioticObjectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SymbioticObjectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_SymbioticObjectErrorMessage(param1);
    };
    SymbioticObjectErrorMessage.prototype.serializeAs_SymbioticObjectErrorMessage = function (param1) {
        _super.prototype.serializeAs_ObjectErrorMessage.call(this, param1);
        param1.writeByte(this.errorCode);
    };
    SymbioticObjectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SymbioticObjectErrorMessage(param1);
    };
    SymbioticObjectErrorMessage.prototype.deserializeAs_SymbioticObjectErrorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.errorCode = param1.readByte();
    };
    SymbioticObjectErrorMessage.ID = 6526;
    return SymbioticObjectErrorMessage;
})(ObjectErrorMessage);
module.exports = SymbioticObjectErrorMessage;
