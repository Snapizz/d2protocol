/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceFactsRequestMessage = (function (_super) {
    __extends(AllianceFactsRequestMessage, _super);
    function AllianceFactsRequestMessage() {
        this.allianceId = 0;
        _super.call(this);
    }
    AllianceFactsRequestMessage.prototype.getMessageId = function () {
        return AllianceFactsRequestMessage.ID;
    };
    AllianceFactsRequestMessage.prototype.reset = function () {
        this.allianceId = 0;
    };
    AllianceFactsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceFactsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceFactsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceFactsRequestMessage(param1);
    };
    AllianceFactsRequestMessage.prototype.serializeAs_AllianceFactsRequestMessage = function (param1) {
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
    };
    AllianceFactsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceFactsRequestMessage(param1);
    };
    AllianceFactsRequestMessage.prototype.deserializeAs_AllianceFactsRequestMessage = function (param1) {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceFactsRequestMessage.allianceId.');
        }
    };
    AllianceFactsRequestMessage.ID = 6409;
    return AllianceFactsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceFactsRequestMessage;
