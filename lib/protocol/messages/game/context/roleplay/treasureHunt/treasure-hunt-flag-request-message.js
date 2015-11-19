/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntFlagRequestMessage = (function (_super) {
    __extends(TreasureHuntFlagRequestMessage, _super);
    function TreasureHuntFlagRequestMessage() {
        this.questType = 0;
        this.index = 0;
        _super.call(this);
    }
    TreasureHuntFlagRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntFlagRequestMessage.ID;
    };
    TreasureHuntFlagRequestMessage.prototype.reset = function () {
        this.questType = 0;
        this.index = 0;
    };
    TreasureHuntFlagRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntFlagRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntFlagRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntFlagRequestMessage(param1);
    };
    TreasureHuntFlagRequestMessage.prototype.serializeAs_TreasureHuntFlagRequestMessage = function (param1) {
        param1.writeByte(this.questType);
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeByte(this.index);
    };
    TreasureHuntFlagRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntFlagRequestMessage(param1);
    };
    TreasureHuntFlagRequestMessage.prototype.deserializeAs_TreasureHuntFlagRequestMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntFlagRequestMessage.questType.');
        }
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of TreasureHuntFlagRequestMessage.index.');
        }
    };
    TreasureHuntFlagRequestMessage.ID = 6508;
    return TreasureHuntFlagRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntFlagRequestMessage;
