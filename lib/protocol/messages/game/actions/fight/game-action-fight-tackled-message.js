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
var GameActionFightTackledMessage = (function (_super) {
    __extends(GameActionFightTackledMessage, _super);
    function GameActionFightTackledMessage() {
        this.tacklersIds = [];
        _super.call(this);
    }
    GameActionFightTackledMessage.prototype.getMessageId = function () {
        return GameActionFightTackledMessage.ID;
    };
    GameActionFightTackledMessage.prototype.reset = function () {
        this.tacklersIds = [];
    };
    GameActionFightTackledMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightTackledMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightTackledMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightTackledMessage(param1);
    };
    GameActionFightTackledMessage.prototype.serializeAs_GameActionFightTackledMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.tacklersIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.tacklersIds.length) {
            param1.writeInt(this.tacklersIds[_loc2_]);
            _loc2_++;
        }
    };
    GameActionFightTackledMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightTackledMessage(param1);
    };
    GameActionFightTackledMessage.prototype.deserializeAs_GameActionFightTackledMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.tacklersIds.push(_loc4_);
            _loc3_++;
        }
    };
    GameActionFightTackledMessage.ID = 1004;
    return GameActionFightTackledMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightTackledMessage;
