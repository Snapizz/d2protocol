/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapRunningFightDetailsMessage = require('./map-running-fight-details-message');
var NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team');
var MapRunningFightDetailsExtendedMessage = (function (_super) {
    __extends(MapRunningFightDetailsExtendedMessage, _super);
    function MapRunningFightDetailsExtendedMessage() {
        this.namedPartyTeams = [];
        _super.call(this);
    }
    MapRunningFightDetailsExtendedMessage.prototype.getMessageId = function () {
        return MapRunningFightDetailsExtendedMessage.ID;
    };
    MapRunningFightDetailsExtendedMessage.prototype.reset = function () {
        this.namedPartyTeams = [];
    };
    MapRunningFightDetailsExtendedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapRunningFightDetailsExtendedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapRunningFightDetailsExtendedMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapRunningFightDetailsExtendedMessage(param1);
    };
    MapRunningFightDetailsExtendedMessage.prototype.serializeAs_MapRunningFightDetailsExtendedMessage = function (param1) {
        _super.prototype.serializeAs_MapRunningFightDetailsMessage.call(this, param1);
        param1.writeShort(this.namedPartyTeams.length);
        var _loc2_ = 0;
        while (_loc2_ < this.namedPartyTeams.length) {
            (this.namedPartyTeams[_loc2_]).serializeAs_NamedPartyTeam(param1);
            _loc2_++;
        }
    };
    MapRunningFightDetailsExtendedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapRunningFightDetailsExtendedMessage(param1);
    };
    MapRunningFightDetailsExtendedMessage.prototype.deserializeAs_MapRunningFightDetailsExtendedMessage = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new NamedPartyTeam();
            _loc4_.deserialize(param1);
            this.namedPartyTeams.push(_loc4_);
            _loc3_++;
        }
    };
    MapRunningFightDetailsExtendedMessage.ID = 6500;
    return MapRunningFightDetailsExtendedMessage;
})(MapRunningFightDetailsMessage);
module.exports = MapRunningFightDetailsExtendedMessage;
