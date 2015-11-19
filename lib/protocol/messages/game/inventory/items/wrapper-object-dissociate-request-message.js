/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var WrapperObjectDissociateRequestMessage = (function (_super) {
    __extends(WrapperObjectDissociateRequestMessage, _super);
    function WrapperObjectDissociateRequestMessage() {
        this.hostUID = 0;
        this.hostPos = 0;
        _super.call(this);
    }
    WrapperObjectDissociateRequestMessage.prototype.getMessageId = function () {
        return WrapperObjectDissociateRequestMessage.ID;
    };
    WrapperObjectDissociateRequestMessage.prototype.reset = function () {
        this.hostUID = 0;
        this.hostPos = 0;
    };
    WrapperObjectDissociateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    WrapperObjectDissociateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    WrapperObjectDissociateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_WrapperObjectDissociateRequestMessage(param1);
    };
    WrapperObjectDissociateRequestMessage.prototype.serializeAs_WrapperObjectDissociateRequestMessage = function (param1) {
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element hostPos.');
        }
        param1.writeByte(this.hostPos);
    };
    WrapperObjectDissociateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_WrapperObjectDissociateRequestMessage(param1);
    };
    WrapperObjectDissociateRequestMessage.prototype.deserializeAs_WrapperObjectDissociateRequestMessage = function (param1) {
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of WrapperObjectDissociateRequestMessage.hostUID.');
        }
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element of WrapperObjectDissociateRequestMessage.hostPos.');
        }
    };
    WrapperObjectDissociateRequestMessage.ID = 6524;
    return WrapperObjectDissociateRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = WrapperObjectDissociateRequestMessage;
