/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextCreateMessage = (function (_super) {
    __extends(GameContextCreateMessage, _super);
    function GameContextCreateMessage() {
        this.context = 1;
        _super.call(this);
    }
    GameContextCreateMessage.prototype.getMessageId = function () {
        return GameContextCreateMessage.ID;
    };
    GameContextCreateMessage.prototype.reset = function () {
        this.context = 1;
    };
    GameContextCreateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextCreateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextCreateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextCreateMessage(param1);
    };
    GameContextCreateMessage.prototype.serializeAs_GameContextCreateMessage = function (param1) {
        param1.writeByte(this.context);
    };
    GameContextCreateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextCreateMessage(param1);
    };
    GameContextCreateMessage.prototype.deserializeAs_GameContextCreateMessage = function (param1) {
        this.context = param1.readByte();
        if (this.context < 0) {
            throw new Error('Forbidden value (' + this.context + ') on element of GameContextCreateMessage.context.');
        }
    };
    GameContextCreateMessage.ID = 200;
    return GameContextCreateMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextCreateMessage;
