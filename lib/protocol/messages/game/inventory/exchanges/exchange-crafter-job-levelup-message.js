/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCrafterJobLevelupMessage = (function (_super) {
    __extends(ExchangeCrafterJobLevelupMessage, _super);
    function ExchangeCrafterJobLevelupMessage() {
        this.crafterJobLevel = 0;
        _super.call(this);
    }
    ExchangeCrafterJobLevelupMessage.prototype.getMessageId = function () {
        return ExchangeCrafterJobLevelupMessage.ID;
    };
    ExchangeCrafterJobLevelupMessage.prototype.reset = function () {
        this.crafterJobLevel = 0;
    };
    ExchangeCrafterJobLevelupMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCrafterJobLevelupMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCrafterJobLevelupMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCrafterJobLevelupMessage(param1);
    };
    ExchangeCrafterJobLevelupMessage.prototype.serializeAs_ExchangeCrafterJobLevelupMessage = function (param1) {
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element crafterJobLevel.');
        }
        param1.writeByte(this.crafterJobLevel);
    };
    ExchangeCrafterJobLevelupMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCrafterJobLevelupMessage(param1);
    };
    ExchangeCrafterJobLevelupMessage.prototype.deserializeAs_ExchangeCrafterJobLevelupMessage = function (param1) {
        this.crafterJobLevel = param1.readUnsignedByte();
        if (this.crafterJobLevel < 0 || this.crafterJobLevel > 255) {
            throw new Error('Forbidden value (' + this.crafterJobLevel + ') on element of ExchangeCrafterJobLevelupMessage.crafterJobLevel.');
        }
    };
    ExchangeCrafterJobLevelupMessage.ID = 6598;
    return ExchangeCrafterJobLevelupMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCrafterJobLevelupMessage;
