/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeHandleMountsStableMessage = (function (_super) {
    __extends(ExchangeHandleMountsStableMessage, _super);
    function ExchangeHandleMountsStableMessage() {
        this.actionType = 0;
        this.ridesId = [];
        _super.call(this);
    }
    ExchangeHandleMountsStableMessage.prototype.getMessageId = function () {
        return ExchangeHandleMountsStableMessage.ID;
    };
    ExchangeHandleMountsStableMessage.prototype.reset = function () {
        this.actionType = 0;
        this.ridesId = [];
    };
    ExchangeHandleMountsStableMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeHandleMountsStableMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeHandleMountsStableMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeHandleMountsStableMessage(param1);
    };
    ExchangeHandleMountsStableMessage.prototype.serializeAs_ExchangeHandleMountsStableMessage = function (param1) {
        param1.writeByte(this.actionType);
        param1.writeShort(this.ridesId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ridesId.length) {
            if (this.ridesId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.ridesId[_loc2_] + ') on element 2 (starting at 1) of ridesId.');
            }
            param1.writeVarInt(this.ridesId[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeHandleMountsStableMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeHandleMountsStableMessage(param1);
    };
    ExchangeHandleMountsStableMessage.prototype.deserializeAs_ExchangeHandleMountsStableMessage = function (param1) {
        var _loc4_ = 0;
        this.actionType = param1.readByte();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of ridesId.');
            }
            this.ridesId.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeHandleMountsStableMessage.ID = 6562;
    return ExchangeHandleMountsStableMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeHandleMountsStableMessage;
