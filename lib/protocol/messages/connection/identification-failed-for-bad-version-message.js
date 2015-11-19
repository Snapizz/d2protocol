/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdentificationFailedMessage = require('./identification-failed-message');
var Version = require('../../types/version/version');
var IdentificationFailedForBadVersionMessage = (function (_super) {
    __extends(IdentificationFailedForBadVersionMessage, _super);
    function IdentificationFailedForBadVersionMessage() {
        this.requiredVersion = new Version();
        _super.call(this);
    }
    IdentificationFailedForBadVersionMessage.prototype.getMessageId = function () {
        return IdentificationFailedForBadVersionMessage.ID;
    };
    IdentificationFailedForBadVersionMessage.prototype.reset = function () {
        this.requiredVersion = new Version();
    };
    IdentificationFailedForBadVersionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdentificationFailedForBadVersionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdentificationFailedForBadVersionMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdentificationFailedForBadVersionMessage(param1);
    };
    IdentificationFailedForBadVersionMessage.prototype.serializeAs_IdentificationFailedForBadVersionMessage = function (param1) {
        _super.prototype.serializeAs_IdentificationFailedMessage.call(this, param1);
        this.requiredVersion.serializeAs_Version(param1);
    };
    IdentificationFailedForBadVersionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdentificationFailedForBadVersionMessage(param1);
    };
    IdentificationFailedForBadVersionMessage.prototype.deserializeAs_IdentificationFailedForBadVersionMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.requiredVersion = new Version();
        this.requiredVersion.deserialize(param1);
    };
    IdentificationFailedForBadVersionMessage.ID = 21;
    return IdentificationFailedForBadVersionMessage;
})(IdentificationFailedMessage);
module.exports = IdentificationFailedForBadVersionMessage;
