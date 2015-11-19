/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var FightExternalInformations = require('../../../../types/game/context/fight/fight-external-informations');
var MapRunningFightListMessage = (function (_super) {
    __extends(MapRunningFightListMessage, _super);
    function MapRunningFightListMessage() {
        this.fights = [];
        _super.call(this);
    }
    MapRunningFightListMessage.prototype.getMessageId = function () {
        return MapRunningFightListMessage.ID;
    };
    MapRunningFightListMessage.prototype.reset = function () {
        this.fights = [];
    };
    MapRunningFightListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapRunningFightListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapRunningFightListMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapRunningFightListMessage(param1);
    };
    MapRunningFightListMessage.prototype.serializeAs_MapRunningFightListMessage = function (param1) {
        param1.writeShort(this.fights.length);
        var _loc2_ = 0;
        while (_loc2_ < this.fights.length) {
            (this.fights[_loc2_]).serializeAs_FightExternalInformations(param1);
            _loc2_++;
        }
    };
    MapRunningFightListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapRunningFightListMessage(param1);
    };
    MapRunningFightListMessage.prototype.deserializeAs_MapRunningFightListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new FightExternalInformations();
            _loc4_.deserialize(param1);
            this.fights.push(_loc4_);
            _loc3_++;
        }
    };
    MapRunningFightListMessage.ID = 5743;
    return MapRunningFightListMessage;
})(network_message_1.NetworkMessage);
module.exports = MapRunningFightListMessage;
