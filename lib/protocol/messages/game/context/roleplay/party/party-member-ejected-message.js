/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyMemberRemoveMessage = require('./party-member-remove-message');
var PartyMemberEjectedMessage = (function (_super) {
    __extends(PartyMemberEjectedMessage, _super);
    function PartyMemberEjectedMessage() {
        this.kickerId = 0;
        _super.call(this);
    }
    PartyMemberEjectedMessage.prototype.getMessageId = function () {
        return PartyMemberEjectedMessage.ID;
    };
    PartyMemberEjectedMessage.prototype.reset = function () {
        this.kickerId = 0;
    };
    PartyMemberEjectedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyMemberEjectedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyMemberEjectedMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberEjectedMessage(param1);
    };
    PartyMemberEjectedMessage.prototype.serializeAs_PartyMemberEjectedMessage = function (param1) {
        _super.prototype.serializeAs_PartyMemberRemoveMessage.call(this, param1);
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element kickerId.');
        }
        param1.writeVarInt(this.kickerId);
    };
    PartyMemberEjectedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberEjectedMessage(param1);
    };
    PartyMemberEjectedMessage.prototype.deserializeAs_PartyMemberEjectedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.kickerId = param1.readVarUhInt();
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element of PartyMemberEjectedMessage.kickerId.');
        }
    };
    PartyMemberEjectedMessage.ID = 6252;
    return PartyMemberEjectedMessage;
})(PartyMemberRemoveMessage);
module.exports = PartyMemberEjectedMessage;
