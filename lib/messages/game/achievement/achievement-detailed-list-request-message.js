var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementDetailedListRequestMessage = function() {
  this.categoryId = 0;
};

util.inherits(AchievementDetailedListRequestMessage, BaseMessage);

AchievementDetailedListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementDetailedListRequestMessage(output);
};

AchievementDetailedListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementDetailedListRequestMessage(input);
};

AchievementDetailedListRequestMessage.prototype.serializeAs_AchievementDetailedListRequestMessage = function(output) {
  if (this.categoryId < 0) {
    throw (new Error((("Forbidden value (" + this.categoryId) + ") on element categoryId.")));
  };
  output.writeVarShort(this.categoryId);
};

AchievementDetailedListRequestMessage.prototype.deserializeAs_AchievementDetailedListRequestMessage = function(input) {
  this.categoryId = input.readVarUhShort();
  if (this.categoryId < 0) {
    throw (new Error((("Forbidden value (" + this.categoryId) + ") on element of AchievementDetailedListRequestMessage.categoryId.")));
  };
};

AchievementDetailedListRequestMessage.prototype.getMessageId = function() {
  return 6357;
};

AchievementDetailedListRequestMessage.prototype.getClassName = function() {
  return 'AchievementDetailedListRequestMessage';
};

module.exports.id = 6357;
module.exports.class = AchievementDetailedListRequestMessage;