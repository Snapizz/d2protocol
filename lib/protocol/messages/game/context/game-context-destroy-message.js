/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextDestroyMessage = (function (_super) {
    __extends(GameContextDestroyMessage, _super);
    function GameContextDestroyMessage() {
        _super.call(this);
    }
    GameContextDestroyMessage.prototype.getMessageId = function () {
        return GameContextDestroyMessage.ID;
    };
    GameContextDestroyMessage.prototype.reset = function () {
    };
    GameContextDestroyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextDestroyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextDestroyMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextDestroyMessage(param1);
    };
    GameContextDestroyMessage.prototype.serializeAs_GameContextDestroyMessage = function (param1) {
    };
    GameContextDestroyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextDestroyMessage(param1);
    };
    GameContextDestroyMessage.prototype.deserializeAs_GameContextDestroyMessage = function (param1) {
    };
    GameContextDestroyMessage.ID = 201;
    return GameContextDestroyMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextDestroyMessage;
