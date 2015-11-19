/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementPositionRequestMessage = (function (_super) {
    __extends(GameFightPlacementPositionRequestMessage, _super);
    function GameFightPlacementPositionRequestMessage() {
        this.cellId = 0;
        _super.call(this);
    }
    GameFightPlacementPositionRequestMessage.prototype.getMessageId = function () {
        return GameFightPlacementPositionRequestMessage.ID;
    };
    GameFightPlacementPositionRequestMessage.prototype.reset = function () {
        this.cellId = 0;
    };
    GameFightPlacementPositionRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementPositionRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementPositionRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementPositionRequestMessage(param1);
    };
    GameFightPlacementPositionRequestMessage.prototype.serializeAs_GameFightPlacementPositionRequestMessage = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    GameFightPlacementPositionRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementPositionRequestMessage(param1);
    };
    GameFightPlacementPositionRequestMessage.prototype.deserializeAs_GameFightPlacementPositionRequestMessage = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameFightPlacementPositionRequestMessage.cellId.');
        }
    };
    GameFightPlacementPositionRequestMessage.ID = 704;
    return GameFightPlacementPositionRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementPositionRequestMessage;
