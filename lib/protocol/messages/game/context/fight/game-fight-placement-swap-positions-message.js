/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentifiedEntityDispositionInformations = require('../../../../types/game/context/identified-entity-disposition-informations');
var GameFightPlacementSwapPositionsMessage = (function (_super) {
    __extends(GameFightPlacementSwapPositionsMessage, _super);
    function GameFightPlacementSwapPositionsMessage() {
        this.dispositions = [];
        _super.call(this);
    }
    GameFightPlacementSwapPositionsMessage.prototype.getMessageId = function () {
        return GameFightPlacementSwapPositionsMessage.ID;
    };
    GameFightPlacementSwapPositionsMessage.prototype.reset = function () {
        this.dispositions = [];
    };
    GameFightPlacementSwapPositionsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementSwapPositionsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementSwapPositionsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementSwapPositionsMessage(param1);
    };
    GameFightPlacementSwapPositionsMessage.prototype.serializeAs_GameFightPlacementSwapPositionsMessage = function (param1) {
        var _loc2_ = 0;
        while (_loc2_ < 2) {
            this.dispositions[_loc2_].serializeAs_IdentifiedEntityDispositionInformations(param1);
            _loc2_++;
        }
    };
    GameFightPlacementSwapPositionsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementSwapPositionsMessage(param1);
    };
    GameFightPlacementSwapPositionsMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsMessage = function (param1) {
        var _loc2_ = 0;
        while (_loc2_ < 2) {
            this.dispositions[_loc2_] = new IdentifiedEntityDispositionInformations();
            this.dispositions[_loc2_].deserialize(param1);
            _loc2_++;
        }
    };
    GameFightPlacementSwapPositionsMessage.ID = 6544;
    return GameFightPlacementSwapPositionsMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementSwapPositionsMessage;
