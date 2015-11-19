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
var PartyMemberGeoPosition = require('../../../../../types/game/context/roleplay/party/party-member-geo-position');
var PartyLocateMembersMessage = (function (_super) {
    __extends(PartyLocateMembersMessage, _super);
    function PartyLocateMembersMessage() {
        this.geopositions = [];
        _super.call(this);
    }
    PartyLocateMembersMessage.prototype.getMessageId = function () {
        return PartyLocateMembersMessage.ID;
    };
    PartyLocateMembersMessage.prototype.reset = function () {
        this.geopositions = [];
    };
    PartyLocateMembersMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyLocateMembersMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyLocateMembersMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyLocateMembersMessage(param1);
    };
    PartyLocateMembersMessage.prototype.serializeAs_PartyLocateMembersMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeShort(this.geopositions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.geopositions.length) {
            (this.geopositions[_loc2_]).serializeAs_PartyMemberGeoPosition(param1);
            _loc2_++;
        }
    };
    PartyLocateMembersMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyLocateMembersMessage(param1);
    };
    PartyLocateMembersMessage.prototype.deserializeAs_PartyLocateMembersMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PartyMemberGeoPosition();
            _loc4_.deserialize(param1);
            this.geopositions.push(_loc4_);
            _loc3_++;
        }
    };
    PartyLocateMembersMessage.ID = 5595;
    return PartyLocateMembersMessage;
})(AbstractPartyMessage);
module.exports = PartyLocateMembersMessage;
