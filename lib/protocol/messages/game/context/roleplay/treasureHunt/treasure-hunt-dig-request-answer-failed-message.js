/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntDigRequestAnswerMessage = require('./treasure-hunt-dig-request-answer-message');
var TreasureHuntDigRequestAnswerFailedMessage = (function (_super) {
    __extends(TreasureHuntDigRequestAnswerFailedMessage, _super);
    function TreasureHuntDigRequestAnswerFailedMessage() {
        this.wrongFlagCount = 0;
        _super.call(this);
    }
    TreasureHuntDigRequestAnswerFailedMessage.prototype.getMessageId = function () {
        return TreasureHuntDigRequestAnswerFailedMessage.ID;
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.reset = function () {
        this.wrongFlagCount = 0;
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1);
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerFailedMessage = function (param1) {
        _super.prototype.serializeAs_TreasureHuntDigRequestAnswerMessage.call(this, param1);
        if (this.wrongFlagCount < 0) {
            throw new Error('Forbidden value (' + this.wrongFlagCount + ') on element wrongFlagCount.');
        }
        param1.writeByte(this.wrongFlagCount);
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(param1);
    };
    TreasureHuntDigRequestAnswerFailedMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.wrongFlagCount = param1.readByte();
        if (this.wrongFlagCount < 0) {
            throw new Error('Forbidden value (' + this.wrongFlagCount + ') on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.');
        }
    };
    TreasureHuntDigRequestAnswerFailedMessage.ID = 6509;
    return TreasureHuntDigRequestAnswerFailedMessage;
})(TreasureHuntDigRequestAnswerMessage);
module.exports = TreasureHuntDigRequestAnswerFailedMessage;
