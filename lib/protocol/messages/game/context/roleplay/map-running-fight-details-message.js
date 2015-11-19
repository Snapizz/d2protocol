/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightFighterLightInformations = require('../../../../types/game/context/fight/game-fight-fighter-light-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var MapRunningFightDetailsMessage = (function (_super) {
    __extends(MapRunningFightDetailsMessage, _super);
    function MapRunningFightDetailsMessage() {
        this.fightId = 0;
        this.attackers = [];
        this.defenders = [];
        _super.call(this);
    }
    MapRunningFightDetailsMessage.prototype.getMessageId = function () {
        return MapRunningFightDetailsMessage.ID;
    };
    MapRunningFightDetailsMessage.prototype.reset = function () {
        this.fightId = 0;
        this.attackers = [];
        this.defenders = [];
    };
    MapRunningFightDetailsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapRunningFightDetailsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapRunningFightDetailsMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapRunningFightDetailsMessage(param1);
    };
    MapRunningFightDetailsMessage.prototype.serializeAs_MapRunningFightDetailsMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.attackers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.attackers.length) {
            param1.writeShort((this.attackers[_loc2_]).getTypeId());
            (this.attackers[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.defenders.length);
        var _loc3_ = 0;
        while (_loc3_ < this.defenders.length) {
            param1.writeShort((this.defenders[_loc3_]).getTypeId());
            (this.defenders[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    MapRunningFightDetailsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapRunningFightDetailsMessage(param1);
    };
    MapRunningFightDetailsMessage.prototype.deserializeAs_MapRunningFightDetailsMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = 0;
        var _loc9_ = null;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of MapRunningFightDetailsMessage.fightId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.attackers.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readUnsignedShort();
            _loc9_ = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.defenders.push(_loc9_);
            _loc5_++;
        }
    };
    MapRunningFightDetailsMessage.ID = 5751;
    return MapRunningFightDetailsMessage;
})(network_message_1.NetworkMessage);
module.exports = MapRunningFightDetailsMessage;
