var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementDetailedListMessage = function() {
  this.startedAchievements = [];
  this.finishedAchievements = [];
};

util.inherits(AchievementDetailedListMessage, BaseMessage);

AchievementDetailedListMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailedListMessage(output);
};

AchievementDetailedListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailedListMessage(input);
};

AchievementDetailedListMessage.prototype.serializeAs_AchievementDetailedListMessage = function(output) {
  output.writeShort(this.startedAchievements.length);
  var _i1 = 0;
  while (_i1 < this.startedAchievements.length) {
    (this.startedAchievements[_i1]).serializeAs_Achievement(output);
    _i1++;
  };
  output.writeShort(this.finishedAchievements.length);
  var _i2 = 0;
  while (_i2 < this.finishedAchievements.length) {
    (this.finishedAchievements[_i2]).serializeAs_Achievement(output);
    _i2++;
  };
};

AchievementDetailedListMessage.prototype.deserializeAs_AchievementDetailedListMessage = function(input) {
  var _item1;
  var _item2;
  var _startedAchievementsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _startedAchievementsLen) {
    _item1 = new Achievement();
    _item1.deserialize(input);
    this.startedAchievements.push(_item1);
    _i1++;
  };
  var _finishedAchievementsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _finishedAchievementsLen) {
    _item2 = new Achievement();
    _item2.deserialize(input);
    this.finishedAchievements.push(_item2);
    _i2++;
  };
};

AchievementDetailedListMessage.prototype.getMessageId = function() {
  return 6358;
};

AchievementDetailedListMessage.prototype.getClassName = function() {
  return 'AchievementDetailedListMessage';
};

module.exports.id = 6358;
module.exports.class = AchievementDetailedListMessage;