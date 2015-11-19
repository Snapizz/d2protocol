/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SelectedServerDataMessage = require('./selected-server-data-message');
var SelectedServerDataExtendedMessage = (function (_super) {
    __extends(SelectedServerDataExtendedMessage, _super);
    function SelectedServerDataExtendedMessage() {
        this.serverIds = [];
        _super.call(this);
    }
    SelectedServerDataExtendedMessage.prototype.getMessageId = function () {
        return SelectedServerDataExtendedMessage.ID;
    };
    SelectedServerDataExtendedMessage.prototype.reset = function () {
        this.serverIds = [];
    };
    SelectedServerDataExtendedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SelectedServerDataExtendedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SelectedServerDataExtendedMessage.prototype.serialize = function (param1) {
        this.serializeAs_SelectedServerDataExtendedMessage(param1);
    };
    SelectedServerDataExtendedMessage.prototype.serializeAs_SelectedServerDataExtendedMessage = function (param1) {
        _super.prototype.serializeAs_SelectedServerDataMessage.call(this, param1);
        param1.writeShort(this.serverIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.serverIds.length) {
            if (this.serverIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.serverIds[_loc2_] + ') on element 1 (starting at 1) of serverIds.');
            }
            param1.writeVarShort(this.serverIds[_loc2_]);
            _loc2_++;
        }
    };
    SelectedServerDataExtendedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SelectedServerDataExtendedMessage(param1);
    };
    SelectedServerDataExtendedMessage.prototype.deserializeAs_SelectedServerDataExtendedMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of serverIds.');
            }
            this.serverIds.push(_loc4_);
            _loc3_++;
        }
    };
    SelectedServerDataExtendedMessage.ID = 6469;
    return SelectedServerDataExtendedMessage;
})(SelectedServerDataMessage);
module.exports = SelectedServerDataExtendedMessage;
