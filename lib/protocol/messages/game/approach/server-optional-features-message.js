/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ServerOptionalFeaturesMessage = (function (_super) {
    __extends(ServerOptionalFeaturesMessage, _super);
    function ServerOptionalFeaturesMessage() {
        this.features = [];
        _super.call(this);
    }
    ServerOptionalFeaturesMessage.prototype.getMessageId = function () {
        return ServerOptionalFeaturesMessage.ID;
    };
    ServerOptionalFeaturesMessage.prototype.reset = function () {
        this.features = [];
    };
    ServerOptionalFeaturesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServerOptionalFeaturesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServerOptionalFeaturesMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServerOptionalFeaturesMessage(param1);
    };
    ServerOptionalFeaturesMessage.prototype.serializeAs_ServerOptionalFeaturesMessage = function (param1) {
        param1.writeShort(this.features.length);
        var _loc2_ = 0;
        while (_loc2_ < this.features.length) {
            if (this.features[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.features[_loc2_] + ') on element 1 (starting at 1) of features.');
            }
            param1.writeByte(this.features[_loc2_]);
            _loc2_++;
        }
    };
    ServerOptionalFeaturesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerOptionalFeaturesMessage(param1);
    };
    ServerOptionalFeaturesMessage.prototype.deserializeAs_ServerOptionalFeaturesMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of features.');
            }
            this.features.push(_loc4_);
            _loc3_++;
        }
    };
    ServerOptionalFeaturesMessage.ID = 6305;
    return ServerOptionalFeaturesMessage;
})(network_message_1.NetworkMessage);
module.exports = ServerOptionalFeaturesMessage;
