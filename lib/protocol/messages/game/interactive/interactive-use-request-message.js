/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveUseRequestMessage = (function (_super) {
    __extends(InteractiveUseRequestMessage, _super);
    function InteractiveUseRequestMessage() {
        this.elemId = 0;
        this.skillInstanceUid = 0;
        _super.call(this);
    }
    InteractiveUseRequestMessage.prototype.getMessageId = function () {
        return InteractiveUseRequestMessage.ID;
    };
    InteractiveUseRequestMessage.prototype.reset = function () {
        this.elemId = 0;
        this.skillInstanceUid = 0;
    };
    InteractiveUseRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveUseRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveUseRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveUseRequestMessage(param1);
    };
    InteractiveUseRequestMessage.prototype.serializeAs_InteractiveUseRequestMessage = function (param1) {
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
        }
        param1.writeVarInt(this.skillInstanceUid);
    };
    InteractiveUseRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveUseRequestMessage(param1);
    };
    InteractiveUseRequestMessage.prototype.deserializeAs_InteractiveUseRequestMessage = function (param1) {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUseRequestMessage.elemId.');
        }
        this.skillInstanceUid = param1.readVarUhInt();
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveUseRequestMessage.skillInstanceUid.');
        }
    };
    InteractiveUseRequestMessage.ID = 5001;
    return InteractiveUseRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveUseRequestMessage;
