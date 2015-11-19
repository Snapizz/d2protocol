/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceFactsErrorMessage = (function (_super) {
    __extends(AllianceFactsErrorMessage, _super);
    function AllianceFactsErrorMessage() {
        this.allianceId = 0;
        _super.call(this);
    }
    AllianceFactsErrorMessage.prototype.getMessageId = function () {
        return AllianceFactsErrorMessage.ID;
    };
    AllianceFactsErrorMessage.prototype.reset = function () {
        this.allianceId = 0;
    };
    AllianceFactsErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceFactsErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceFactsErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceFactsErrorMessage(param1);
    };
    AllianceFactsErrorMessage.prototype.serializeAs_AllianceFactsErrorMessage = function (param1) {
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
    };
    AllianceFactsErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceFactsErrorMessage(param1);
    };
    AllianceFactsErrorMessage.prototype.deserializeAs_AllianceFactsErrorMessage = function (param1) {
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of AllianceFactsErrorMessage.allianceId.');
        }
    };
    AllianceFactsErrorMessage.ID = 6423;
    return AllianceFactsErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceFactsErrorMessage;
