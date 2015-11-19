/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameMapMovementMessage = (function (_super) {
    __extends(GameMapMovementMessage, _super);
    function GameMapMovementMessage() {
        this.keyMovements = [];
        this.actorId = 0;
        _super.call(this);
    }
    GameMapMovementMessage.prototype.getMessageId = function () {
        return GameMapMovementMessage.ID;
    };
    GameMapMovementMessage.prototype.reset = function () {
        this.keyMovements = [];
        this.actorId = 0;
    };
    GameMapMovementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameMapMovementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameMapMovementMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameMapMovementMessage(param1);
    };
    GameMapMovementMessage.prototype.serializeAs_GameMapMovementMessage = function (param1) {
        param1.writeShort(this.keyMovements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.keyMovements.length) {
            if (this.keyMovements[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.keyMovements[_loc2_] + ') on element 1 (starting at 1) of keyMovements.');
            }
            param1.writeShort(this.keyMovements[_loc2_]);
            _loc2_++;
        }
        param1.writeInt(this.actorId);
    };
    GameMapMovementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameMapMovementMessage(param1);
    };
    GameMapMovementMessage.prototype.deserializeAs_GameMapMovementMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of keyMovements.');
            }
            this.keyMovements.push(_loc4_);
            _loc3_++;
        }
        this.actorId = param1.readInt();
    };
    GameMapMovementMessage.ID = 951;
    return GameMapMovementMessage;
})(network_message_1.NetworkMessage);
module.exports = GameMapMovementMessage;
