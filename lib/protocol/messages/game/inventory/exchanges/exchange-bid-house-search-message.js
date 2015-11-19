/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseSearchMessage = (function (_super) {
    __extends(ExchangeBidHouseSearchMessage, _super);
    function ExchangeBidHouseSearchMessage() {
        this.type = 0;
        this.genId = 0;
        _super.call(this);
    }
    ExchangeBidHouseSearchMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseSearchMessage.ID;
    };
    ExchangeBidHouseSearchMessage.prototype.reset = function () {
        this.type = 0;
        this.genId = 0;
    };
    ExchangeBidHouseSearchMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseSearchMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseSearchMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseSearchMessage(param1);
    };
    ExchangeBidHouseSearchMessage.prototype.serializeAs_ExchangeBidHouseSearchMessage = function (param1) {
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element type.');
        }
        param1.writeVarInt(this.type);
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element genId.');
        }
        param1.writeVarShort(this.genId);
    };
    ExchangeBidHouseSearchMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseSearchMessage(param1);
    };
    ExchangeBidHouseSearchMessage.prototype.deserializeAs_ExchangeBidHouseSearchMessage = function (param1) {
        this.type = param1.readVarUhInt();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ExchangeBidHouseSearchMessage.type.');
        }
        this.genId = param1.readVarUhShort();
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element of ExchangeBidHouseSearchMessage.genId.');
        }
    };
    ExchangeBidHouseSearchMessage.ID = 5806;
    return ExchangeBidHouseSearchMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseSearchMessage;
