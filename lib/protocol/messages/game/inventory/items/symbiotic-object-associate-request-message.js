/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SymbioticObjectAssociateRequestMessage = (function (_super) {
    __extends(SymbioticObjectAssociateRequestMessage, _super);
    function SymbioticObjectAssociateRequestMessage() {
        this.symbioteUID = 0;
        this.symbiotePos = 0;
        this.hostUID = 0;
        this.hostPos = 0;
        _super.call(this);
    }
    SymbioticObjectAssociateRequestMessage.prototype.getMessageId = function () {
        return SymbioticObjectAssociateRequestMessage.ID;
    };
    SymbioticObjectAssociateRequestMessage.prototype.reset = function () {
        this.symbioteUID = 0;
        this.symbiotePos = 0;
        this.hostUID = 0;
        this.hostPos = 0;
    };
    SymbioticObjectAssociateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SymbioticObjectAssociateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SymbioticObjectAssociateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_SymbioticObjectAssociateRequestMessage(param1);
    };
    SymbioticObjectAssociateRequestMessage.prototype.serializeAs_SymbioticObjectAssociateRequestMessage = function (param1) {
        if (this.symbioteUID < 0) {
            throw new Error('Forbidden value (' + this.symbioteUID + ') on element symbioteUID.');
        }
        param1.writeVarInt(this.symbioteUID);
        if (this.symbiotePos < 0 || this.symbiotePos > 255) {
            throw new Error('Forbidden value (' + this.symbiotePos + ') on element symbiotePos.');
        }
        param1.writeByte(this.symbiotePos);
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element hostPos.');
        }
        param1.writeByte(this.hostPos);
    };
    SymbioticObjectAssociateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SymbioticObjectAssociateRequestMessage(param1);
    };
    SymbioticObjectAssociateRequestMessage.prototype.deserializeAs_SymbioticObjectAssociateRequestMessage = function (param1) {
        this.symbioteUID = param1.readVarUhInt();
        if (this.symbioteUID < 0) {
            throw new Error('Forbidden value (' + this.symbioteUID + ') on element of SymbioticObjectAssociateRequestMessage.symbioteUID.');
        }
        this.symbiotePos = param1.readUnsignedByte();
        if (this.symbiotePos < 0 || this.symbiotePos > 255) {
            throw new Error('Forbidden value (' + this.symbiotePos + ') on element of SymbioticObjectAssociateRequestMessage.symbiotePos.');
        }
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of SymbioticObjectAssociateRequestMessage.hostUID.');
        }
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element of SymbioticObjectAssociateRequestMessage.hostPos.');
        }
    };
    SymbioticObjectAssociateRequestMessage.ID = 6522;
    return SymbioticObjectAssociateRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = SymbioticObjectAssociateRequestMessage;
