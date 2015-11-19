/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextQuitMessage = (function (_super) {
    __extends(GameContextQuitMessage, _super);
    function GameContextQuitMessage() {
        _super.call(this);
    }
    GameContextQuitMessage.prototype.getMessageId = function () {
        return GameContextQuitMessage.ID;
    };
    GameContextQuitMessage.prototype.reset = function () {
    };
    GameContextQuitMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextQuitMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextQuitMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextQuitMessage(param1);
    };
    GameContextQuitMessage.prototype.serializeAs_GameContextQuitMessage = function (param1) {
    };
    GameContextQuitMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextQuitMessage(param1);
    };
    GameContextQuitMessage.prototype.deserializeAs_GameContextQuitMessage = function (param1) {
    };
    GameContextQuitMessage.ID = 255;
    return GameContextQuitMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextQuitMessage;
