/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EnabledChannelsMessage = (function (_super) {
    __extends(EnabledChannelsMessage, _super);
    function EnabledChannelsMessage() {
        this.channels = [];
        this.disallowed = [];
        _super.call(this);
    }
    EnabledChannelsMessage.prototype.getMessageId = function () {
        return EnabledChannelsMessage.ID;
    };
    EnabledChannelsMessage.prototype.reset = function () {
        this.channels = [];
        this.disallowed = [];
    };
    EnabledChannelsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EnabledChannelsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EnabledChannelsMessage.prototype.serialize = function (param1) {
        this.serializeAs_EnabledChannelsMessage(param1);
    };
    EnabledChannelsMessage.prototype.serializeAs_EnabledChannelsMessage = function (param1) {
        param1.writeShort(this.channels.length);
        var _loc2_ = 0;
        while (_loc2_ < this.channels.length) {
            param1.writeByte(this.channels[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.disallowed.length);
        var _loc3_ = 0;
        while (_loc3_ < this.disallowed.length) {
            param1.writeByte(this.disallowed[_loc3_]);
            _loc3_++;
        }
    };
    EnabledChannelsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EnabledChannelsMessage(param1);
    };
    EnabledChannelsMessage.prototype.deserializeAs_EnabledChannelsMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readByte();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of channels.');
            }
            this.channels.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readByte();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of disallowed.');
            }
            this.disallowed.push(_loc7_);
            _loc5_++;
        }
    };
    EnabledChannelsMessage.ID = 892;
    return EnabledChannelsMessage;
})(network_message_1.NetworkMessage);
module.exports = EnabledChannelsMessage;
