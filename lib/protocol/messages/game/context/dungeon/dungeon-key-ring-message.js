/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DungeonKeyRingMessage = (function (_super) {
    __extends(DungeonKeyRingMessage, _super);
    function DungeonKeyRingMessage() {
        this.availables = [];
        this.unavailables = [];
        _super.call(this);
    }
    DungeonKeyRingMessage.prototype.getMessageId = function () {
        return DungeonKeyRingMessage.ID;
    };
    DungeonKeyRingMessage.prototype.reset = function () {
        this.availables = [];
        this.unavailables = [];
    };
    DungeonKeyRingMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DungeonKeyRingMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DungeonKeyRingMessage.prototype.serialize = function (param1) {
        this.serializeAs_DungeonKeyRingMessage(param1);
    };
    DungeonKeyRingMessage.prototype.serializeAs_DungeonKeyRingMessage = function (param1) {
        param1.writeShort(this.availables.length);
        var _loc2_ = 0;
        while (_loc2_ < this.availables.length) {
            if (this.availables[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.availables[_loc2_] + ') on element 1 (starting at 1) of availables.');
            }
            param1.writeVarShort(this.availables[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.unavailables.length);
        var _loc3_ = 0;
        while (_loc3_ < this.unavailables.length) {
            if (this.unavailables[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.unavailables[_loc3_] + ') on element 2 (starting at 1) of unavailables.');
            }
            param1.writeVarShort(this.unavailables[_loc3_]);
            _loc3_++;
        }
    };
    DungeonKeyRingMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DungeonKeyRingMessage(param1);
    };
    DungeonKeyRingMessage.prototype.deserializeAs_DungeonKeyRingMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of availables.');
            }
            this.availables.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of unavailables.');
            }
            this.unavailables.push(_loc7_);
            _loc5_++;
        }
    };
    DungeonKeyRingMessage.ID = 6299;
    return DungeonKeyRingMessage;
})(network_message_1.NetworkMessage);
module.exports = DungeonKeyRingMessage;
