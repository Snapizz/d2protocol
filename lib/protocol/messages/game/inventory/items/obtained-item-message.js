/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObtainedItemMessage = (function (_super) {
    __extends(ObtainedItemMessage, _super);
    function ObtainedItemMessage() {
        this.genericId = 0;
        this.baseQuantity = 0;
        _super.call(this);
    }
    ObtainedItemMessage.prototype.getMessageId = function () {
        return ObtainedItemMessage.ID;
    };
    ObtainedItemMessage.prototype.reset = function () {
        this.genericId = 0;
        this.baseQuantity = 0;
    };
    ObtainedItemMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObtainedItemMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObtainedItemMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObtainedItemMessage(param1);
    };
    ObtainedItemMessage.prototype.serializeAs_ObtainedItemMessage = function (param1) {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        if (this.baseQuantity < 0) {
            throw new Error('Forbidden value (' + this.baseQuantity + ') on element baseQuantity.');
        }
        param1.writeVarInt(this.baseQuantity);
    };
    ObtainedItemMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObtainedItemMessage(param1);
    };
    ObtainedItemMessage.prototype.deserializeAs_ObtainedItemMessage = function (param1) {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ObtainedItemMessage.genericId.');
        }
        this.baseQuantity = param1.readVarUhInt();
        if (this.baseQuantity < 0) {
            throw new Error('Forbidden value (' + this.baseQuantity + ') on element of ObtainedItemMessage.baseQuantity.');
        }
    };
    ObtainedItemMessage.ID = 6519;
    return ObtainedItemMessage;
})(network_message_1.NetworkMessage);
module.exports = ObtainedItemMessage;
