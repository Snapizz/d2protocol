/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapObstacle = require('../../../../types/game/interactive/map-obstacle');
var MapObstacleUpdateMessage = (function (_super) {
    __extends(MapObstacleUpdateMessage, _super);
    function MapObstacleUpdateMessage() {
        this.obstacles = [];
        _super.call(this);
    }
    MapObstacleUpdateMessage.prototype.getMessageId = function () {
        return MapObstacleUpdateMessage.ID;
    };
    MapObstacleUpdateMessage.prototype.reset = function () {
        this.obstacles = [];
    };
    MapObstacleUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapObstacleUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapObstacleUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapObstacleUpdateMessage(param1);
    };
    MapObstacleUpdateMessage.prototype.serializeAs_MapObstacleUpdateMessage = function (param1) {
        param1.writeShort(this.obstacles.length);
        var _loc2_ = 0;
        while (_loc2_ < this.obstacles.length) {
            (this.obstacles[_loc2_]).serializeAs_MapObstacle(param1);
            _loc2_++;
        }
    };
    MapObstacleUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapObstacleUpdateMessage(param1);
    };
    MapObstacleUpdateMessage.prototype.deserializeAs_MapObstacleUpdateMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MapObstacle();
            _loc4_.deserialize(param1);
            this.obstacles.push(_loc4_);
            _loc3_++;
        }
    };
    MapObstacleUpdateMessage.ID = 6051;
    return MapObstacleUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = MapObstacleUpdateMessage;
