/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyIdol = require('../../../types/game/idol/party-idol');
var IdolPartyRefreshMessage = (function (_super) {
    __extends(IdolPartyRefreshMessage, _super);
    function IdolPartyRefreshMessage() {
        this.partyIdol = new PartyIdol();
        _super.call(this);
    }
    IdolPartyRefreshMessage.prototype.getMessageId = function () {
        return IdolPartyRefreshMessage.ID;
    };
    IdolPartyRefreshMessage.prototype.reset = function () {
        this.partyIdol = new PartyIdol();
    };
    IdolPartyRefreshMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolPartyRefreshMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolPartyRefreshMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolPartyRefreshMessage(param1);
    };
    IdolPartyRefreshMessage.prototype.serializeAs_IdolPartyRefreshMessage = function (param1) {
        this.partyIdol.serializeAs_PartyIdol(param1);
    };
    IdolPartyRefreshMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolPartyRefreshMessage(param1);
    };
    IdolPartyRefreshMessage.prototype.deserializeAs_IdolPartyRefreshMessage = function (param1) {
        this.partyIdol = new PartyIdol();
        this.partyIdol.deserialize(param1);
    };
    IdolPartyRefreshMessage.ID = 6583;
    return IdolPartyRefreshMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolPartyRefreshMessage;
