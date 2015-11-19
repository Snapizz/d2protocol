/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IgnoredDeleteRequestMessage = (function (_super) {
    __extends(IgnoredDeleteRequestMessage, _super);
    function IgnoredDeleteRequestMessage() {
        this.accountId = 0;
        this.session = false;
        _super.call(this);
    }
    IgnoredDeleteRequestMessage.prototype.getMessageId = function () {
        return IgnoredDeleteRequestMessage.ID;
    };
    IgnoredDeleteRequestMessage.prototype.reset = function () {
        this.accountId = 0;
        this.session = false;
    };
    IgnoredDeleteRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredDeleteRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredDeleteRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredDeleteRequestMessage(param1);
    };
    IgnoredDeleteRequestMessage.prototype.serializeAs_IgnoredDeleteRequestMessage = function (param1) {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        param1.writeBoolean(this.session);
    };
    IgnoredDeleteRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredDeleteRequestMessage(param1);
    };
    IgnoredDeleteRequestMessage.prototype.deserializeAs_IgnoredDeleteRequestMessage = function (param1) {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of IgnoredDeleteRequestMessage.accountId.');
        }
        this.session = param1.readBoolean();
    };
    IgnoredDeleteRequestMessage.ID = 5680;
    return IgnoredDeleteRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredDeleteRequestMessage;
