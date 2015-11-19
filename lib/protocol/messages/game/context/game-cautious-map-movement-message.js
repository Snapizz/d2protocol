/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameMapMovementMessage = require('./game-map-movement-message');
var GameCautiousMapMovementMessage = (function (_super) {
    __extends(GameCautiousMapMovementMessage, _super);
    function GameCautiousMapMovementMessage() {
        _super.call(this);
    }
    GameCautiousMapMovementMessage.prototype.getMessageId = function () {
        return GameCautiousMapMovementMessage.ID;
    };
    GameCautiousMapMovementMessage.prototype.reset = function () {
    };
    GameCautiousMapMovementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameCautiousMapMovementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameCautiousMapMovementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameCautiousMapMovementMessage(param1);
    };
    GameCautiousMapMovementMessage.prototype.serializeAs_GameCautiousMapMovementMessage = function (param1) {
        _super.prototype.serializeAs_GameMapMovementMessage.call(this, param1);
    };
    GameCautiousMapMovementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameCautiousMapMovementMessage(param1);
    };
    GameCautiousMapMovementMessage.prototype.deserializeAs_GameCautiousMapMovementMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameCautiousMapMovementMessage.ID = 6497;
    return GameCautiousMapMovementMessage;
})(GameMapMovementMessage);
module.exports = GameCautiousMapMovementMessage;
