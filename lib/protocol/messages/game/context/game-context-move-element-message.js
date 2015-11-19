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
var GameContextMoveElementMessage = (function (_super) {
    __extends(GameContextMoveElementMessage, _super);
    function GameContextMoveElementMessage() {
        this.movement = new EntityMovementInformations();
        _super.call(this);
    }
    GameContextMoveElementMessage.prototype.getMessageId = function () {
        return GameContextMoveElementMessage.ID;
    };
    GameContextMoveElementMessage.prototype.reset = function () {
        this.movement = new EntityMovementInformations();
    };
    GameContextMoveElementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextMoveElementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextMoveElementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextMoveElementMessage(param1);
    };
    GameContextMoveElementMessage.prototype.serializeAs_GameContextMoveElementMessage = function (param1) {
        this.movement.serializeAs_EntityMovementInformations(param1);
    };
    GameContextMoveElementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextMoveElementMessage(param1);
    };
    GameContextMoveElementMessage.prototype.deserializeAs_GameContextMoveElementMessage = function (param1) {
        this.movement = new EntityMovementInformations();
        this.movement.deserialize(param1);
    };
    GameContextMoveElementMessage.ID = 253;
    return GameContextMoveElementMessage;
})(network_message_1.NetworkMessage);
module.exports = GameContextMoveElementMessage;
