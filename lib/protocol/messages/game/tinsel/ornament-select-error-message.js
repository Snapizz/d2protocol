/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var OrnamentSelectErrorMessage = (function (_super) {
    __extends(OrnamentSelectErrorMessage, _super);
    function OrnamentSelectErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    OrnamentSelectErrorMessage.prototype.getMessageId = function () {
        return OrnamentSelectErrorMessage.ID;
    };
    OrnamentSelectErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    OrnamentSelectErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    OrnamentSelectErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    OrnamentSelectErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_OrnamentSelectErrorMessage(param1);
    };
    OrnamentSelectErrorMessage.prototype.serializeAs_OrnamentSelectErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    OrnamentSelectErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_OrnamentSelectErrorMessage(param1);
    };
    OrnamentSelectErrorMessage.prototype.deserializeAs_OrnamentSelectErrorMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of OrnamentSelectErrorMessage.reason.');
        }
    };
    OrnamentSelectErrorMessage.ID = 6370;
    return OrnamentSelectErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = OrnamentSelectErrorMessage;
