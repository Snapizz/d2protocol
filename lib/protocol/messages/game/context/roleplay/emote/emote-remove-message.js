/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EmoteRemoveMessage = (function (_super) {
    __extends(EmoteRemoveMessage, _super);
    function EmoteRemoveMessage() {
        this.emoteId = 0;
        _super.call(this);
    }
    EmoteRemoveMessage.prototype.getMessageId = function () {
        return EmoteRemoveMessage.ID;
    };
    EmoteRemoveMessage.prototype.reset = function () {
        this.emoteId = 0;
    };
    EmoteRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmoteRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmoteRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmoteRemoveMessage(param1);
    };
    EmoteRemoveMessage.prototype.serializeAs_EmoteRemoveMessage = function (param1) {
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
    };
    EmoteRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmoteRemoveMessage(param1);
    };
    EmoteRemoveMessage.prototype.deserializeAs_EmoteRemoveMessage = function (param1) {
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of EmoteRemoveMessage.emoteId.');
        }
    };
    EmoteRemoveMessage.ID = 5687;
    return EmoteRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = EmoteRemoveMessage;
