/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntRequestAnswerMessage = (function (_super) {
    __extends(TreasureHuntRequestAnswerMessage, _super);
    function TreasureHuntRequestAnswerMessage() {
        this.questType = 0;
        this.result = 0;
        _super.call(this);
    }
    TreasureHuntRequestAnswerMessage.prototype.getMessageId = function () {
        return TreasureHuntRequestAnswerMessage.ID;
    };
    TreasureHuntRequestAnswerMessage.prototype.reset = function () {
        this.questType = 0;
        this.result = 0;
    };
    TreasureHuntRequestAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntRequestAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntRequestAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntRequestAnswerMessage(param1);
    };
    TreasureHuntRequestAnswerMessage.prototype.serializeAs_TreasureHuntRequestAnswerMessage = function (param1) {
        param1.writeByte(this.questType);
        param1.writeByte(this.result);
    };
    TreasureHuntRequestAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntRequestAnswerMessage(param1);
    };
    TreasureHuntRequestAnswerMessage.prototype.deserializeAs_TreasureHuntRequestAnswerMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntRequestAnswerMessage.questType.');
        }
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of TreasureHuntRequestAnswerMessage.result.');
        }
    };
    TreasureHuntRequestAnswerMessage.ID = 6489;
    return TreasureHuntRequestAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntRequestAnswerMessage;
