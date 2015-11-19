/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuestLimitationMessage = (function (_super) {
    __extends(GuestLimitationMessage, _super);
    function GuestLimitationMessage() {
        this.reason = 0;
        _super.call(this);
    }
    GuestLimitationMessage.prototype.getMessageId = function () {
        return GuestLimitationMessage.ID;
    };
    GuestLimitationMessage.prototype.reset = function () {
        this.reason = 0;
    };
    GuestLimitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuestLimitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuestLimitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuestLimitationMessage(param1);
    };
    GuestLimitationMessage.prototype.serializeAs_GuestLimitationMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    GuestLimitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuestLimitationMessage(param1);
    };
    GuestLimitationMessage.prototype.deserializeAs_GuestLimitationMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of GuestLimitationMessage.reason.');
        }
    };
    GuestLimitationMessage.ID = 6506;
    return GuestLimitationMessage;
})(network_message_1.NetworkMessage);
module.exports = GuestLimitationMessage;
