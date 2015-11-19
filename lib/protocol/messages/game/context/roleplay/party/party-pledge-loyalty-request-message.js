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
var PartyPledgeLoyaltyRequestMessage = (function (_super) {
    __extends(PartyPledgeLoyaltyRequestMessage, _super);
    function PartyPledgeLoyaltyRequestMessage() {
        this.loyal = false;
        _super.call(this);
    }
    PartyPledgeLoyaltyRequestMessage.prototype.getMessageId = function () {
        return PartyPledgeLoyaltyRequestMessage.ID;
    };
    PartyPledgeLoyaltyRequestMessage.prototype.reset = function () {
        this.loyal = false;
    };
    PartyPledgeLoyaltyRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyPledgeLoyaltyRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyPledgeLoyaltyRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyPledgeLoyaltyRequestMessage(param1);
    };
    PartyPledgeLoyaltyRequestMessage.prototype.serializeAs_PartyPledgeLoyaltyRequestMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeBoolean(this.loyal);
    };
    PartyPledgeLoyaltyRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyPledgeLoyaltyRequestMessage(param1);
    };
    PartyPledgeLoyaltyRequestMessage.prototype.deserializeAs_PartyPledgeLoyaltyRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.loyal = param1.readBoolean();
    };
    PartyPledgeLoyaltyRequestMessage.ID = 6269;
    return PartyPledgeLoyaltyRequestMessage;
})(AbstractPartyMessage);
module.exports = PartyPledgeLoyaltyRequestMessage;
