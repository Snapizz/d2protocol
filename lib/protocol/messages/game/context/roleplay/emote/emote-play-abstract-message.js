/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var EmotePlayAbstractMessage = (function (_super) {
    __extends(EmotePlayAbstractMessage, _super);
    function EmotePlayAbstractMessage() {
        this.emoteId = 0;
        this.emoteStartTime = 0;
        _super.call(this);
    }
    EmotePlayAbstractMessage.prototype.getMessageId = function () {
        return EmotePlayAbstractMessage.ID;
    };
    EmotePlayAbstractMessage.prototype.reset = function () {
        this.emoteId = 0;
        this.emoteStartTime = 0;
    };
    EmotePlayAbstractMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    EmotePlayAbstractMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    EmotePlayAbstractMessage.prototype.serialize = function (param1) {
        this.serializeAs_EmotePlayAbstractMessage(param1);
    };
    EmotePlayAbstractMessage.prototype.serializeAs_EmotePlayAbstractMessage = function (param1) {
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
        }
        param1.writeDouble(this.emoteStartTime);
    };
    EmotePlayAbstractMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_EmotePlayAbstractMessage(param1);
    };
    EmotePlayAbstractMessage.prototype.deserializeAs_EmotePlayAbstractMessage = function (param1) {
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of EmotePlayAbstractMessage.emoteId.');
        }
        this.emoteStartTime = param1.readDouble();
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of EmotePlayAbstractMessage.emoteStartTime.');
        }
    };
    EmotePlayAbstractMessage.ID = 5690;
    return EmotePlayAbstractMessage;
})(network_message_1.NetworkMessage);
module.exports = EmotePlayAbstractMessage;
