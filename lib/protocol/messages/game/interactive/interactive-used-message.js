/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveUsedMessage = (function (_super) {
    __extends(InteractiveUsedMessage, _super);
    function InteractiveUsedMessage() {
        this.entityId = 0;
        this.elemId = 0;
        this.skillId = 0;
        this.duration = 0;
        _super.call(this);
    }
    InteractiveUsedMessage.prototype.getMessageId = function () {
        return InteractiveUsedMessage.ID;
    };
    InteractiveUsedMessage.prototype.reset = function () {
        this.entityId = 0;
        this.elemId = 0;
        this.skillId = 0;
        this.duration = 0;
    };
    InteractiveUsedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveUsedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveUsedMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveUsedMessage(param1);
    };
    InteractiveUsedMessage.prototype.serializeAs_InteractiveUsedMessage = function (param1) {
        if (this.entityId < 0) {
            throw new Error('Forbidden value (' + this.entityId + ') on element entityId.');
        }
        param1.writeVarInt(this.entityId);
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeVarShort(this.duration);
    };
    InteractiveUsedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveUsedMessage(param1);
    };
    InteractiveUsedMessage.prototype.deserializeAs_InteractiveUsedMessage = function (param1) {
        this.entityId = param1.readVarUhInt();
        if (this.entityId < 0) {
            throw new Error('Forbidden value (' + this.entityId + ') on element of InteractiveUsedMessage.entityId.');
        }
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUsedMessage.elemId.');
        }
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveUsedMessage.skillId.');
        }
        this.duration = param1.readVarUhShort();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of InteractiveUsedMessage.duration.');
        }
    };
    InteractiveUsedMessage.ID = 5745;
    return InteractiveUsedMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveUsedMessage;
