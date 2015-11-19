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
var PartyStopFollowRequestMessage = (function (_super) {
    __extends(PartyStopFollowRequestMessage, _super);
    function PartyStopFollowRequestMessage() {
        _super.call(this);
    }
    PartyStopFollowRequestMessage.prototype.getMessageId = function () {
        return PartyStopFollowRequestMessage.ID;
    };
    PartyStopFollowRequestMessage.prototype.reset = function () {
    };
    PartyStopFollowRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyStopFollowRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyStopFollowRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyStopFollowRequestMessage(param1);
    };
    PartyStopFollowRequestMessage.prototype.serializeAs_PartyStopFollowRequestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
    };
    PartyStopFollowRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyStopFollowRequestMessage(param1);
    };
    PartyStopFollowRequestMessage.prototype.deserializeAs_PartyStopFollowRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyStopFollowRequestMessage.ID = 5574;
    return PartyStopFollowRequestMessage;
})(AbstractPartyMessage);
module.exports = PartyStopFollowRequestMessage;
