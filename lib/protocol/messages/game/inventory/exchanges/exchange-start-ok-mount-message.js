/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkMountWithOutPaddockMessage = require('./exchange-start-ok-mount-with-out-paddock-message');
var MountClientData = require('../../../../types/game/mount/mount-client-data');
var ExchangeStartOkMountMessage = (function (_super) {
    __extends(ExchangeStartOkMountMessage, _super);
    function ExchangeStartOkMountMessage() {
        this.paddockedMountsDescription = [];
        _super.call(this);
    }
    ExchangeStartOkMountMessage.prototype.getMessageId = function () {
        return ExchangeStartOkMountMessage.ID;
    };
    ExchangeStartOkMountMessage.prototype.reset = function () {
        this.paddockedMountsDescription = [];
    };
    ExchangeStartOkMountMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkMountMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkMountMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkMountMessage(param1);
    };
    ExchangeStartOkMountMessage.prototype.serializeAs_ExchangeStartOkMountMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeStartOkMountWithOutPaddockMessage.call(this, param1);
        param1.writeShort(this.paddockedMountsDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.paddockedMountsDescription.length) {
            (this.paddockedMountsDescription[_loc2_]).serializeAs_MountClientData(param1);
            _loc2_++;
        }
    };
    ExchangeStartOkMountMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkMountMessage(param1);
    };
    ExchangeStartOkMountMessage.prototype.deserializeAs_ExchangeStartOkMountMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MountClientData();
            _loc4_.deserialize(param1);
            this.paddockedMountsDescription.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartOkMountMessage.ID = 5979;
    return ExchangeStartOkMountMessage;
})(ExchangeStartOkMountWithOutPaddockMessage);
module.exports = ExchangeStartOkMountMessage;
