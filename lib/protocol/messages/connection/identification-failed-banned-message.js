/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentificationFailedMessage = require('./identification-failed-message');
var IdentificationFailedBannedMessage = (function (_super) {
    __extends(IdentificationFailedBannedMessage, _super);
    function IdentificationFailedBannedMessage() {
        this.banEndDate = 0;
        _super.call(this);
    }
    IdentificationFailedBannedMessage.prototype.getMessageId = function () {
        return IdentificationFailedBannedMessage.ID;
    };
    IdentificationFailedBannedMessage.prototype.reset = function () {
        this.banEndDate = 0;
    };
    IdentificationFailedBannedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationFailedBannedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationFailedBannedMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationFailedBannedMessage(param1);
    };
    IdentificationFailedBannedMessage.prototype.serializeAs_IdentificationFailedBannedMessage = function (param1) {
        _super.prototype.serializeAs_IdentificationFailedMessage.call(this, param1);
        if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.banEndDate + ') on element banEndDate.');
        }
        param1.writeDouble(this.banEndDate);
    };
    IdentificationFailedBannedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationFailedBannedMessage(param1);
    };
    IdentificationFailedBannedMessage.prototype.deserializeAs_IdentificationFailedBannedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.banEndDate = param1.readDouble();
        if (this.banEndDate < 0 || this.banEndDate > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.banEndDate + ') on element of IdentificationFailedBannedMessage.banEndDate.');
        }
    };
    IdentificationFailedBannedMessage.ID = 6174;
    return IdentificationFailedBannedMessage;
})(IdentificationFailedMessage);
module.exports = IdentificationFailedBannedMessage;
