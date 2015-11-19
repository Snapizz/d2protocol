/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountClientData = require('../../../../types/game/mount/mount-client-data');
var ExchangeStartOkMountWithOutPaddockMessage = (function (_super) {
    __extends(ExchangeStartOkMountWithOutPaddockMessage, _super);
    function ExchangeStartOkMountWithOutPaddockMessage() {
        this.stabledMountsDescription = [];
        _super.call(this);
    }
    ExchangeStartOkMountWithOutPaddockMessage.prototype.getMessageId = function () {
        return ExchangeStartOkMountWithOutPaddockMessage.ID;
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.reset = function () {
        this.stabledMountsDescription = [];
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.serializeAs_ExchangeStartOkMountWithOutPaddockMessage = function (param1) {
        param1.writeShort(this.stabledMountsDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.stabledMountsDescription.length) {
            (this.stabledMountsDescription[_loc2_]).serializeAs_MountClientData(param1);
            _loc2_++;
        }
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(param1);
    };
    ExchangeStartOkMountWithOutPaddockMessage.prototype.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MountClientData();
            _loc4_.deserialize(param1);
            this.stabledMountsDescription.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartOkMountWithOutPaddockMessage.ID = 5991;
    return ExchangeStartOkMountWithOutPaddockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkMountWithOutPaddockMessage;
