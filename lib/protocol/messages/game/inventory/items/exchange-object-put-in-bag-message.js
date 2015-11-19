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
var ExchangeObjectPutInBagMessage = (function (_super) {
    __extends(ExchangeObjectPutInBagMessage, _super);
    function ExchangeObjectPutInBagMessage() {
        this.object = new ObjectItem();
        _super.call(this);
    }
    ExchangeObjectPutInBagMessage.prototype.getMessageId = function () {
        return ExchangeObjectPutInBagMessage.ID;
    };
    ExchangeObjectPutInBagMessage.prototype.reset = function () {
        this.object = new ObjectItem();
    };
    ExchangeObjectPutInBagMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectPutInBagMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectPutInBagMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectPutInBagMessage(param1);
    };
    ExchangeObjectPutInBagMessage.prototype.serializeAs_ExchangeObjectPutInBagMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        this.object.serializeAs_ObjectItem(param1);
    };
    ExchangeObjectPutInBagMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectPutInBagMessage(param1);
    };
    ExchangeObjectPutInBagMessage.prototype.deserializeAs_ExchangeObjectPutInBagMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.object = new ObjectItem();
        this.object.deserialize(param1);
    };
    ExchangeObjectPutInBagMessage.ID = 6009;
    return ExchangeObjectPutInBagMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectPutInBagMessage;
