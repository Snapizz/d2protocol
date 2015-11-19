/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementSwapPositionsOfferMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsOfferMessage, _super);
    function GameFightPlacementSwapPositionsOfferMessage() {
        this.requestId = 0;
        this.requesterId = 0;
        this.requesterCellId = 0;
        this.requestedId = 0;
        this.requestedCellId = 0;
        _super.call(this);
    }
    GameFightPlacementSwapPositionsOfferMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsOfferMessage.ID;
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.reset = function () {
        this.requestId = 0;
        this.requesterId = 0;
        this.requesterCellId = 0;
        this.requestedId = 0;
        this.requestedCellId = 0;
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsOfferMessage(param1);
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.serializeAs_GameFightPlacementSwapPositionsOfferMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeInt(this.requestId);
        if (this.requesterId < 0) {
            throw new Error('Forbidden value (' + this.requesterId + ') on element requesterId.');
        }
        param1.writeVarInt(this.requesterId);
        if (this.requesterCellId < 0 || this.requesterCellId > 559) {
            throw new Error('Forbidden value (' + this.requesterCellId + ') on element requesterCellId.');
        }
        param1.writeVarShort(this.requesterCellId);
        if (this.requestedId < 0) {
            throw new Error('Forbidden value (' + this.requestedId + ') on element requestedId.');
        }
        param1.writeVarInt(this.requestedId);
        if (this.requestedCellId < 0 || this.requestedCellId > 559) {
            throw new Error('Forbidden value (' + this.requestedCellId + ') on element requestedCellId.');
        }
        param1.writeVarShort(this.requestedCellId);
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsOfferMessage(param1);
    };
    GameFightPlacementSwapPositionsOfferMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsOfferMessage = function (param1) {
        this.requestId = param1.readInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestId.');
        }
        this.requesterId = param1.readVarUhInt();
        if (this.requesterId < 0) {
            throw new Error('Forbidden value (' + this.requesterId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requesterId.');
        }
        this.requesterCellId = param1.readVarUhShort();
        if (this.requesterCellId < 0 || this.requesterCellId > 559) {
            throw new Error('Forbidden value (' + this.requesterCellId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requesterCellId.');
        }
        this.requestedId = param1.readVarUhInt();
        if (this.requestedId < 0) {
            throw new Error('Forbidden value (' + this.requestedId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestedId.');
        }
        this.requestedCellId = param1.readVarUhShort();
        if (this.requestedCellId < 0 || this.requestedCellId > 559) {
            throw new Error('Forbidden value (' + this.requestedCellId + ') on element of GameFightPlacementSwapPositionsOfferMessage.requestedCellId.');
        }
    };
    GameFightPlacementSwapPositionsOfferMessage.ID = 6542;
    return GameFightPlacementSwapPositionsOfferMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsOfferMessage;
