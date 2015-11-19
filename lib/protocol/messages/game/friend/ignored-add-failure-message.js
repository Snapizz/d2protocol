/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IgnoredAddFailureMessage = (function (_super) {
    __extends(IgnoredAddFailureMessage, _super);
    function IgnoredAddFailureMessage() {
        this.reason = 0;
        _super.call(this);
    }
    IgnoredAddFailureMessage.prototype.getMessageId = function () {
        return IgnoredAddFailureMessage.ID;
    };
    IgnoredAddFailureMessage.prototype.reset = function () {
        this.reason = 0;
    };
    IgnoredAddFailureMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredAddFailureMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredAddFailureMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredAddFailureMessage(param1);
    };
    IgnoredAddFailureMessage.prototype.serializeAs_IgnoredAddFailureMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    IgnoredAddFailureMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredAddFailureMessage(param1);
    };
    IgnoredAddFailureMessage.prototype.deserializeAs_IgnoredAddFailureMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of IgnoredAddFailureMessage.reason.');
        }
    };
    IgnoredAddFailureMessage.ID = 5679;
    return IgnoredAddFailureMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredAddFailureMessage;
