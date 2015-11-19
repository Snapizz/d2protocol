/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementPositionRequestMessage = require('./game-fight-placement-position-request-message');
var GameFightPlacementSwapPositionsRequestMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsRequestMessage, _super);
    function GameFightPlacementSwapPositionsRequestMessage() {
        this.requestedId = 0;
        _super.call(this);
    }
    GameFightPlacementSwapPositionsRequestMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsRequestMessage.ID;
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.reset = function () {
        this.requestedId = 0;
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsRequestMessage(param1);
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.serializeAs_GameFightPlacementSwapPositionsRequestMessage = function (param1) {
        _super.prototype.serializeAs_GameFightPlacementPositionRequestMessage.call(this, param1);
        param1.writeInt(this.requestedId);
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsRequestMessage(param1);
    };
    GameFightPlacementSwapPositionsRequestMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.requestedId = param1.readInt();
    };
    GameFightPlacementSwapPositionsRequestMessage.ID = 6541;
    return GameFightPlacementSwapPositionsRequestMessage;
})(GameFightPlacementPositionRequestMessage);
module.exports = GameFightPlacementSwapPositionsRequestMessage;
