/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightStateUpdateMessage = (function (_super) {
    __extends(PrismFightStateUpdateMessage, _super);
    function PrismFightStateUpdateMessage() {
        this.state = 0;
        _super.call(this);
    }
    PrismFightStateUpdateMessage.prototype.getMessageId = function () {
        return PrismFightStateUpdateMessage.ID;
    };
    PrismFightStateUpdateMessage.prototype.reset = function () {
        this.state = 0;
    };
    PrismFightStateUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightStateUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightStateUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightStateUpdateMessage(param1);
    };
    PrismFightStateUpdateMessage.prototype.serializeAs_PrismFightStateUpdateMessage = function (param1) {
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element state.');
        }
        param1.writeByte(this.state);
    };
    PrismFightStateUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightStateUpdateMessage(param1);
    };
    PrismFightStateUpdateMessage.prototype.deserializeAs_PrismFightStateUpdateMessage = function (param1) {
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of PrismFightStateUpdateMessage.state.');
        }
    };
    PrismFightStateUpdateMessage.ID = 6040;
    return PrismFightStateUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightStateUpdateMessage;
