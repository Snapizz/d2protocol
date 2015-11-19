/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IgnoredAddRequestMessage = (function (_super) {
    __extends(IgnoredAddRequestMessage, _super);
    function IgnoredAddRequestMessage() {
        this.name = '';
        this.session = false;
        _super.call(this);
    }
    IgnoredAddRequestMessage.prototype.getMessageId = function () {
        return IgnoredAddRequestMessage.ID;
    };
    IgnoredAddRequestMessage.prototype.reset = function () {
        this.name = '';
        this.session = false;
    };
    IgnoredAddRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IgnoredAddRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IgnoredAddRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_IgnoredAddRequestMessage(param1);
    };
    IgnoredAddRequestMessage.prototype.serializeAs_IgnoredAddRequestMessage = function (param1) {
        param1.writeUTF(this.name);
        param1.writeBoolean(this.session);
    };
    IgnoredAddRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IgnoredAddRequestMessage(param1);
    };
    IgnoredAddRequestMessage.prototype.deserializeAs_IgnoredAddRequestMessage = function (param1) {
        this.name = param1.readUTF();
        this.session = param1.readBoolean();
    };
    IgnoredAddRequestMessage.ID = 5673;
    return IgnoredAddRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = IgnoredAddRequestMessage;
