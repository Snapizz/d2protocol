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
var ExchangeObjectModifiedInBagMessage = (function (_super) {
    __extends(ExchangeObjectModifiedInBagMessage, _super);
    function ExchangeObjectModifiedInBagMessage() {
        this.object = new ObjectItem();
        _super.call(this);
    }
    ExchangeObjectModifiedInBagMessage.prototype.getMessageId = function () {
        return ExchangeObjectModifiedInBagMessage.ID;
    };
    ExchangeObjectModifiedInBagMessage.prototype.reset = function () {
        this.object = new ObjectItem();
    };
    ExchangeObjectModifiedInBagMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectModifiedInBagMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectModifiedInBagMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectModifiedInBagMessage(param1);
    };
    ExchangeObjectModifiedInBagMessage.prototype.serializeAs_ExchangeObjectModifiedInBagMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        this.object.serializeAs_ObjectItem(param1);
    };
    ExchangeObjectModifiedInBagMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectModifiedInBagMessage(param1);
    };
    ExchangeObjectModifiedInBagMessage.prototype.deserializeAs_ExchangeObjectModifiedInBagMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.object = new ObjectItem();
        this.object.deserialize(param1);
    };
    ExchangeObjectModifiedInBagMessage.ID = 6008;
    return ExchangeObjectModifiedInBagMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectModifiedInBagMessage;
