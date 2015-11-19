/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AccessoryPreviewRequestMessage = (function (_super) {
    __extends(AccessoryPreviewRequestMessage, _super);
    function AccessoryPreviewRequestMessage() {
        this.genericId = [];
        _super.call(this);
    }
    AccessoryPreviewRequestMessage.prototype.getMessageId = function () {
        return AccessoryPreviewRequestMessage.ID;
    };
    AccessoryPreviewRequestMessage.prototype.reset = function () {
        this.genericId = [];
    };
    AccessoryPreviewRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AccessoryPreviewRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AccessoryPreviewRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_AccessoryPreviewRequestMessage(param1);
    };
    AccessoryPreviewRequestMessage.prototype.serializeAs_AccessoryPreviewRequestMessage = function (param1) {
        param1.writeShort(this.genericId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.genericId.length) {
            if (this.genericId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.genericId[_loc2_] + ') on element 1 (starting at 1) of genericId.');
            }
            param1.writeVarShort(this.genericId[_loc2_]);
            _loc2_++;
        }
    };
    AccessoryPreviewRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AccessoryPreviewRequestMessage(param1);
    };
    AccessoryPreviewRequestMessage.prototype.deserializeAs_AccessoryPreviewRequestMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of genericId.');
            }
            this.genericId.push(_loc4_);
            _loc3_++;
        }
    };
    AccessoryPreviewRequestMessage.ID = 6518;
    return AccessoryPreviewRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = AccessoryPreviewRequestMessage;
