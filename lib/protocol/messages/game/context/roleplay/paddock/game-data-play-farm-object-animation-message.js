/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameDataPlayFarmObjectAnimationMessage = (function (_super) {
    __extends(GameDataPlayFarmObjectAnimationMessage, _super);
    function GameDataPlayFarmObjectAnimationMessage() {
        this.cellId = [];
        _super.call(this);
    }
    GameDataPlayFarmObjectAnimationMessage.prototype.getMessageId = function () {
        return GameDataPlayFarmObjectAnimationMessage.ID;
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.reset = function () {
        this.cellId = [];
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameDataPlayFarmObjectAnimationMessage(param1);
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.serializeAs_GameDataPlayFarmObjectAnimationMessage = function (param1) {
        param1.writeShort(this.cellId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.cellId.length) {
            if (this.cellId[_loc2_] < 0 || this.cellId[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.cellId[_loc2_] + ') on element 1 (starting at 1) of cellId.');
            }
            param1.writeVarShort(this.cellId[_loc2_]);
            _loc2_++;
        }
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameDataPlayFarmObjectAnimationMessage(param1);
    };
    GameDataPlayFarmObjectAnimationMessage.prototype.deserializeAs_GameDataPlayFarmObjectAnimationMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0 || _loc4_ > 559) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of cellId.');
            }
            this.cellId.push(_loc4_);
            _loc3_++;
        }
    };
    GameDataPlayFarmObjectAnimationMessage.ID = 6026;
    return GameDataPlayFarmObjectAnimationMessage;
})(network_message_1.NetworkMessage);
module.exports = GameDataPlayFarmObjectAnimationMessage;
