/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntDigRequestMessage = (function (_super) {
    __extends(TreasureHuntDigRequestMessage, _super);
    function TreasureHuntDigRequestMessage() {
        this.questType = 0;
        _super.call(this);
    }
    TreasureHuntDigRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntDigRequestMessage.ID;
    };
    TreasureHuntDigRequestMessage.prototype.reset = function () {
        this.questType = 0;
    };
    TreasureHuntDigRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntDigRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntDigRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntDigRequestMessage(param1);
    };
    TreasureHuntDigRequestMessage.prototype.serializeAs_TreasureHuntDigRequestMessage = function (param1) {
        param1.writeByte(this.questType);
    };
    TreasureHuntDigRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntDigRequestMessage(param1);
    };
    TreasureHuntDigRequestMessage.prototype.deserializeAs_TreasureHuntDigRequestMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntDigRequestMessage.questType.');
        }
    };
    TreasureHuntDigRequestMessage.ID = 6485;
    return TreasureHuntDigRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntDigRequestMessage;
