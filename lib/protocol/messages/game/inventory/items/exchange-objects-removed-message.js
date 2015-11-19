/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMessage = require('../exchanges/exchange-object-message');
var ExchangeObjectsRemovedMessage = (function (_super) {
    __extends(ExchangeObjectsRemovedMessage, _super);
    function ExchangeObjectsRemovedMessage() {
        this.objectUID = [];
        _super.call(this);
    }
    ExchangeObjectsRemovedMessage.prototype.getMessageId = function () {
        return ExchangeObjectsRemovedMessage.ID;
    };
    ExchangeObjectsRemovedMessage.prototype.reset = function () {
        this.objectUID = [];
    };
    ExchangeObjectsRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectsRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectsRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectsRemovedMessage(param1);
    };
    ExchangeObjectsRemovedMessage.prototype.serializeAs_ExchangeObjectsRemovedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        param1.writeShort(this.objectUID.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectUID.length) {
            if (this.objectUID[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objectUID[_loc2_] + ') on element 1 (starting at 1) of objectUID.');
            }
            param1.writeVarInt(this.objectUID[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeObjectsRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectsRemovedMessage(param1);
    };
    ExchangeObjectsRemovedMessage.prototype.deserializeAs_ExchangeObjectsRemovedMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objectUID.');
            }
            this.objectUID.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeObjectsRemovedMessage.ID = 6532;
    return ExchangeObjectsRemovedMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectsRemovedMessage;
