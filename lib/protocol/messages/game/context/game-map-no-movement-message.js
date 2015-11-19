/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameMapNoMovementMessage = (function (_super) {
    __extends(GameMapNoMovementMessage, _super);
    function GameMapNoMovementMessage() {
        _super.call(this);
    }
    GameMapNoMovementMessage.prototype.getMessageId = function () {
        return GameMapNoMovementMessage.ID;
    };
    GameMapNoMovementMessage.prototype.reset = function () {
    };
    GameMapNoMovementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameMapNoMovementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameMapNoMovementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameMapNoMovementMessage(param1);
    };
    GameMapNoMovementMessage.prototype.serializeAs_GameMapNoMovementMessage = function (param1) {
    };
    GameMapNoMovementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameMapNoMovementMessage(param1);
    };
    GameMapNoMovementMessage.prototype.deserializeAs_GameMapNoMovementMessage = function (param1) {
    };
    GameMapNoMovementMessage.ID = 954;
    return GameMapNoMovementMessage;
})(network_message_1.NetworkMessage);
module.exports = GameMapNoMovementMessage;
