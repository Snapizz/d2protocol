/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightPlacementPossiblePositionsMessage = (function (_super) {
    __extends(GameFightPlacementPossiblePositionsMessage, _super);
    function GameFightPlacementPossiblePositionsMessage() {
        this.positionsForChallengers = [];
        this.positionsForDefenders = [];
        this.teamNumber = 2;
        _super.call(this);
    }
    GameFightPlacementPossiblePositionsMessage.prototype.getMessageId = function () {
        return GameFightPlacementPossiblePositionsMessage.ID;
    };
    GameFightPlacementPossiblePositionsMessage.prototype.reset = function () {
        this.positionsForChallengers = [];
        this.positionsForDefenders = [];
        this.teamNumber = 2;
    };
    GameFightPlacementPossiblePositionsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightPlacementPossiblePositionsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightPlacementPossiblePositionsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightPlacementPossiblePositionsMessage(param1);
    };
    GameFightPlacementPossiblePositionsMessage.prototype.serializeAs_GameFightPlacementPossiblePositionsMessage = function (param1) {
        param1.writeShort(this.positionsForChallengers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.positionsForChallengers.length) {
            if (this.positionsForChallengers[_loc2_] < 0 || this.positionsForChallengers[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.positionsForChallengers[_loc2_] + ') on element 1 (starting at 1) of positionsForChallengers.');
            }
            param1.writeVarShort(this.positionsForChallengers[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.positionsForDefenders.length);
        var _loc3_ = 0;
        while (_loc3_ < this.positionsForDefenders.length) {
            if (this.positionsForDefenders[_loc3_] < 0 || this.positionsForDefenders[_loc3_] > 559) {
                throw new Error('Forbidden value (' + this.positionsForDefenders[_loc3_] + ') on element 2 (starting at 1) of positionsForDefenders.');
            }
            param1.writeVarShort(this.positionsForDefenders[_loc3_]);
            _loc3_++;
        }
        param1.writeByte(this.teamNumber);
    };
    GameFightPlacementPossiblePositionsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightPlacementPossiblePositionsMessage(param1);
    };
    GameFightPlacementPossiblePositionsMessage.prototype.deserializeAs_GameFightPlacementPossiblePositionsMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0 || _loc6_ > 559) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of positionsForChallengers.');
            }
            this.positionsForChallengers.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0 || _loc7_ > 559) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of positionsForDefenders.');
            }
            this.positionsForDefenders.push(_loc7_);
            _loc5_++;
        }
        this.teamNumber = param1.readByte();
        if (this.teamNumber < 0) {
            throw new Error('Forbidden value (' + this.teamNumber + ') on element of GameFightPlacementPossiblePositionsMessage.teamNumber.');
        }
    };
    GameFightPlacementPossiblePositionsMessage.ID = 703;
    return GameFightPlacementPossiblePositionsMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightPlacementPossiblePositionsMessage;
