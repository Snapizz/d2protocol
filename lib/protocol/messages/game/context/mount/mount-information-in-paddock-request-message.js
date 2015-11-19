/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountInformationInPaddockRequestMessage = (function (_super) {
    __extends(MountInformationInPaddockRequestMessage, _super);
    function MountInformationInPaddockRequestMessage() {
        this.mapRideId = 0;
        _super.call(this);
    }
    MountInformationInPaddockRequestMessage.prototype.getMessageId = function () {
        return MountInformationInPaddockRequestMessage.ID;
    };
    MountInformationInPaddockRequestMessage.prototype.reset = function () {
        this.mapRideId = 0;
    };
    MountInformationInPaddockRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountInformationInPaddockRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountInformationInPaddockRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountInformationInPaddockRequestMessage(param1);
    };
    MountInformationInPaddockRequestMessage.prototype.serializeAs_MountInformationInPaddockRequestMessage = function (param1) {
        param1.writeVarInt(this.mapRideId);
    };
    MountInformationInPaddockRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountInformationInPaddockRequestMessage(param1);
    };
    MountInformationInPaddockRequestMessage.prototype.deserializeAs_MountInformationInPaddockRequestMessage = function (param1) {
        this.mapRideId = param1.readVarInt();
    };
    MountInformationInPaddockRequestMessage.ID = 5975;
    return MountInformationInPaddockRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountInformationInPaddockRequestMessage;
