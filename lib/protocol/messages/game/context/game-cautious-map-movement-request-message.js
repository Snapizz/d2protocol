/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameMapMovementRequestMessage = require('./game-map-movement-request-message');
var GameCautiousMapMovementRequestMessage = (function (_super) {
    __extends(GameCautiousMapMovementRequestMessage, _super);
    function GameCautiousMapMovementRequestMessage() {
        _super.call(this);
    }
    GameCautiousMapMovementRequestMessage.prototype.getMessageId = function () {
        return GameCautiousMapMovementRequestMessage.ID;
    };
    GameCautiousMapMovementRequestMessage.prototype.reset = function () {
    };
    GameCautiousMapMovementRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameCautiousMapMovementRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameCautiousMapMovementRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameCautiousMapMovementRequestMessage(param1);
    };
    GameCautiousMapMovementRequestMessage.prototype.serializeAs_GameCautiousMapMovementRequestMessage = function (param1) {
        _super.prototype.serializeAs_GameMapMovementRequestMessage.call(this, param1);
    };
    GameCautiousMapMovementRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameCautiousMapMovementRequestMessage(param1);
    };
    GameCautiousMapMovementRequestMessage.prototype.deserializeAs_GameCautiousMapMovementRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameCautiousMapMovementRequestMessage.ID = 6496;
    return GameCautiousMapMovementRequestMessage;
})(GameMapMovementRequestMessage);
module.exports = GameCautiousMapMovementRequestMessage;
