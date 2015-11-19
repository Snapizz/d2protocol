/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var GameActionFightPointsVariationMessage = (function (_super) {
    __extends(GameActionFightPointsVariationMessage, _super);
    function GameActionFightPointsVariationMessage() {
        this.targetId = 0;
        this.delta = 0;
        _super.call(this);
    }
    GameActionFightPointsVariationMessage.prototype.getMessageId = function () {
        return GameActionFightPointsVariationMessage.ID;
    };
    GameActionFightPointsVariationMessage.prototype.reset = function () {
        this.targetId = 0;
        this.delta = 0;
    };
    GameActionFightPointsVariationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightPointsVariationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightPointsVariationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightPointsVariationMessage(param1);
    };
    GameActionFightPointsVariationMessage.prototype.serializeAs_GameActionFightPointsVariationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        param1.writeShort(this.delta);
    };
    GameActionFightPointsVariationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightPointsVariationMessage(param1);
    };
    GameActionFightPointsVariationMessage.prototype.deserializeAs_GameActionFightPointsVariationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.delta = param1.readShort();
    };
    GameActionFightPointsVariationMessage.ID = 1030;
    return GameActionFightPointsVariationMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightPointsVariationMessage;
