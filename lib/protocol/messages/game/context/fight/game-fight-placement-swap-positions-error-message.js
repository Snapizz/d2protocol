/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementSwapPositionsErrorMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsErrorMessage, _super);
    function GameFightPlacementSwapPositionsErrorMessage() {
        _super.call(this);
    }
    GameFightPlacementSwapPositionsErrorMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsErrorMessage.ID;
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.reset = function () {
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsErrorMessage(param1);
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.serializeAs_GameFightPlacementSwapPositionsErrorMessage = function (param1) {
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsErrorMessage(param1);
    };
    GameFightPlacementSwapPositionsErrorMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsErrorMessage = function (param1) {
    };
    GameFightPlacementSwapPositionsErrorMessage.ID = 6548;
    return GameFightPlacementSwapPositionsErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsErrorMessage;
