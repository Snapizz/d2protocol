var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementListMessage = function() {
  this.finishedAchievementsIds = [];
  this.rewardableAchievements = [];
};

util.inherits(AchievementListMessage, BaseMessage);

AchievementListMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementListMessage(output);
};

AchievementListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementListMessage(input);
};

AchievementListMessage.prototype.serializeAs_AchievementListMessage = function(output) {
  output.writeShort(this.finishedAchievementsIds.length);
  var _i1 = 0;
  while (_i1 < this.finishedAchievementsIds.length) {
    if (this.finishedAchievementsIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.finishedAchievementsIds[_i1]) + ") on element 1 (starting at 1) of finishedAchievementsIds.")));
    };
    output.writeVarShort(this.finishedAchievementsIds[_i1]);
    _i1++;
  };
  output.writeShort(this.rewardableAchievements.length);
  var _i2 = 0;
  while (_i2 < this.rewardableAchievements.length) {
    (this.rewardableAchievements[_i2]).serializeAs_AchievementRewardable(output);
    _i2++;
  };
};

AchievementListMessage.prototype.deserializeAs_AchievementListMessage = function(input) {
  var _val1 = 0;
  var _item2;
  var _finishedAchievementsIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _finishedAchievementsIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of finishedAchievementsIds.")));
    };
    this.finishedAchievementsIds.push(_val1);
    _i1++;
  };
  var _rewardableAchievementsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _rewardableAchievementsLen) {
    _item2 = new AchievementRewardable();
    _item2.deserialize(input);
    this.rewardableAchievements.push(_item2);
    _i2++;
  };
};

AchievementListMessage.prototype.getMessageId = function() {
  return 6205;
};

AchievementListMessage.prototype.getClassName = function() {
  return 'AchievementListMessage';
};

module.exports.id = 6205;
module.exports.class = AchievementListMessage;