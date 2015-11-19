/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBuyMessage = (function (_super) {
    __extends(ExchangeBuyMessage, _super);
    function ExchangeBuyMessage() {
        this.objectToBuyId = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeBuyMessage.prototype.getMessageId = function () {
        return ExchangeBuyMessage.ID;
    };
    ExchangeBuyMessage.prototype.reset = function () {
        this.objectToBuyId = 0;
        this.quantity = 0;
    };
    ExchangeBuyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBuyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBuyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBuyMessage(param1);
    };
    ExchangeBuyMessage.prototype.serializeAs_ExchangeBuyMessage = function (param1) {
        if (this.objectToBuyId < 0) {
            throw new Error('Forbidden value (' + this.objectToBuyId + ') on element objectToBuyId.');
        }
        param1.writeVarInt(this.objectToBuyId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);
    };
    ExchangeBuyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBuyMessage(param1);
    };
    ExchangeBuyMessage.prototype.deserializeAs_ExchangeBuyMessage = function (param1) {
        this.objectToBuyId = param1.readVarUhInt();
        if (this.objectToBuyId < 0) {
            throw new Error('Forbidden value (' + this.objectToBuyId + ') on element of ExchangeBuyMessage.objectToBuyId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeBuyMessage.quantity.');
        }
    };
    ExchangeBuyMessage.ID = 5774;
    return ExchangeBuyMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBuyMessage;
