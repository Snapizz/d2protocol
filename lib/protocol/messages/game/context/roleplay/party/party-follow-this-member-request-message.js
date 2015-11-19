/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyFollowMemberRequestMessage = require('./party-follow-member-request-message');
var PartyFollowThisMemberRequestMessage = (function (_super) {
    __extends(PartyFollowThisMemberRequestMessage, _super);
    function PartyFollowThisMemberRequestMessage() {
        this.enabled = false;
        _super.call(this);
    }
    PartyFollowThisMemberRequestMessage.prototype.getMessageId = function () {
        return PartyFollowThisMemberRequestMessage.ID;
    };
    PartyFollowThisMemberRequestMessage.prototype.reset = function () {
        this.enabled = false;
    };
    PartyFollowThisMemberRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyFollowThisMemberRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyFollowThisMemberRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyFollowThisMemberRequestMessage(param1);
    };
    PartyFollowThisMemberRequestMessage.prototype.serializeAs_PartyFollowThisMemberRequestMessage = function (param1) {
        _super.prototype.serializeAs_PartyFollowMemberRequestMessage.call(this, param1);
        param1.writeBoolean(this.enabled);
    };
    PartyFollowThisMemberRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyFollowThisMemberRequestMessage(param1);
    };
    PartyFollowThisMemberRequestMessage.prototype.deserializeAs_PartyFollowThisMemberRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.enabled = param1.readBoolean();
    };
    PartyFollowThisMemberRequestMessage.ID = 5588;
    return PartyFollowThisMemberRequestMessage;
})(PartyFollowMemberRequestMessage);
module.exports = PartyFollowThisMemberRequestMessage;
