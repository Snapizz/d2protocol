/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionAcknowledgementMessage = (function (_super) {
    __extends(GameActionAcknowledgementMessage, _super);
    function GameActionAcknowledgementMessage() {
        this.valid = false;
        this.actionId = 0;
        _super.call(this);
    }
    GameActionAcknowledgementMessage.prototype.getMessageId = function () {
        return GameActionAcknowledgementMessage.ID;
    };
    GameActionAcknowledgementMessage.prototype.reset = function () {
        this.valid = false;
        this.actionId = 0;
    };
    GameActionAcknowledgementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionAcknowledgementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionAcknowledgementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionAcknowledgementMessage(param1);
    };
    GameActionAcknowledgementMessage.prototype.serializeAs_GameActionAcknowledgementMessage = function (param1) {
        param1.writeBoolean(this.valid);
        param1.writeByte(this.actionId);
    };
    GameActionAcknowledgementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionAcknowledgementMessage(param1);
    };
    GameActionAcknowledgementMessage.prototype.deserializeAs_GameActionAcknowledgementMessage = function (param1) {
        this.valid = param1.readBoolean();
        this.actionId = param1.readByte();
    };
    GameActionAcknowledgementMessage.ID = 957;
    return GameActionAcknowledgementMessage;
})(network_message_1.NetworkMessage);
module.exports = GameActionAcknowledgementMessage;
