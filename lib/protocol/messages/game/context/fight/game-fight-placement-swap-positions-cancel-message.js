/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementSwapPositionsCancelMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsCancelMessage, _super);
    function GameFightPlacementSwapPositionsCancelMessage() {
        this.requestId = 0;
        _super.call(this);
    }
    GameFightPlacementSwapPositionsCancelMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsCancelMessage.ID;
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.reset = function () {
        this.requestId = 0;
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsCancelMessage(param1);
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.serializeAs_GameFightPlacementSwapPositionsCancelMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelMessage(param1);
    };
    GameFightPlacementSwapPositionsCancelMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsCancelMessage = function (param1) {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsCancelMessage.requestId.');
        }
    };
    GameFightPlacementSwapPositionsCancelMessage.ID = 6543;
    return GameFightPlacementSwapPositionsCancelMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsCancelMessage;
