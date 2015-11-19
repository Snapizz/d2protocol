/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AcquaintanceServerListMessage = (function (_super) {
    __extends(AcquaintanceServerListMessage, _super);
    function AcquaintanceServerListMessage() {
        this.servers = [];
        _super.call(this);
    }
    AcquaintanceServerListMessage.prototype.getMessageId = function () {
        return AcquaintanceServerListMessage.ID;
    };
    AcquaintanceServerListMessage.prototype.reset = function () {
        this.servers = [];
    };
    AcquaintanceServerListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AcquaintanceServerListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AcquaintanceServerListMessage.prototype.serialize = function (param1) {
        this.serializeAs_AcquaintanceServerListMessage(param1);
    };
    AcquaintanceServerListMessage.prototype.serializeAs_AcquaintanceServerListMessage = function (param1) {
        param1.writeShort(this.servers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.servers.length) {
            if (this.servers[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.servers[_loc2_] + ') on element 1 (starting at 1) of servers.');
            }
            param1.writeVarShort(this.servers[_loc2_]);
            _loc2_++;
        }
    };
    AcquaintanceServerListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AcquaintanceServerListMessage(param1);
    };
    AcquaintanceServerListMessage.prototype.deserializeAs_AcquaintanceServerListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of servers.');
            }
            this.servers.push(_loc4_);
            _loc3_++;
        }
    };
    AcquaintanceServerListMessage.ID = 6142;
    return AcquaintanceServerListMessage;
})(network_message_1.NetworkMessage);
module.exports = AcquaintanceServerListMessage;
