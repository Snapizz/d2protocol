/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntDigRequestAnswerMessage = (function (_super) {
    __extends(TreasureHuntDigRequestAnswerMessage, _super);
    function TreasureHuntDigRequestAnswerMessage() {
        this.questType = 0;
        this.result = 0;
        _super.call(this);
    }
    TreasureHuntDigRequestAnswerMessage.prototype.getMessageId = function () {
        return TreasureHuntDigRequestAnswerMessage.ID;
    };
    TreasureHuntDigRequestAnswerMessage.prototype.reset = function () {
        this.questType = 0;
        this.result = 0;
    };
    TreasureHuntDigRequestAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntDigRequestAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntDigRequestAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntDigRequestAnswerMessage(param1);
    };
    TreasureHuntDigRequestAnswerMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerMessage = function (param1) {
        param1.writeByte(this.questType);
        param1.writeByte(this.result);
    };
    TreasureHuntDigRequestAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntDigRequestAnswerMessage(param1);
    };
    TreasureHuntDigRequestAnswerMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntDigRequestAnswerMessage.questType.');
        }
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of TreasureHuntDigRequestAnswerMessage.result.');
        }
    };
    TreasureHuntDigRequestAnswerMessage.ID = 6484;
    return TreasureHuntDigRequestAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntDigRequestAnswerMessage;
