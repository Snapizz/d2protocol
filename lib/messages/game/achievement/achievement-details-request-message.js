var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementDetailsRequestMessage = function() {
  this.achievementId = 0;
};

util.inherits(AchievementDetailsRequestMessage, BaseMessage);

AchievementDetailsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailsRequestMessage(output);
};

AchievementDetailsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailsRequestMessage(input);
};

AchievementDetailsRequestMessage.prototype.serializeAs_AchievementDetailsRequestMessage = function(output) {
  if (this.achievementId < 0) {
    throw (new Error((("Forbidden value (" + this.achievementId) + ") on element achievementId.")));
  };
  output.writeVarShort(this.achievementId);
};

AchievementDetailsRequestMessage.prototype.deserializeAs_AchievementDetailsRequestMessage = function(input) {
  this.achievementId = input.readVarUhShort();
  if (this.achievementId < 0) {
    throw (new Error((("Forbidden value (" + this.achievementId) + ") on element of AchievementDetailsRequestMessage.achievementId.")));
  };
};

AchievementDetailsRequestMessage.prototype.getMessageId = function() {
  return 6380;
};

AchievementDetailsRequestMessage.prototype.getClassName = function() {
  return 'AchievementDetailsRequestMessage';
};

module.exports.id = 6380;
module.exports.class = AchievementDetailsRequestMessage;