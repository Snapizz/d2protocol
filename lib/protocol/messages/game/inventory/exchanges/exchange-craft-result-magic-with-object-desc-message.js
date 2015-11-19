/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftResultWithObjectDescMessage = require('./exchange-craft-result-with-object-desc-message');
var ExchangeCraftResultMagicWithObjectDescMessage = (function (_super) {
    __extends(ExchangeCraftResultMagicWithObjectDescMessage, _super);
    function ExchangeCraftResultMagicWithObjectDescMessage() {
        this.magicPoolStatus = 0;
        _super.call(this);
    }
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.getMessageId = function () {
        return ExchangeCraftResultMagicWithObjectDescMessage.ID;
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.reset = function () {
        this.magicPoolStatus = 0;
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1);
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeCraftResultWithObjectDescMessage.call(this, param1);
        param1.writeByte(this.magicPoolStatus);
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1);
    };
    ExchangeCraftResultMagicWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.magicPoolStatus = param1.readByte();
    };
    ExchangeCraftResultMagicWithObjectDescMessage.ID = 6188;
    return ExchangeCraftResultMagicWithObjectDescMessage;
})(ExchangeCraftResultWithObjectDescMessage);
module.exports = ExchangeCraftResultMagicWithObjectDescMessage;
