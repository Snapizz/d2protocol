/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NumericWhoIsRequestMessage = (function (_super) {
    __extends(NumericWhoIsRequestMessage, _super);
    function NumericWhoIsRequestMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    NumericWhoIsRequestMessage.prototype.getMessageId = function () {
        return NumericWhoIsRequestMessage.ID;
    };
    NumericWhoIsRequestMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    NumericWhoIsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NumericWhoIsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NumericWhoIsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_NumericWhoIsRequestMessage(param1);
    };
    NumericWhoIsRequestMessage.prototype.serializeAs_NumericWhoIsRequestMessage = function (param1) {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    NumericWhoIsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NumericWhoIsRequestMessage(param1);
    };
    NumericWhoIsRequestMessage.prototype.deserializeAs_NumericWhoIsRequestMessage = function (param1) {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of NumericWhoIsRequestMessage.playerId.');
        }
    };
    NumericWhoIsRequestMessage.ID = 6298;
    return NumericWhoIsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = NumericWhoIsRequestMessage;
