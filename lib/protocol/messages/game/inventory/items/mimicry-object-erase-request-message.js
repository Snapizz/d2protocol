/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MimicryObjectEraseRequestMessage = (function (_super) {
    __extends(MimicryObjectEraseRequestMessage, _super);
    function MimicryObjectEraseRequestMessage() {
        this.hostUID = 0;
        this.hostPos = 0;
        _super.call(this);
    }
    MimicryObjectEraseRequestMessage.prototype.getMessageId = function () {
        return MimicryObjectEraseRequestMessage.ID;
    };
    MimicryObjectEraseRequestMessage.prototype.reset = function () {
        this.hostUID = 0;
        this.hostPos = 0;
    };
    MimicryObjectEraseRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MimicryObjectEraseRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MimicryObjectEraseRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MimicryObjectEraseRequestMessage(param1);
    };
    MimicryObjectEraseRequestMessage.prototype.serializeAs_MimicryObjectEraseRequestMessage = function (param1) {
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element hostUID.');
        }
        param1.writeVarInt(this.hostUID);
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element hostPos.');
        }
        param1.writeByte(this.hostPos);
    };
    MimicryObjectEraseRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MimicryObjectEraseRequestMessage(param1);
    };
    MimicryObjectEraseRequestMessage.prototype.deserializeAs_MimicryObjectEraseRequestMessage = function (param1) {
        this.hostUID = param1.readVarUhInt();
        if (this.hostUID < 0) {
            throw new Error('Forbidden value (' + this.hostUID + ') on element of MimicryObjectEraseRequestMessage.hostUID.');
        }
        this.hostPos = param1.readUnsignedByte();
        if (this.hostPos < 0 || this.hostPos > 255) {
            throw new Error('Forbidden value (' + this.hostPos + ') on element of MimicryObjectEraseRequestMessage.hostPos.');
        }
    };
    MimicryObjectEraseRequestMessage.ID = 6457;
    return MimicryObjectEraseRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MimicryObjectEraseRequestMessage;
