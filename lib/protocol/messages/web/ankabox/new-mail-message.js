/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MailStatusMessage = require('./mail-status-message');
var NewMailMessage = (function (_super) {
    __extends(NewMailMessage, _super);
    function NewMailMessage() {
        this.sendersAccountId = [];
        _super.call(this);
    }
    NewMailMessage.prototype.getMessageId = function () {
        return NewMailMessage.ID;
    };
    NewMailMessage.prototype.reset = function () {
        this.sendersAccountId = [];
    };
    NewMailMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NewMailMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NewMailMessage.prototype.serialize = function (param1) {
        this.serializeAs_NewMailMessage(param1);
    };
    NewMailMessage.prototype.serializeAs_NewMailMessage = function (param1) {
        _super.prototype.serializeAs_MailStatusMessage.call(this, param1);
        param1.writeShort(this.sendersAccountId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.sendersAccountId.length) {
            if (this.sendersAccountId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.sendersAccountId[_loc2_] + ') on element 1 (starting at 1) of sendersAccountId.');
            }
            param1.writeInt(this.sendersAccountId[_loc2_]);
            _loc2_++;
        }
    };
    NewMailMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NewMailMessage(param1);
    };
    NewMailMessage.prototype.deserializeAs_NewMailMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of sendersAccountId.');
            }
            this.sendersAccountId.push(_loc4_);
            _loc3_++;
        }
    };
    NewMailMessage.ID = 6292;
    return NewMailMessage;
})(MailStatusMessage);
module.exports = NewMailMessage;
