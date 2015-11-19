/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMountsStableRemoveMessage = (function (_super) {
    __extends(ExchangeMountsStableRemoveMessage, _super);
    function ExchangeMountsStableRemoveMessage() {
        this.mountsId = [];
        _super.call(this);
    }
    ExchangeMountsStableRemoveMessage.prototype.getMessageId = function () {
        return ExchangeMountsStableRemoveMessage.ID;
    };
    ExchangeMountsStableRemoveMessage.prototype.reset = function () {
        this.mountsId = [];
    };
    ExchangeMountsStableRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountsStableRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountsStableRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountsStableRemoveMessage(param1);
    };
    ExchangeMountsStableRemoveMessage.prototype.serializeAs_ExchangeMountsStableRemoveMessage = function (param1) {
        param1.writeShort(this.mountsId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.mountsId.length) {
            param1.writeVarInt(this.mountsId[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeMountsStableRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountsStableRemoveMessage(param1);
    };
    ExchangeMountsStableRemoveMessage.prototype.deserializeAs_ExchangeMountsStableRemoveMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarInt();
            this.mountsId.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeMountsStableRemoveMessage.ID = 6556;
    return ExchangeMountsStableRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMountsStableRemoveMessage;
