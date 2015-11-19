/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectAssociatedMessage = (function (_super) {
    __extends(SymbioticObjectAssociatedMessage, _super);
    function SymbioticObjectAssociatedMessage() {
        this.hostUID = 0;
        _super.call(this);
    }
    SymbioticObjectAssociatedMessage.prototype.getMessageId = function () {
        return SymbioticObjectAssociatedMessage.ID;
    };
    SymbioticObjectAssociatedMessage.prototype.reset = function () {
        this.hostUID = 0;
    };
    SymbioticObjectAssociatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SymbioticObjectAssociatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SymbioticObjectAssociatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_SymbioticObjectAssociatedMessage(param1);
    };
    SymbioticObjectAssociatedMessage.prototype.serializeAs_SymbioticObjectAssociatedMessage = function (param1) {
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);
    };
    SymbioticObjectAssociatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SymbioticObjectAssociatedMessage(param1);
    };
    SymbioticObjectAssociatedMessage.prototype.deserializeAs_SymbioticObjectAssociatedMessage = function (param1) {
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of SymbioticObjectAssociatedMessage.hostUID.');
        }
    };
    SymbioticObjectAssociatedMessage.ID = 6527;
    return SymbioticObjectAssociatedMessage;
})(network_message_1.NetworkMessage);
module.exports = SymbioticObjectAssociatedMessage;
