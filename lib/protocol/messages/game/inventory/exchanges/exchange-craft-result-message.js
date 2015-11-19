/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftResultMessage = (function (_super) {
    __extends(ExchangeCraftResultMessage, _super);
    function ExchangeCraftResultMessage() {
        this.craftResult = 0;
        _super.call(this);
    }
    ExchangeCraftResultMessage.prototype.getMessageId = function () {
        return ExchangeCraftResultMessage.ID;
    };
    ExchangeCraftResultMessage.prototype.reset = function () {
        this.craftResult = 0;
    };
    ExchangeCraftResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftResultMessage(param1);
    };
    ExchangeCraftResultMessage.prototype.serializeAs_ExchangeCraftResultMessage = function (param1) {
        param1.writeByte(this.craftResult);
    };
    ExchangeCraftResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftResultMessage(param1);
    };
    ExchangeCraftResultMessage.prototype.deserializeAs_ExchangeCraftResultMessage = function (param1) {
        this.craftResult = param1.readByte();
        if (this.craftResult < 0) {
            throw new Error('Forbidden value (' + this.craftResult + ') on element of ExchangeCraftResultMessage.craftResult.');
        }
    };
    ExchangeCraftResultMessage.ID = 5790;
    return ExchangeCraftResultMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCraftResultMessage;
