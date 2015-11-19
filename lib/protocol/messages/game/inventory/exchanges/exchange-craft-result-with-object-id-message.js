/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftResultMessage = require('./exchange-craft-result-message');
var ExchangeCraftResultWithObjectIdMessage = (function (_super) {
    __extends(ExchangeCraftResultWithObjectIdMessage, _super);
    function ExchangeCraftResultWithObjectIdMessage() {
        this.objectGenericId = 0;
        _super.call(this);
    }
    ExchangeCraftResultWithObjectIdMessage.prototype.getMessageId = function () {
        return ExchangeCraftResultWithObjectIdMessage.ID;
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.reset = function () {
        this.objectGenericId = 0;
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.serializeAs_ExchangeCraftResultWithObjectIdMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeCraftResultMessage.call(this, param1);
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element objectGenericId.');
        }
        param1.writeVarShort(this.objectGenericId);
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    };
    ExchangeCraftResultWithObjectIdMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectIdMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectGenericId = param1.readVarUhShort();
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.');
        }
    };
    ExchangeCraftResultWithObjectIdMessage.ID = 6000;
    return ExchangeCraftResultWithObjectIdMessage;
})(ExchangeCraftResultMessage);
module.exports = ExchangeCraftResultWithObjectIdMessage;
