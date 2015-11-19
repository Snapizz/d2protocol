/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftResultWithObjectIdMessage = require('./exchange-craft-result-with-object-id-message');
var ExchangeCraftInformationObjectMessage = (function (_super) {
    __extends(ExchangeCraftInformationObjectMessage, _super);
    function ExchangeCraftInformationObjectMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    ExchangeCraftInformationObjectMessage.prototype.getMessageId = function () {
        return ExchangeCraftInformationObjectMessage.ID;
    };
    ExchangeCraftInformationObjectMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    ExchangeCraftInformationObjectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftInformationObjectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftInformationObjectMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftInformationObjectMessage(param1);
    };
    ExchangeCraftInformationObjectMessage.prototype.serializeAs_ExchangeCraftInformationObjectMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeCraftResultWithObjectIdMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    ExchangeCraftInformationObjectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftInformationObjectMessage(param1);
    };
    ExchangeCraftInformationObjectMessage.prototype.deserializeAs_ExchangeCraftInformationObjectMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ExchangeCraftInformationObjectMessage.playerId.');
        }
    };
    ExchangeCraftInformationObjectMessage.ID = 5794;
    return ExchangeCraftInformationObjectMessage;
})(ExchangeCraftResultWithObjectIdMessage);
module.exports = ExchangeCraftInformationObjectMessage;
