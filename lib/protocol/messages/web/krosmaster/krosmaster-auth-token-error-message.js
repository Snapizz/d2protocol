/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterAuthTokenErrorMessage = (function (_super) {
    __extends(KrosmasterAuthTokenErrorMessage, _super);
    function KrosmasterAuthTokenErrorMessage() {
        this.reason = 0;
        _super.call(this);
    }
    KrosmasterAuthTokenErrorMessage.prototype.getMessageId = function () {
        return KrosmasterAuthTokenErrorMessage.ID;
    };
    KrosmasterAuthTokenErrorMessage.prototype.reset = function () {
        this.reason = 0;
    };
    KrosmasterAuthTokenErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterAuthTokenErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterAuthTokenErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterAuthTokenErrorMessage(param1);
    };
    KrosmasterAuthTokenErrorMessage.prototype.serializeAs_KrosmasterAuthTokenErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    KrosmasterAuthTokenErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterAuthTokenErrorMessage(param1);
    };
    KrosmasterAuthTokenErrorMessage.prototype.deserializeAs_KrosmasterAuthTokenErrorMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of KrosmasterAuthTokenErrorMessage.reason.');
        }
    };
    KrosmasterAuthTokenErrorMessage.ID = 6345;
    return KrosmasterAuthTokenErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterAuthTokenErrorMessage;
