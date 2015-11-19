/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EmotePlayAbstractMessage = require('./emote-play-abstract-message');
var EmotePlayMassiveMessage = (function (_super) {
    __extends(EmotePlayMassiveMessage, _super);
    function EmotePlayMassiveMessage() {
        this.actorIds = [];
        _super.call(this);
    }
    EmotePlayMassiveMessage.prototype.getMessageId = function () {
        return EmotePlayMassiveMessage.ID;
    };
    EmotePlayMassiveMessage.prototype.reset = function () {
        this.actorIds = [];
    };
    EmotePlayMassiveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmotePlayMassiveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmotePlayMassiveMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmotePlayMassiveMessage(param1);
    };
    EmotePlayMassiveMessage.prototype.serializeAs_EmotePlayMassiveMessage = function (param1) {
        _super.prototype.serializeAs_EmotePlayAbstractMessage.call(this, param1);
        param1.writeShort(this.actorIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.actorIds.length) {
            param1.writeInt(this.actorIds[_loc2_]);
            _loc2_++;
        }
    };
    EmotePlayMassiveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmotePlayMassiveMessage(param1);
    };
    EmotePlayMassiveMessage.prototype.deserializeAs_EmotePlayMassiveMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.actorIds.push(_loc4_);
            _loc3_++;
        }
    };
    EmotePlayMassiveMessage.ID = 5691;
    return EmotePlayMassiveMessage;
})(EmotePlayAbstractMessage);
module.exports = EmotePlayMassiveMessage;
