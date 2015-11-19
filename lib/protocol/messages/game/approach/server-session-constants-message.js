/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ServerSessionConstant = require('../../../types/game/approach/server-session-constant');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var ServerSessionConstantsMessage = (function (_super) {
    __extends(ServerSessionConstantsMessage, _super);
    function ServerSessionConstantsMessage() {
        this.variables = [];
        _super.call(this);
    }
    ServerSessionConstantsMessage.prototype.getMessageId = function () {
        return ServerSessionConstantsMessage.ID;
    };
    ServerSessionConstantsMessage.prototype.reset = function () {
        this.variables = [];
    };
    ServerSessionConstantsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServerSessionConstantsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServerSessionConstantsMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServerSessionConstantsMessage(param1);
    };
    ServerSessionConstantsMessage.prototype.serializeAs_ServerSessionConstantsMessage = function (param1) {
        param1.writeShort(this.variables.length);
        var _loc2_ = 0;
        while (_loc2_ < this.variables.length) {
            param1.writeShort((this.variables[_loc2_]).getTypeId());
            (this.variables[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    ServerSessionConstantsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSessionConstantsMessage(param1);
    };
    ServerSessionConstantsMessage.prototype.deserializeAs_ServerSessionConstantsMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(ServerSessionConstant, _loc4_);
            _loc5_.deserialize(param1);
            this.variables.push(_loc5_);
            _loc3_++;
        }
    };
    ServerSessionConstantsMessage.ID = 6434;
    return ServerSessionConstantsMessage;
})(network_message_1.NetworkMessage);
module.exports = ServerSessionConstantsMessage;
