/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextKickMessage = (function (_super) {
    __extends(GameContextKickMessage, _super);
    function GameContextKickMessage() {
        this.targetId = 0;
        _super.call(this);
    }
    GameContextKickMessage.prototype.getMessageId = function () {
        return GameContextKickMessage.ID;
    };
    GameContextKickMessage.prototype.reset = function () {
        this.targetId = 0;
    };
    GameContextKickMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextKickMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextKickMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextKickMessage(param1);
    };
    GameContextKickMessage.prototype.serializeAs_GameContextKickMessage = function (param1) {
        param1.writeInt(this.targetId);
    };
    GameContextKickMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextKickMessage(param1);
    };
    GameContextKickMessage.prototype.deserializeAs_GameContextKickMessage = function (param1) {
        this.targetId = param1.readInt();
    };
    GameContextKickMessage.ID = 6081;
    return GameContextKickMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextKickMessage;
