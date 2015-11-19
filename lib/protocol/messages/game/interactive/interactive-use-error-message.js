/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InteractiveUseErrorMessage = (function (_super) {
    __extends(InteractiveUseErrorMessage, _super);
    function InteractiveUseErrorMessage() {
        this.elemId = 0;
        this.skillInstanceUid = 0;
        _super.call(this);
    }
    InteractiveUseErrorMessage.prototype.getMessageId = function () {
        return InteractiveUseErrorMessage.ID;
    };
    InteractiveUseErrorMessage.prototype.reset = function () {
        this.elemId = 0;
        this.skillInstanceUid = 0;
    };
    InteractiveUseErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InteractiveUseErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InteractiveUseErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveUseErrorMessage(param1);
    };
    InteractiveUseErrorMessage.prototype.serializeAs_InteractiveUseErrorMessage = function (param1) {
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element elemId.');
        }
        param1.writeVarInt(this.elemId);
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
        }
        param1.writeVarInt(this.skillInstanceUid);
    };
    InteractiveUseErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveUseErrorMessage(param1);
    };
    InteractiveUseErrorMessage.prototype.deserializeAs_InteractiveUseErrorMessage = function (param1) {
        this.elemId = param1.readVarUhInt();
        if (this.elemId < 0) {
            throw new Error('Forbidden value (' + this.elemId + ') on element of InteractiveUseErrorMessage.elemId.');
        }
        this.skillInstanceUid = param1.readVarUhInt();
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveUseErrorMessage.skillInstanceUid.');
        }
    };
    InteractiveUseErrorMessage.ID = 6384;
    return InteractiveUseErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = InteractiveUseErrorMessage;
