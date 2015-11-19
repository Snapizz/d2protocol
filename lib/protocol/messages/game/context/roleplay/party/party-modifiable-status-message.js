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
var PartyModifiableStatusMessage = (function (_super) {
    __extends(PartyModifiableStatusMessage, _super);
    function PartyModifiableStatusMessage() {
        this.enabled = false;
        _super.call(this);
    }
    PartyModifiableStatusMessage.prototype.getMessageId = function () {
        return PartyModifiableStatusMessage.ID;
    };
    PartyModifiableStatusMessage.prototype.reset = function () {
        this.enabled = false;
    };
    PartyModifiableStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyModifiableStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyModifiableStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyModifiableStatusMessage(param1);
    };
    PartyModifiableStatusMessage.prototype.serializeAs_PartyModifiableStatusMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeBoolean(this.enabled);
    };
    PartyModifiableStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyModifiableStatusMessage(param1);
    };
    PartyModifiableStatusMessage.prototype.deserializeAs_PartyModifiableStatusMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.enabled = param1.readBoolean();
    };
    PartyModifiableStatusMessage.ID = 6277;
    return PartyModifiableStatusMessage;
})(AbstractPartyMessage);
module.exports = PartyModifiableStatusMessage;
