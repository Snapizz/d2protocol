/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntRequestMessage = (function (_super) {
    __extends(TreasureHuntRequestMessage, _super);
    function TreasureHuntRequestMessage() {
        this.questLevel = 0;
        this.questType = 0;
        _super.call(this);
    }
    TreasureHuntRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntRequestMessage.ID;
    };
    TreasureHuntRequestMessage.prototype.reset = function () {
        this.questLevel = 0;
        this.questType = 0;
    };
    TreasureHuntRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntRequestMessage(param1);
    };
    TreasureHuntRequestMessage.prototype.serializeAs_TreasureHuntRequestMessage = function (param1) {
        if (this.questLevel < 1 || this.questLevel > 200) {
            throw new Error('Forbidden value (' + this.questLevel + ') on element questLevel.');
        }
        param1.writeByte(this.questLevel);
        param1.writeByte(this.questType);
    };
    TreasureHuntRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntRequestMessage(param1);
    };
    TreasureHuntRequestMessage.prototype.deserializeAs_TreasureHuntRequestMessage = function (param1) {
        this.questLevel = param1.readUnsignedByte();
        if (this.questLevel < 1 || this.questLevel > 200) {
            throw new Error('Forbidden value (' + this.questLevel + ') on element of TreasureHuntRequestMessage.questLevel.');
        }
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntRequestMessage.questType.');
        }
    };
    TreasureHuntRequestMessage.ID = 6488;
    return TreasureHuntRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntRequestMessage;
