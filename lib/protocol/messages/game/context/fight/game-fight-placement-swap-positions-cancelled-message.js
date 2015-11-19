/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementSwapPositionsCancelledMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsCancelledMessage, _super);
    function GameFightPlacementSwapPositionsCancelledMessage() {
        this.requestId = 0;
        this.cancellerId = 0;
        _super.call(this);
    }
    GameFightPlacementSwapPositionsCancelledMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsCancelledMessage.ID;
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.reset = function () {
        this.requestId = 0;
        this.cancellerId = 0;
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1);
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.serializeAs_GameFightPlacementSwapPositionsCancelledMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
        if (this.cancellerId < 0) {
            throw new Error('Forbidden value (' + this.cancellerId + ') on element cancellerId.');
        }
        param1.writeVarInt(this.cancellerId);
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(param1);
    };
    GameFightPlacementSwapPositionsCancelledMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage = function (param1) {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsCancelledMessage.requestId.');
        }
        this.cancellerId = param1.readVarUhInt();
        if (this.cancellerId < 0) {
            throw new Error('Forbidden value (' + this.cancellerId + ') on element of GameFightPlacementSwapPositionsCancelledMessage.cancellerId.');
        }
    };
    GameFightPlacementSwapPositionsCancelledMessage.ID = 6546;
    return GameFightPlacementSwapPositionsCancelledMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsCancelledMessage;
