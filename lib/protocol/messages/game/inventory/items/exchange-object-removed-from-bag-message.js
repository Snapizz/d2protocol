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
var ExchangeObjectRemovedFromBagMessage = (function (_super) {
    __extends(ExchangeObjectRemovedFromBagMessage, _super);
    function ExchangeObjectRemovedFromBagMessage() {
        this.objectUID = 0;
        _super.call(this);
    }
    ExchangeObjectRemovedFromBagMessage.prototype.getMessageId = function () {
        return ExchangeObjectRemovedFromBagMessage.ID;
    };
    ExchangeObjectRemovedFromBagMessage.prototype.reset = function () {
        this.objectUID = 0;
    };
    ExchangeObjectRemovedFromBagMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectRemovedFromBagMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectRemovedFromBagMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectRemovedFromBagMessage(param1);
    };
    ExchangeObjectRemovedFromBagMessage.prototype.serializeAs_ExchangeObjectRemovedFromBagMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMessage.call(this, param1);
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
    };
    ExchangeObjectRemovedFromBagMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectRemovedFromBagMessage(param1);
    };
    ExchangeObjectRemovedFromBagMessage.prototype.deserializeAs_ExchangeObjectRemovedFromBagMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ExchangeObjectRemovedFromBagMessage.objectUID.');
        }
    };
    ExchangeObjectRemovedFromBagMessage.ID = 6010;
    return ExchangeObjectRemovedFromBagMessage;
})(ExchangeObjectMessage);
module.exports = ExchangeObjectRemovedFromBagMessage;
