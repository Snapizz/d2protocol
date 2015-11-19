/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveUseEndedMessage = (function (_super) {
    __extends(InteractiveUseEndedMessage, _super);
    function InteractiveUseEndedMessage() {
        this.elemId = 0;
        this.skillId = 0;
        _super.call(this);
    }
    InteractiveUseEndedMessage.prototype.getMessageId = function () {
        return InteractiveUseEndedMessage.ID;
    };
    InteractiveUseEndedMessage.prototype.reset = function () {
        this.elemId = 0;
        this.skillId = 0;
    };
    InteractiveUseEndedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveUseEndedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveUseEndedMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveUseEndedMessage(param1);
    };
    InteractiveUseEndedMessage.prototype.serializeAs_InteractiveUseEndedMessage = function (param1) {
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);
    };
    InteractiveUseEndedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveUseEndedMessage(param1);
    };
    InteractiveUseEndedMessage.prototype.deserializeAs_InteractiveUseEndedMessage = function (param1) {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUseEndedMessage.elemId.');
        }
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveUseEndedMessage.skillId.');
        }
    };
    InteractiveUseEndedMessage.ID = 6112;
    return InteractiveUseEndedMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveUseEndedMessage;
