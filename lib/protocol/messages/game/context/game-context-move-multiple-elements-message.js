/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EntityMovementInformations = require('../../../types/game/context/entity-movement-informations');
var GameContextMoveMultipleElementsMessage = (function (_super) {
    __extends(GameContextMoveMultipleElementsMessage, _super);
    function GameContextMoveMultipleElementsMessage() {
        this.movements = [];
        _super.call(this);
    }
    GameContextMoveMultipleElementsMessage.prototype.getMessageId = function () {
        return GameContextMoveMultipleElementsMessage.ID;
    };
    GameContextMoveMultipleElementsMessage.prototype.reset = function () {
        this.movements = [];
    };
    GameContextMoveMultipleElementsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextMoveMultipleElementsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextMoveMultipleElementsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextMoveMultipleElementsMessage(param1);
    };
    GameContextMoveMultipleElementsMessage.prototype.serializeAs_GameContextMoveMultipleElementsMessage = function (param1) {
        param1.writeShort(this.movements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.movements.length) {
            (this.movements[_loc2_]).serializeAs_EntityMovementInformations(param1);
            _loc2_++;
        }
    };
    GameContextMoveMultipleElementsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextMoveMultipleElementsMessage(param1);
    };
    GameContextMoveMultipleElementsMessage.prototype.deserializeAs_GameContextMoveMultipleElementsMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new EntityMovementInformations();
            _loc4_.deserialize(param1);
            this.movements.push(_loc4_);
            _loc3_++;
        }
    };
    GameContextMoveMultipleElementsMessage.ID = 254;
    return GameContextMoveMultipleElementsMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextMoveMultipleElementsMessage;
