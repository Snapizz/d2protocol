/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeTargetsListMessage = (function (_super) {
    __extends(ChallengeTargetsListMessage, _super);
    function ChallengeTargetsListMessage() {
        this.targetIds = [];
        this.targetCells = [];
        _super.call(this);
    }
    ChallengeTargetsListMessage.prototype.getMessageId = function () {
        return ChallengeTargetsListMessage.ID;
    };
    ChallengeTargetsListMessage.prototype.reset = function () {
        this.targetIds = [];
        this.targetCells = [];
    };
    ChallengeTargetsListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeTargetsListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeTargetsListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeTargetsListMessage(param1);
    };
    ChallengeTargetsListMessage.prototype.serializeAs_ChallengeTargetsListMessage = function (param1) {
        param1.writeShort(this.targetIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.targetIds.length) {
            param1.writeInt(this.targetIds[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.targetCells.length);
        var _loc3_ = 0;
        while (_loc3_ < this.targetCells.length) {
            if (this.targetCells[_loc3_] < -1 || this.targetCells[_loc3_] > 559) {
                throw new Error('Forbidden value (' + this.targetCells[_loc3_] + ') on element 2 (starting at 1) of targetCells.');
            }
            param1.writeShort(this.targetCells[_loc3_]);
            _loc3_++;
        }
    };
    ChallengeTargetsListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeTargetsListMessage(param1);
    };
    ChallengeTargetsListMessage.prototype.deserializeAs_ChallengeTargetsListMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readInt();
            this.targetIds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readShort();
            if (_loc7_ < -1 || _loc7_ > 559) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of targetCells.');
            }
            this.targetCells.push(_loc7_);
            _loc5_++;
        }
    };
    ChallengeTargetsListMessage.ID = 5613;
    return ChallengeTargetsListMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeTargetsListMessage;
