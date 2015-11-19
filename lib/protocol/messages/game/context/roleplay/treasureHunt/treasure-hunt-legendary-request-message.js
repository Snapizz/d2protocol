/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntLegendaryRequestMessage = (function (_super) {
    __extends(TreasureHuntLegendaryRequestMessage, _super);
    function TreasureHuntLegendaryRequestMessage() {
        this.legendaryId = 0;
        _super.call(this);
    }
    TreasureHuntLegendaryRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntLegendaryRequestMessage.ID;
    };
    TreasureHuntLegendaryRequestMessage.prototype.reset = function () {
        this.legendaryId = 0;
    };
    TreasureHuntLegendaryRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntLegendaryRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntLegendaryRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntLegendaryRequestMessage(param1);
    };
    TreasureHuntLegendaryRequestMessage.prototype.serializeAs_TreasureHuntLegendaryRequestMessage = function (param1) {
        if (this.legendaryId < 0) {
            throw new Error('Forbidden value (' + this.legendaryId + ') on element legendaryId.');
        }
        param1.writeVarShort(this.legendaryId);
    };
    TreasureHuntLegendaryRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntLegendaryRequestMessage(param1);
    };
    TreasureHuntLegendaryRequestMessage.prototype.deserializeAs_TreasureHuntLegendaryRequestMessage = function (param1) {
        this.legendaryId = param1.readVarUhShort();
        if (this.legendaryId < 0) {
            throw new Error('Forbidden value (' + this.legendaryId + ') on element of TreasureHuntLegendaryRequestMessage.legendaryId.');
        }
    };
    TreasureHuntLegendaryRequestMessage.ID = 6499;
    return TreasureHuntLegendaryRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntLegendaryRequestMessage;
