/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextCreateRequestMessage = (function (_super) {
    __extends(GameContextCreateRequestMessage, _super);
    function GameContextCreateRequestMessage() {
        _super.call(this);
    }
    GameContextCreateRequestMessage.prototype.getMessageId = function () {
        return GameContextCreateRequestMessage.ID;
    };
    GameContextCreateRequestMessage.prototype.reset = function () {
    };
    GameContextCreateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextCreateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextCreateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextCreateRequestMessage(param1);
    };
    GameContextCreateRequestMessage.prototype.serializeAs_GameContextCreateRequestMessage = function (param1) {
    };
    GameContextCreateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextCreateRequestMessage(param1);
    };
    GameContextCreateRequestMessage.prototype.deserializeAs_GameContextCreateRequestMessage = function (param1) {
    };
    GameContextCreateRequestMessage.ID = 250;
    return GameContextCreateRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextCreateRequestMessage;
