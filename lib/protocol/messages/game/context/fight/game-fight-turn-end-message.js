/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnEndMessage = (function (_super) {
    __extends(GameFightTurnEndMessage, _super);
    function GameFightTurnEndMessage() {
        this.id = 0;
        _super.call(this);
    }
    GameFightTurnEndMessage.prototype.getMessageId = function () {
        return GameFightTurnEndMessage.ID;
    };
    GameFightTurnEndMessage.prototype.reset = function () {
        this.id = 0;
    };
    GameFightTurnEndMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnEndMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnEndMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnEndMessage(param1);
    };
    GameFightTurnEndMessage.prototype.serializeAs_GameFightTurnEndMessage = function (param1) {
        param1.writeInt(this.id);
    };
    GameFightTurnEndMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnEndMessage(param1);
    };
    GameFightTurnEndMessage.prototype.deserializeAs_GameFightTurnEndMessage = function (param1) {
        this.id = param1.readInt();
    };
    GameFightTurnEndMessage.ID = 719;
    return GameFightTurnEndMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnEndMessage;
