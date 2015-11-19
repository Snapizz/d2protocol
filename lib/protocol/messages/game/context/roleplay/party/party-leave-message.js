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
var PartyLeaveMessage = (function (_super) {
    __extends(PartyLeaveMessage, _super);
    function PartyLeaveMessage() {
        _super.call(this);
    }
    PartyLeaveMessage.prototype.getMessageId = function () {
        return PartyLeaveMessage.ID;
    };
    PartyLeaveMessage.prototype.reset = function () {
    };
    PartyLeaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyLeaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyLeaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyLeaveMessage(param1);
    };
    PartyLeaveMessage.prototype.serializeAs_PartyLeaveMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
    };
    PartyLeaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyLeaveMessage(param1);
    };
    PartyLeaveMessage.prototype.deserializeAs_PartyLeaveMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyLeaveMessage.ID = 5594;
    return PartyLeaveMessage;
})(AbstractPartyMessage);
module.exports = PartyLeaveMessage;
