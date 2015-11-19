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
var PartyRestrictedMessage = (function (_super) {
    __extends(PartyRestrictedMessage, _super);
    function PartyRestrictedMessage() {
        this.restricted = false;
        _super.call(this);
    }
    PartyRestrictedMessage.prototype.getMessageId = function () {
        return PartyRestrictedMessage.ID;
    };
    PartyRestrictedMessage.prototype.reset = function () {
        this.restricted = false;
    };
    PartyRestrictedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyRestrictedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyRestrictedMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyRestrictedMessage(param1);
    };
    PartyRestrictedMessage.prototype.serializeAs_PartyRestrictedMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeBoolean(this.restricted);
    };
    PartyRestrictedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyRestrictedMessage(param1);
    };
    PartyRestrictedMessage.prototype.deserializeAs_PartyRestrictedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.restricted = param1.readBoolean();
    };
    PartyRestrictedMessage.ID = 6175;
    return PartyRestrictedMessage;
})(AbstractPartyMessage);
module.exports = PartyRestrictedMessage;
