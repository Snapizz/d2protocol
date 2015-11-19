/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectGroundListAddedMessage = (function (_super) {
    __extends(ObjectGroundListAddedMessage, _super);
    function ObjectGroundListAddedMessage() {
        this.cells = [];
        this.referenceIds = [];
        _super.call(this);
    }
    ObjectGroundListAddedMessage.prototype.getMessageId = function () {
        return ObjectGroundListAddedMessage.ID;
    };
    ObjectGroundListAddedMessage.prototype.reset = function () {
        this.cells = [];
        this.referenceIds = [];
    };
    ObjectGroundListAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectGroundListAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectGroundListAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectGroundListAddedMessage(param1);
    };
    ObjectGroundListAddedMessage.prototype.serializeAs_ObjectGroundListAddedMessage = function (param1) {
        param1.writeShort(this.cells.length);
        var _loc2_ = 0;
        while (_loc2_ < this.cells.length) {
            if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.cells[_loc2_] + ') on element 1 (starting at 1) of cells.');
            }
            param1.writeVarShort(this.cells[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.referenceIds.length);
        var _loc3_ = 0;
        while (_loc3_ < this.referenceIds.length) {
            if (this.referenceIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.referenceIds[_loc3_] + ') on element 2 (starting at 1) of referenceIds.');
            }
            param1.writeVarShort(this.referenceIds[_loc3_]);
            _loc3_++;
        }
    };
    ObjectGroundListAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectGroundListAddedMessage(param1);
    };
    ObjectGroundListAddedMessage.prototype.deserializeAs_ObjectGroundListAddedMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0 || _loc6_ > 559) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of cells.');
            }
            this.cells.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhShort();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of referenceIds.');
            }
            this.referenceIds.push(_loc7_);
            _loc5_++;
        }
    };
    ObjectGroundListAddedMessage.ID = 5925;
    return ObjectGroundListAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectGroundListAddedMessage;
