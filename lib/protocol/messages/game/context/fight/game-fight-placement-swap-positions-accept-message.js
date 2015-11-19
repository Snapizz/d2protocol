/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementSwapPositionsAcceptMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsAcceptMessage, _super);
    function GameFightPlacementSwapPositionsAcceptMessage() {
        this.requestId = 0;
        _super.call(this);
    }
    GameFightPlacementSwapPositionsAcceptMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsAcceptMessage.ID;
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.reset = function () {
        this.requestId = 0;
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsAcceptMessage(param1);
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.serializeAs_GameFightPlacementSwapPositionsAcceptMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(param1);
    };
    GameFightPlacementSwapPositionsAcceptMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage = function (param1) {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsAcceptMessage.requestId.');
        }
    };
    GameFightPlacementSwapPositionsAcceptMessage.ID = 6547;
    return GameFightPlacementSwapPositionsAcceptMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsAcceptMessage;
