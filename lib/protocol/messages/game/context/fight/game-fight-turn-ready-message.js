/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnReadyMessage = (function (_super) {
    __extends(GameFightTurnReadyMessage, _super);
    function GameFightTurnReadyMessage() {
        this.isReady = false;
        _super.call(this);
    }
    GameFightTurnReadyMessage.prototype.getMessageId = function () {
        return GameFightTurnReadyMessage.ID;
    };
    GameFightTurnReadyMessage.prototype.reset = function () {
        this.isReady = false;
    };
    GameFightTurnReadyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnReadyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnReadyMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnReadyMessage(param1);
    };
    GameFightTurnReadyMessage.prototype.serializeAs_GameFightTurnReadyMessage = function (param1) {
        param1.writeBoolean(this.isReady);
    };
    GameFightTurnReadyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnReadyMessage(param1);
    };
    GameFightTurnReadyMessage.prototype.deserializeAs_GameFightTurnReadyMessage = function (param1) {
        this.isReady = param1.readBoolean();
    };
    GameFightTurnReadyMessage.ID = 716;
    return GameFightTurnReadyMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnReadyMessage;
