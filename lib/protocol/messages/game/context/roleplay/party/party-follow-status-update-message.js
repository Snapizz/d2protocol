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
var PartyFollowStatusUpdateMessage = (function (_super) {
    __extends(PartyFollowStatusUpdateMessage, _super);
    function PartyFollowStatusUpdateMessage() {
        this.success = false;
        this.followedId = 0;
        _super.call(this);
    }
    PartyFollowStatusUpdateMessage.prototype.getMessageId = function () {
        return PartyFollowStatusUpdateMessage.ID;
    };
    PartyFollowStatusUpdateMessage.prototype.reset = function () {
        this.success = false;
        this.followedId = 0;
    };
    PartyFollowStatusUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyFollowStatusUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyFollowStatusUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyFollowStatusUpdateMessage(param1);
    };
    PartyFollowStatusUpdateMessage.prototype.serializeAs_PartyFollowStatusUpdateMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeBoolean(this.success);
        if (this.followedId < 0) {
            throw new Error('Forbidden value (' + this.followedId + ') on element followedId.');
        }
        param1.writeVarInt(this.followedId);
    };
    PartyFollowStatusUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyFollowStatusUpdateMessage(param1);
    };
    PartyFollowStatusUpdateMessage.prototype.deserializeAs_PartyFollowStatusUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.success = param1.readBoolean();
        this.followedId = param1.readVarUhInt();
        if (this.followedId < 0) {
            throw new Error('Forbidden value (' + this.followedId + ') on element of PartyFollowStatusUpdateMessage.followedId.');
        }
    };
    PartyFollowStatusUpdateMessage.ID = 5581;
    return PartyFollowStatusUpdateMessage;
})(AbstractPartyMessage);
module.exports = PartyFollowStatusUpdateMessage;
