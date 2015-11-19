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
var EmotePlayMessage = (function (_super) {
    __extends(EmotePlayMessage, _super);
    function EmotePlayMessage() {
        this.actorId = 0;
        this.accountId = 0;
        _super.call(this);
    }
    EmotePlayMessage.prototype.getMessageId = function () {
        return EmotePlayMessage.ID;
    };
    EmotePlayMessage.prototype.reset = function () {
        this.actorId = 0;
        this.accountId = 0;
    };
    EmotePlayMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmotePlayMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmotePlayMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmotePlayMessage(param1);
    };
    EmotePlayMessage.prototype.serializeAs_EmotePlayMessage = function (param1) {
        _super.prototype.serializeAs_EmotePlayAbstractMessage.call(this, param1);
        param1.writeInt(this.actorId);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
    };
    EmotePlayMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmotePlayMessage(param1);
    };
    EmotePlayMessage.prototype.deserializeAs_EmotePlayMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.actorId = param1.readInt();
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of EmotePlayMessage.accountId.');
        }
    };
    EmotePlayMessage.ID = 5683;
    return EmotePlayMessage;
})(EmotePlayAbstractMessage);
module.exports = EmotePlayMessage;
