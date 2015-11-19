/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismUseRequestMessage = (function (_super) {
    __extends(PrismUseRequestMessage, _super);
    function PrismUseRequestMessage() {
        this.moduleToUse = 0;
        _super.call(this);
    }
    PrismUseRequestMessage.prototype.getMessageId = function () {
        return PrismUseRequestMessage.ID;
    };
    PrismUseRequestMessage.prototype.reset = function () {
        this.moduleToUse = 0;
    };
    PrismUseRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismUseRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismUseRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismUseRequestMessage(param1);
    };
    PrismUseRequestMessage.prototype.serializeAs_PrismUseRequestMessage = function (param1) {
        param1.writeByte(this.moduleToUse);
    };
    PrismUseRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismUseRequestMessage(param1);
    };
    PrismUseRequestMessage.prototype.deserializeAs_PrismUseRequestMessage = function (param1) {
        this.moduleToUse = param1.readByte();
        if (this.moduleToUse < 0) {
            throw new Error('Forbidden value (' + this.moduleToUse + ') on element of PrismUseRequestMessage.moduleToUse.');
        }
    };
    PrismUseRequestMessage.ID = 6041;
    return PrismUseRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismUseRequestMessage;
