/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentificationMessage = require('./identification-message');
var IdentificationAccountForceMessage = (function (_super) {
    __extends(IdentificationAccountForceMessage, _super);
    function IdentificationAccountForceMessage() {
        this.forcedAccountLogin = '';
        _super.call(this);
    }
    IdentificationAccountForceMessage.prototype.getMessageId = function () {
        return IdentificationAccountForceMessage.ID;
    };
    IdentificationAccountForceMessage.prototype.reset = function () {
        this.forcedAccountLogin = '';
    };
    IdentificationAccountForceMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationAccountForceMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationAccountForceMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationAccountForceMessage(param1);
    };
    IdentificationAccountForceMessage.prototype.serializeAs_IdentificationAccountForceMessage = function (param1) {
        _super.prototype.serializeAs_IdentificationMessage.call(this, param1);
        param1.writeUTF(this.forcedAccountLogin);
    };
    IdentificationAccountForceMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationAccountForceMessage(param1);
    };
    IdentificationAccountForceMessage.prototype.deserializeAs_IdentificationAccountForceMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.forcedAccountLogin = param1.readUTF();
    };
    IdentificationAccountForceMessage.ID = 6119;
    return IdentificationAccountForceMessage;
})(IdentificationMessage);
module.exports = IdentificationAccountForceMessage;
