var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameRolePlayNpcQuestFlag = require('../../../../../types/game/context/roleplay/quest/game-role-play-npc-quest-flag.js').class;

var MapNpcsQuestStatusUpdateMessage = module.exports = function() {
    this.mapId = 0;
    this.npcsIdsWithQuest = [];
    this.questFlags = [];
    this.npcsIdsWithoutQuest = [];

    return this;
};

require('util').inherits(MapNpcsQuestStatusUpdateMessage, d2com.NetworkMessage.class);

MapNpcsQuestStatusUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_MapNpcsQuestStatusUpdateMessage(output);
};

MapNpcsQuestStatusUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapNpcsQuestStatusUpdateMessage(input);
};

MapNpcsQuestStatusUpdateMessage.prototype.serializeAs_MapNpcsQuestStatusUpdateMessage = function(param1) {
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

MapNpcsQuestStatusUpdateMessage.prototype.deserializeAs_MapNpcsQuestStatusUpdateMessage = function(param1) {
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

MapNpcsQuestStatusUpdateMessage.prototype.getMessageId = function() {
    return 5642;
};

MapNpcsQuestStatusUpdateMessage.prototype.getClassName = function() {
    return 'MapNpcsQuestStatusUpdateMessage';
};

module.exports.id = 5642;