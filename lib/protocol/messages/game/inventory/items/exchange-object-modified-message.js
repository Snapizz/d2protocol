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
var ObjectItem = require('../../../../types/game/data/items/object-item');
var ExchangeObjectModifiedMessage = (function (_super) {
    __extends(ExchangeObjectModifiedMessage, _super);
    function ExchangeObjectModifiedMessage() {
        this.object = new ObjectItem();
        _super.call(this);
    }
    ExchangeObjectModifiedMessage.prototype.getMessageId = function () {
        return ExchangeObjectModifiedMessage.ID;
    };
    ExchangeObjectModifiedMessage.prototype.reset = function () {
        this.object = new ObjectItem();
    };
    ExchangeObjectModifiedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectModifiedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectModifiedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectModifiedMessage(param1);
    };
    ExchangeObjectModifiedMessage.prototype.serializeAs_ExchangeObjectModifiedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        this.object.serializeAs_ObjectItem(param1);
    };
    ExchangeObjectModifiedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectModifiedMessage(param1);
    };
    ExchangeObjectModifiedMessage.prototype.deserializeAs_ExchangeObjectModifiedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.object = new ObjectItem();
        this.object.deserialize(param1);
    };
    ExchangeObjectModifiedMessage.ID = 5519;
    return ExchangeObjectModifiedMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectModifiedMessage;
