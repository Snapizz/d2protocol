/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeTypesExchangerDescriptionForUserMessage = (function (_super) {
    __extends(ExchangeTypesExchangerDescriptionForUserMessage, _super);
    function ExchangeTypesExchangerDescriptionForUserMessage() {
        this.typeDescription = [];
        _super.call(this);
    }
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.getMessageId = function () {
        return ExchangeTypesExchangerDescriptionForUserMessage.ID;
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.reset = function () {
        this.typeDescription = [];
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage(param1);
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.serializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function (param1) {
        param1.writeShort(this.typeDescription.length);
        var _loc2_ = 0;
        while (_loc2_ < this.typeDescription.length) {
            if (this.typeDescription[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.typeDescription[_loc2_] + ') on element 1 (starting at 1) of typeDescription.');
            }
            param1.writeVarInt(this.typeDescription[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage(param1);
    };
    ExchangeTypesExchangerDescriptionForUserMessage.prototype.deserializeAs_ExchangeTypesExchangerDescriptionForUserMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of typeDescription.');
            }
            this.typeDescription.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeTypesExchangerDescriptionForUserMessage.ID = 5765;
    return ExchangeTypesExchangerDescriptionForUserMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeTypesExchangerDescriptionForUserMessage;
