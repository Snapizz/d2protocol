/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnStartPlayingMessage = (function (_super) {
    __extends(GameFightTurnStartPlayingMessage, _super);
    function GameFightTurnStartPlayingMessage() {
        _super.call(this);
    }
    GameFightTurnStartPlayingMessage.prototype.getMessageId = function () {
        return GameFightTurnStartPlayingMessage.ID;
    };
    GameFightTurnStartPlayingMessage.prototype.reset = function () {
    };
    GameFightTurnStartPlayingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnStartPlayingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnStartPlayingMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnStartPlayingMessage(param1);
    };
    GameFightTurnStartPlayingMessage.prototype.serializeAs_GameFightTurnStartPlayingMessage = function (param1) {
    };
    GameFightTurnStartPlayingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnStartPlayingMessage(param1);
    };
    GameFightTurnStartPlayingMessage.prototype.deserializeAs_GameFightTurnStartPlayingMessage = function (param1) {
    };
    GameFightTurnStartPlayingMessage.ID = 6465;
    return GameFightTurnStartPlayingMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnStartPlayingMessage;
