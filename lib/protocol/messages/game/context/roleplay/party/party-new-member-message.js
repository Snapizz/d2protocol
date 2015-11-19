/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PartyUpdateMessage = require('./party-update-message');
var PartyNewMemberMessage = (function (_super) {
    __extends(PartyNewMemberMessage, _super);
    function PartyNewMemberMessage() {
        _super.call(this);
    }
    PartyNewMemberMessage.prototype.getMessageId = function () {
        return PartyNewMemberMessage.ID;
    };
    PartyNewMemberMessage.prototype.reset = function () {
    };
    PartyNewMemberMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyNewMemberMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyNewMemberMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyNewMemberMessage(param1);
    };
    PartyNewMemberMessage.prototype.serializeAs_PartyNewMemberMessage = function (param1) {
        _super.prototype.serializeAs_PartyUpdateMessage.call(this, param1);
    };
    PartyNewMemberMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyNewMemberMessage(param1);
    };
    PartyNewMemberMessage.prototype.deserializeAs_PartyNewMemberMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    PartyNewMemberMessage.ID = 6306;
    return PartyNewMemberMessage;
})(PartyUpdateMessage);
module.exports = PartyNewMemberMessage;
