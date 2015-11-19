/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnReadyRequestMessage = (function (_super) {
    __extends(GameFightTurnReadyRequestMessage, _super);
    function GameFightTurnReadyRequestMessage() {
        this.id = 0;
        _super.call(this);
    }
    GameFightTurnReadyRequestMessage.prototype.getMessageId = function () {
        return GameFightTurnReadyRequestMessage.ID;
    };
    GameFightTurnReadyRequestMessage.prototype.reset = function () {
        this.id = 0;
    };
    GameFightTurnReadyRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnReadyRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnReadyRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnReadyRequestMessage(param1);
    };
    GameFightTurnReadyRequestMessage.prototype.serializeAs_GameFightTurnReadyRequestMessage = function (param1) {
        param1.writeInt(this.id);
    };
    GameFightTurnReadyRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnReadyRequestMessage(param1);
    };
    GameFightTurnReadyRequestMessage.prototype.deserializeAs_GameFightTurnReadyRequestMessage = function (param1) {
        this.id = param1.readInt();
    };
    GameFightTurnReadyRequestMessage.ID = 715;
    return GameFightTurnReadyRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnReadyRequestMessage;
