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
var ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container');
var ExchangeCraftResultWithObjectDescMessage = (function (_super) {
    __extends(ExchangeCraftResultWithObjectDescMessage, _super);
    function ExchangeCraftResultWithObjectDescMessage() {
        this.objectInfo = new ObjectItemNotInContainer();
        _super.call(this);
    }
    ExchangeCraftResultWithObjectDescMessage.prototype.getMessageId = function () {
        return ExchangeCraftResultWithObjectDescMessage.ID;
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.reset = function () {
        this.objectInfo = new ObjectItemNotInContainer();
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.serializeAs_ExchangeCraftResultWithObjectDescMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeCraftResultMessage.call(this, param1);
        this.objectInfo.serializeAs_ObjectItemNotInContainer(param1);
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    };
    ExchangeCraftResultWithObjectDescMessage.prototype.deserializeAs_ExchangeCraftResultWithObjectDescMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectInfo = new ObjectItemNotInContainer();
        this.objectInfo.deserialize(param1);
    };
    ExchangeCraftResultWithObjectDescMessage.ID = 5999;
    return ExchangeCraftResultWithObjectDescMessage;
})(ExchangeCraftResultMessage);
module.exports = ExchangeCraftResultWithObjectDescMessage;
