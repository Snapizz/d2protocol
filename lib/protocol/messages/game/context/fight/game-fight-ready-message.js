/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightReadyMessage = (function (_super) {
    __extends(GameFightReadyMessage, _super);
    function GameFightReadyMessage() {
        this.isReady = false;
        _super.call(this);
    }
    GameFightReadyMessage.prototype.getMessageId = function () {
        return GameFightReadyMessage.ID;
    };
    GameFightReadyMessage.prototype.reset = function () {
        this.isReady = false;
    };
    GameFightReadyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightReadyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightReadyMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightReadyMessage(param1);
    };
    GameFightReadyMessage.prototype.serializeAs_GameFightReadyMessage = function (param1) {
        param1.writeBoolean(this.isReady);
    };
    GameFightReadyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightReadyMessage(param1);
    };
    GameFightReadyMessage.prototype.deserializeAs_GameFightReadyMessage = function (param1) {
        this.isReady = param1.readBoolean();
    };
    GameFightReadyMessage.ID = 708;
    return GameFightReadyMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightReadyMessage;
