/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EmotePlayErrorMessage = (function (_super) {
    __extends(EmotePlayErrorMessage, _super);
    function EmotePlayErrorMessage() {
        this.emoteId = 0;
        _super.call(this);
    }
    EmotePlayErrorMessage.prototype.getMessageId = function () {
        return EmotePlayErrorMessage.ID;
    };
    EmotePlayErrorMessage.prototype.reset = function () {
        this.emoteId = 0;
    };
    EmotePlayErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmotePlayErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmotePlayErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmotePlayErrorMessage(param1);
    };
    EmotePlayErrorMessage.prototype.serializeAs_EmotePlayErrorMessage = function (param1) {
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
    };
    EmotePlayErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmotePlayErrorMessage(param1);
    };
    EmotePlayErrorMessage.prototype.deserializeAs_EmotePlayErrorMessage = function (param1) {
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of EmotePlayErrorMessage.emoteId.');
        }
    };
    EmotePlayErrorMessage.ID = 5688;
    return EmotePlayErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = EmotePlayErrorMessage;
