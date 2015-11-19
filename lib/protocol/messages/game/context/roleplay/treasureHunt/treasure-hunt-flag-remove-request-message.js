/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TreasureHuntFlagRemoveRequestMessage = (function (_super) {
    __extends(TreasureHuntFlagRemoveRequestMessage, _super);
    function TreasureHuntFlagRemoveRequestMessage() {
        this.questType = 0;
        this.index = 0;
        _super.call(this);
    }
    TreasureHuntFlagRemoveRequestMessage.prototype.getMessageId = function () {
        return TreasureHuntFlagRemoveRequestMessage.ID;
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.reset = function () {
        this.questType = 0;
        this.index = 0;
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TreasureHuntFlagRemoveRequestMessage(param1);
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.serializeAs_TreasureHuntFlagRemoveRequestMessage = function (param1) {
        param1.writeByte(this.questType);
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeByte(this.index);
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TreasureHuntFlagRemoveRequestMessage(param1);
    };
    TreasureHuntFlagRemoveRequestMessage.prototype.deserializeAs_TreasureHuntFlagRemoveRequestMessage = function (param1) {
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntFlagRemoveRequestMessage.questType.');
        }
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of TreasureHuntFlagRemoveRequestMessage.index.');
        }
    };
    TreasureHuntFlagRemoveRequestMessage.ID = 6510;
    return TreasureHuntFlagRemoveRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TreasureHuntFlagRemoveRequestMessage;
