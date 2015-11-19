/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntAvailableRetryCountUpdateMessage = (function (_super) {
    __extends(TreasureHuntAvailableRetryCountUpdateMessage, _super);
    function TreasureHuntAvailableRetryCountUpdateMessage() {
        this.questType = 0;
        this.availableRetryCount = 0;
        _super.call(this);
    }
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.getMessageId = function () {
        return TreasureHuntAvailableRetryCountUpdateMessage.ID;
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.reset = function () {
        this.questType = 0;
        this.availableRetryCount = 0;
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntAvailableRetryCountUpdateMessage(param1);
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.serializeAs_TreasureHuntAvailableRetryCountUpdateMessage = function (param1) {
        param1.writeByte(this.questType);
        param1.writeInt(this.availableRetryCount);
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage(param1);
    };
    TreasureHuntAvailableRetryCountUpdateMessage.prototype.deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntAvailableRetryCountUpdateMessage.questType.');
        }
        this.availableRetryCount = param1.readInt();
    };
    TreasureHuntAvailableRetryCountUpdateMessage.ID = 6491;
    return TreasureHuntAvailableRetryCountUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntAvailableRetryCountUpdateMessage;
