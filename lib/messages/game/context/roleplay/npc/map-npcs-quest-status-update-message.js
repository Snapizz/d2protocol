var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapNpcsQuestStatusUpdateMessage = function() {
  this.mapId = 0;
  this.npcsIdsWithQuest = [];
  this.questFlags = [];
  this.npcsIdsWithoutQuest = [];
};

util.inherits(MapNpcsQuestStatusUpdateMessage, BaseMessage);

MapNpcsQuestStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_MapNpcsQuestStatusUpdateMessage(output);
};

MapNpcsQuestStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapNpcsQuestStatusUpdateMessage(input);
};

MapNpcsQuestStatusUpdateMessage.prototype.serializeAs_MapNpcsQuestStatusUpdateMessage = function(output) {
  output.writeInt(this.mapId);
  output.writeShort(this.npcsIdsWithQuest.length);
  var _i2;
  while (_i2 < this.npcsIdsWithQuest.length) {
    output.writeInt(this.npcsIdsWithQuest[_i2]);
    _i2++;
  };
  output.writeShort(this.questFlags.length);
  var _i3;
  while (_i3 < this.questFlags.length) {
    (this.questFlags[_i3]).serializeAs_GameRolePlayNpcQuestFlag(output);
    _i3++;
  };
  output.writeShort(this.npcsIdsWithoutQuest.length);
  var _i4;
  while (_i4 < this.npcsIdsWithoutQuest.length) {
    output.writeInt(this.npcsIdsWithoutQuest[_i4]);
    _i4++;
  };
};

MapNpcsQuestStatusUpdateMessage.prototype.deserializeAs_MapNpcsQuestStatusUpdateMessage = function(input) {
  var _val2;
  var _item3;
  var _val4;
  this.mapId = input.readInt();
  var _npcsIdsWithQuestLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _npcsIdsWithQuestLen) {
    _val2 = input.readInt();
    this.npcsIdsWithQuest.push(_val2);
    _i2++;
  };
  var _questFlagsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _questFlagsLen) {
    _item3 = new GameRolePlayNpcQuestFlag();
    _item3.deserialize(input);
    this.questFlags.push(_item3);
    _i3++;
  };
  var _npcsIdsWithoutQuestLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _npcsIdsWithoutQuestLen) {
    _val4 = input.readInt();
    this.npcsIdsWithoutQuest.push(_val4);
    _i4++;
  };
};

MapNpcsQuestStatusUpdateMessage.prototype.getMessageId = function() {
  return 5642;
};

MapNpcsQuestStatusUpdateMessage.prototype.getClassName = function() {
  return 'MapNpcsQuestStatusUpdateMessage';
};

module.exports.id = 5642;
module.exports.class = MapNpcsQuestStatusUpdateMessage;