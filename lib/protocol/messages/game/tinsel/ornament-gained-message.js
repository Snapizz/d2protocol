/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var OrnamentGainedMessage = (function (_super) {
    __extends(OrnamentGainedMessage, _super);
    function OrnamentGainedMessage() {
        this.ornamentId = 0;
        _super.call(this);
    }
    OrnamentGainedMessage.prototype.getMessageId = function () {
        return OrnamentGainedMessage.ID;
    };
    OrnamentGainedMessage.prototype.reset = function () {
        this.ornamentId = 0;
    };
    OrnamentGainedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    OrnamentGainedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    OrnamentGainedMessage.prototype.serialize = function (param1) {
        this.serializeAs_OrnamentGainedMessage(param1);
    };
    OrnamentGainedMessage.prototype.serializeAs_OrnamentGainedMessage = function (param1) {
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeShort(this.ornamentId);
    };
    OrnamentGainedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_OrnamentGainedMessage(param1);
    };
    OrnamentGainedMessage.prototype.deserializeAs_OrnamentGainedMessage = function (param1) {
        this.ornamentId = param1.readShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of OrnamentGainedMessage.ornamentId.');
        }
    };
    OrnamentGainedMessage.ID = 6368;
    return OrnamentGainedMessage;
})(network_message_1.NetworkMessage);
module.exports = OrnamentGainedMessage;
