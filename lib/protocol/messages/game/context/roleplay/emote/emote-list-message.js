/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EmoteListMessage = (function (_super) {
    __extends(EmoteListMessage, _super);
    function EmoteListMessage() {
        this.emoteIds = [];
        _super.call(this);
    }
    EmoteListMessage.prototype.getMessageId = function () {
        return EmoteListMessage.ID;
    };
    EmoteListMessage.prototype.reset = function () {
        this.emoteIds = [];
    };
    EmoteListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmoteListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmoteListMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmoteListMessage(param1);
    };
    EmoteListMessage.prototype.serializeAs_EmoteListMessage = function (param1) {
        param1.writeShort(this.emoteIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.emoteIds.length) {
            if (this.emoteIds[_loc2_] < 0 || this.emoteIds[_loc2_] > 255) {
                throw new Error('Forbidden value (' + this.emoteIds[_loc2_] + ') on element 1 (starting at 1) of emoteIds.');
            }
            param1.writeByte(this.emoteIds[_loc2_]);
            _loc2_++;
        }
    };
    EmoteListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmoteListMessage(param1);
    };
    EmoteListMessage.prototype.deserializeAs_EmoteListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedByte();
            if (_loc4_ < 0 || _loc4_ > 255) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of emoteIds.');
            }
            this.emoteIds.push(_loc4_);
            _loc3_++;
        }
    };
    EmoteListMessage.ID = 5689;
    return EmoteListMessage;
})(network_message_1.NetworkMessage);
module.exports = EmoteListMessage;
