/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = require('./abstract-party-message');
var AbstractPartyEventMessage = (function (_super) {
    __extends(AbstractPartyEventMessage, _super);
    function AbstractPartyEventMessage() {
        _super.call(this);
    }
    AbstractPartyEventMessage.prototype.getMessageId = function () {
        return AbstractPartyEventMessage.ID;
    };
    AbstractPartyEventMessage.prototype.reset = function () {
    };
    AbstractPartyEventMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractPartyEventMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractPartyEventMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractPartyEventMessage(param1);
    };
    AbstractPartyEventMessage.prototype.serializeAs_AbstractPartyEventMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
    };
    AbstractPartyEventMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractPartyEventMessage(param1);
    };
    AbstractPartyEventMessage.prototype.deserializeAs_AbstractPartyEventMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    AbstractPartyEventMessage.ID = 6273;
    return AbstractPartyEventMessage;
})(AbstractPartyMessage);
module.exports = AbstractPartyEventMessage;
