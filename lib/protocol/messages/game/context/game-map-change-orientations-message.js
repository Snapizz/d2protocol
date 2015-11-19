/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ActorOrientation = require('../../../types/game/context/actor-orientation');
var GameMapChangeOrientationsMessage = (function (_super) {
    __extends(GameMapChangeOrientationsMessage, _super);
    function GameMapChangeOrientationsMessage() {
        this.orientations = [];
        _super.call(this);
    }
    GameMapChangeOrientationsMessage.prototype.getMessageId = function () {
        return GameMapChangeOrientationsMessage.ID;
    };
    GameMapChangeOrientationsMessage.prototype.reset = function () {
        this.orientations = [];
    };
    GameMapChangeOrientationsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameMapChangeOrientationsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameMapChangeOrientationsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameMapChangeOrientationsMessage(param1);
    };
    GameMapChangeOrientationsMessage.prototype.serializeAs_GameMapChangeOrientationsMessage = function (param1) {
        param1.writeShort(this.orientations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.orientations.length) {
            (this.orientations[_loc2_]).serializeAs_ActorOrientation(param1);
            _loc2_++;
        }
    };
    GameMapChangeOrientationsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameMapChangeOrientationsMessage(param1);
    };
    GameMapChangeOrientationsMessage.prototype.deserializeAs_GameMapChangeOrientationsMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ActorOrientation();
            _loc4_.deserialize(param1);
            this.orientations.push(_loc4_);
            _loc3_++;
        }
    };
    GameMapChangeOrientationsMessage.ID = 6155;
    return GameMapChangeOrientationsMessage;
})(network_message_1.NetworkMessage);
module.exports = GameMapChangeOrientationsMessage;
