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
var PartyAbdicateThroneMessage = (function (_super) {
    __extends(PartyAbdicateThroneMessage, _super);
    function PartyAbdicateThroneMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    PartyAbdicateThroneMessage.prototype.getMessageId = function () {
        return PartyAbdicateThroneMessage.ID;
    };
    PartyAbdicateThroneMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    PartyAbdicateThroneMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyAbdicateThroneMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyAbdicateThroneMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyAbdicateThroneMessage(param1);
    };
    PartyAbdicateThroneMessage.prototype.serializeAs_PartyAbdicateThroneMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    PartyAbdicateThroneMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyAbdicateThroneMessage(param1);
    };
    PartyAbdicateThroneMessage.prototype.deserializeAs_PartyAbdicateThroneMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of PartyAbdicateThroneMessage.playerId.');
        }
    };
    PartyAbdicateThroneMessage.ID = 6080;
    return PartyAbdicateThroneMessage;
})(AbstractPartyMessage);
module.exports = PartyAbdicateThroneMessage;
