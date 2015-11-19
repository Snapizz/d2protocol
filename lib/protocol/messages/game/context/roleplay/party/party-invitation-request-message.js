/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyInvitationRequestMessage = (function (_super) {
    __extends(PartyInvitationRequestMessage, _super);
    function PartyInvitationRequestMessage() {
        this.name = '';
        _super.call(this);
    }
    PartyInvitationRequestMessage.prototype.getMessageId = function () {
        return PartyInvitationRequestMessage.ID;
    };
    PartyInvitationRequestMessage.prototype.reset = function () {
        this.name = '';
    };
    PartyInvitationRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationRequestMessage(param1);
    };
    PartyInvitationRequestMessage.prototype.serializeAs_PartyInvitationRequestMessage = function (param1) {
        param1.writeUTF(this.name);
    };
    PartyInvitationRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationRequestMessage(param1);
    };
    PartyInvitationRequestMessage.prototype.deserializeAs_PartyInvitationRequestMessage = function (param1) {
        this.name = param1.readUTF();
    };
    PartyInvitationRequestMessage.ID = 5585;
    return PartyInvitationRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PartyInvitationRequestMessage;
