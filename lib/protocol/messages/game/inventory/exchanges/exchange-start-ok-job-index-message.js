/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkJobIndexMessage = (function (_super) {
    __extends(ExchangeStartOkJobIndexMessage, _super);
    function ExchangeStartOkJobIndexMessage() {
        this.jobs = [];
        _super.call(this);
    }
    ExchangeStartOkJobIndexMessage.prototype.getMessageId = function () {
        return ExchangeStartOkJobIndexMessage.ID;
    };
    ExchangeStartOkJobIndexMessage.prototype.reset = function () {
        this.jobs = [];
    };
    ExchangeStartOkJobIndexMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkJobIndexMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkJobIndexMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkJobIndexMessage(param1);
    };
    ExchangeStartOkJobIndexMessage.prototype.serializeAs_ExchangeStartOkJobIndexMessage = function (param1) {
        param1.writeShort(this.jobs.length);
        var _loc2_ = 0;
        while (_loc2_ < this.jobs.length) {
            if (this.jobs[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.jobs[_loc2_] + ') on element 1 (starting at 1) of jobs.');
            }
            param1.writeVarInt(this.jobs[_loc2_]);
            _loc2_++;
        }
    };
    ExchangeStartOkJobIndexMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkJobIndexMessage(param1);
    };
    ExchangeStartOkJobIndexMessage.prototype.deserializeAs_ExchangeStartOkJobIndexMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of jobs.');
            }
            this.jobs.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartOkJobIndexMessage.ID = 5819;
    return ExchangeStartOkJobIndexMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkJobIndexMessage;
