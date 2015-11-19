/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BooleanByteWrapper = require('../../boolean-byte-wrapper');
var TrustStatusMessage = (function (_super) {
    __extends(TrustStatusMessage, _super);
    function TrustStatusMessage() {
        this.trusted = false;
        this.certified = false;
        _super.call(this);
    }
    TrustStatusMessage.prototype.getMessageId = function () {
        return TrustStatusMessage.ID;
    };
    TrustStatusMessage.prototype.reset = function () {
        this.trusted = false;
        this.certified = false;
    };
    TrustStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TrustStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TrustStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_TrustStatusMessage(param1);
    };
    TrustStatusMessage.prototype.serializeAs_TrustStatusMessage = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.trusted);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.certified);
        param1.writeByte(_loc2_);
    };
    TrustStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TrustStatusMessage(param1);
    };
    TrustStatusMessage.prototype.deserializeAs_TrustStatusMessage = function (param1) {
        var _loc2_ = param1.readByte();
        this.trusted = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.certified = BooleanByteWrapper.getFlag(_loc2_, 1);
    };
    TrustStatusMessage.ID = 6267;
    return TrustStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = TrustStatusMessage;
