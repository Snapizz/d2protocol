/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayNpcQuestFlag = require('../../../../../types/game/context/roleplay/quest/game-role-play-npc-quest-flag');
var MapNpcsQuestStatusUpdateMessage = (function (_super) {
    __extends(MapNpcsQuestStatusUpdateMessage, _super);
    function MapNpcsQuestStatusUpdateMessage() {
        this.mapId = 0;
        this.npcsIdsWithQuest = [];
        this.questFlags = [];
        this.npcsIdsWithoutQuest = [];
        _super.call(this);
    }
    MapNpcsQuestStatusUpdateMessage.prototype.getMessageId = function () {
        return MapNpcsQuestStatusUpdateMessage.ID;
    };
    MapNpcsQuestStatusUpdateMessage.prototype.reset = function () {
        this.mapId = 0;
        this.npcsIdsWithQuest = [];
        this.questFlags = [];
        this.npcsIdsWithoutQuest = [];
    };
    MapNpcsQuestStatusUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapNpcsQuestStatusUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapNpcsQuestStatusUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapNpcsQuestStatusUpdateMessage(param1);
    };
    MapNpcsQuestStatusUpdateMessage.prototype.serializeAs_MapNpcsQuestStatusUpdateMessage = function (param1) {
        param1.writeInt(this.mapId);
        param1.writeShort(this.npcsIdsWithQuest.length);
        var _loc2_ = 0;
        while (_loc2_ < this.npcsIdsWithQuest.length) {
            param1.writeInt(this.npcsIdsWithQuest[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.questFlags.length);
        var _loc3_ = 0;
        while (_loc3_ < this.questFlags.length) {
            (this.questFlags[_loc3_]).serializeAs_GameRolePlayNpcQuestFlag(param1);
            _loc3_++;
        }
        param1.writeShort(this.npcsIdsWithoutQuest.length);
        var _loc4_ = 0;
        while (_loc4_ < this.npcsIdsWithoutQuest.length) {
            param1.writeInt(this.npcsIdsWithoutQuest[_loc4_]);
            _loc4_++;
        }
    };
    MapNpcsQuestStatusUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapNpcsQuestStatusUpdateMessage(param1);
    };
    MapNpcsQuestStatusUpdateMessage.prototype.deserializeAs_MapNpcsQuestStatusUpdateMessage = function (param1) {
        var _loc8_ = 0;
        var _loc9_ = null;
        var _loc10_ = 0;
        this.mapId = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc8_ = param1.readInt();
            this.npcsIdsWithQuest.push(_loc8_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc9_ = new GameRolePlayNpcQuestFlag();
            _loc9_.deserialize(param1);
            this.questFlags.push(_loc9_);
            _loc5_++;
        }
        var _loc6_ = param1.readUnsignedShort();
        var _loc7_ = 0;
        while (_loc7_ < _loc6_) {
            _loc10_ = param1.readInt();
            this.npcsIdsWithoutQuest.push(_loc10_);
            _loc7_++;
        }
    };
    MapNpcsQuestStatusUpdateMessage.ID = 5642;
    return MapNpcsQuestStatusUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = MapNpcsQuestStatusUpdateMessage;
