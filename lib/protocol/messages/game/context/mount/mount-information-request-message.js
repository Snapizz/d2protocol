/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountInformationRequestMessage = (function (_super) {
    __extends(MountInformationRequestMessage, _super);
    function MountInformationRequestMessage() {
        this.id = 0;
        this.time = 0;
        _super.call(this);
    }
    MountInformationRequestMessage.prototype.getMessageId = function () {
        return MountInformationRequestMessage.ID;
    };
    MountInformationRequestMessage.prototype.reset = function () {
        this.id = 0;
        this.time = 0;
    };
    MountInformationRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountInformationRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountInformationRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountInformationRequestMessage(param1);
    };
    MountInformationRequestMessage.prototype.serializeAs_MountInformationRequestMessage = function (param1) {
        if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeDouble(this.id);
        if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.time + ') on element time.');
        }
        param1.writeDouble(this.time);
    };
    MountInformationRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountInformationRequestMessage(param1);
    };
    MountInformationRequestMessage.prototype.deserializeAs_MountInformationRequestMessage = function (param1) {
        this.id = param1.readDouble();
        if (this.id < -9.007199254740992E15 || this.id > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.id + ') on element of MountInformationRequestMessage.id.');
        }
        this.time = param1.readDouble();
        if (this.time < -9.007199254740992E15 || this.time > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.time + ') on element of MountInformationRequestMessage.time.');
        }
    };
    MountInformationRequestMessage.ID = 5972;
    return MountInformationRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountInformationRequestMessage;
