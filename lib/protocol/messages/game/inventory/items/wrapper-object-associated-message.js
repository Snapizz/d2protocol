/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectAssociatedMessage = require('./symbiotic-object-associated-message');
var WrapperObjectAssociatedMessage = (function (_super) {
    __extends(WrapperObjectAssociatedMessage, _super);
    function WrapperObjectAssociatedMessage() {
        _super.call(this);
    }
    WrapperObjectAssociatedMessage.prototype.getMessageId = function () {
        return WrapperObjectAssociatedMessage.ID;
    };
    WrapperObjectAssociatedMessage.prototype.reset = function () {
    };
    WrapperObjectAssociatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    WrapperObjectAssociatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    WrapperObjectAssociatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_WrapperObjectAssociatedMessage(param1);
    };
    WrapperObjectAssociatedMessage.prototype.serializeAs_WrapperObjectAssociatedMessage = function (param1) {
        _super.prototype.serializeAs_SymbioticObjectAssociatedMessage.call(this, param1);
    };
    WrapperObjectAssociatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_WrapperObjectAssociatedMessage(param1);
    };
    WrapperObjectAssociatedMessage.prototype.deserializeAs_WrapperObjectAssociatedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    WrapperObjectAssociatedMessage.ID = 6523;
    return WrapperObjectAssociatedMessage;
})(SymbioticObjectAssociatedMessage);
module.exports = WrapperObjectAssociatedMessage;
