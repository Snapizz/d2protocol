/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntFinishedMessage = (function (_super) {
    __extends(TreasureHuntFinishedMessage, _super);
    function TreasureHuntFinishedMessage() {
        this.questType = 0;
        _super.call(this);
    }
    TreasureHuntFinishedMessage.prototype.getMessageId = function () {
        return TreasureHuntFinishedMessage.ID;
    };
    TreasureHuntFinishedMessage.prototype.reset = function () {
        this.questType = 0;
    };
    TreasureHuntFinishedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntFinishedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntFinishedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntFinishedMessage(param1);
    };
    TreasureHuntFinishedMessage.prototype.serializeAs_TreasureHuntFinishedMessage = function (param1) {
        param1.writeByte(this.questType);
    };
    TreasureHuntFinishedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntFinishedMessage(param1);
    };
    TreasureHuntFinishedMessage.prototype.deserializeAs_TreasureHuntFinishedMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntFinishedMessage.questType.');
        }
    };
    TreasureHuntFinishedMessage.ID = 6483;
    return TreasureHuntFinishedMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntFinishedMessage;
