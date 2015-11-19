/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DisplayNumericalValuePaddockMessage = (function (_super) {
    __extends(DisplayNumericalValuePaddockMessage, _super);
    function DisplayNumericalValuePaddockMessage() {
        this.rideId = 0;
        this.value = 0;
        this.type = 0;
        _super.call(this);
    }
    DisplayNumericalValuePaddockMessage.prototype.getMessageId = function () {
        return DisplayNumericalValuePaddockMessage.ID;
    };
    DisplayNumericalValuePaddockMessage.prototype.reset = function () {
        this.rideId = 0;
        this.value = 0;
        this.type = 0;
    };
    DisplayNumericalValuePaddockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DisplayNumericalValuePaddockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DisplayNumericalValuePaddockMessage.prototype.serialize = function (param1) {
        this.serializeAs_DisplayNumericalValuePaddockMessage(param1);
    };
    DisplayNumericalValuePaddockMessage.prototype.serializeAs_DisplayNumericalValuePaddockMessage = function (param1) {
        param1.writeInt(this.rideId);
        param1.writeInt(this.value);
        param1.writeByte(this.type);
    };
    DisplayNumericalValuePaddockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DisplayNumericalValuePaddockMessage(param1);
    };
    DisplayNumericalValuePaddockMessage.prototype.deserializeAs_DisplayNumericalValuePaddockMessage = function (param1) {
        this.rideId = param1.readInt();
        this.value = param1.readInt();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of DisplayNumericalValuePaddockMessage.type.');
        }
    };
    DisplayNumericalValuePaddockMessage.ID = 6563;
    return DisplayNumericalValuePaddockMessage;
})(network_message_1.NetworkMessage);
module.exports = DisplayNumericalValuePaddockMessage;
