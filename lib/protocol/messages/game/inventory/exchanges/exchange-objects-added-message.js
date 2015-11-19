/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMessage = require('./exchange-object-message');
var ObjectItem = require('../../../../types/game/data/items/object-item');
var ExchangeObjectsAddedMessage = (function (_super) {
    __extends(ExchangeObjectsAddedMessage, _super);
    function ExchangeObjectsAddedMessage() {
        this.object = [];
        _super.call(this);
    }
    ExchangeObjectsAddedMessage.prototype.getMessageId = function () {
        return ExchangeObjectsAddedMessage.ID;
    };
    ExchangeObjectsAddedMessage.prototype.reset = function () {
        this.object = [];
    };
    ExchangeObjectsAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectsAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectsAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectsAddedMessage(param1);
    };
    ExchangeObjectsAddedMessage.prototype.serializeAs_ExchangeObjectsAddedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        param1.writeShort(this.object.length);
        var _loc2_ = 0;
        while (_loc2_ < this.object.length) {
            (this.object[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    ExchangeObjectsAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectsAddedMessage(param1);
    };
    ExchangeObjectsAddedMessage.prototype.deserializeAs_ExchangeObjectsAddedMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.object.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeObjectsAddedMessage.ID = 6535;
    return ExchangeObjectsAddedMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectsAddedMessage;
