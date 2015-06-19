var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementFinishedMessage = function() {
  this.id = 0;
  this.finishedlevel = 0;
};

util.inherits(AchievementFinishedMessage, BaseMessage);

AchievementFinishedMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementFinishedMessage(output);
};

AchievementFinishedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementFinishedMessage(input);
};

AchievementFinishedMessage.prototype.serializeAs_AchievementFinishedMessage = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarShort(this.id);
  if ((((this.finishedlevel < 0)) || ((this.finishedlevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.finishedlevel) + ") on element finishedlevel.")));
  };
  output.writeByte(this.finishedlevel);
};

AchievementFinishedMessage.prototype.deserializeAs_AchievementFinishedMessage = function(input) {
  this.id = input.readVarUhShort();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of AchievementFinishedMessage.id.")));
  };
  this.finishedlevel = input.readUnsignedByte();
  if ((((this.finishedlevel < 0)) || ((this.finishedlevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.finishedlevel) + ") on element of AchievementFinishedMessage.finishedlevel.")));
  };
};

AchievementFinishedMessage.prototype.getMessageId = function() {
  return 6208;
};

AchievementFinishedMessage.prototype.getClassName = function() {
  return 'AchievementFinishedMessage';
};

module.exports.id = 6208;
module.exports.class = AchievementFinishedMessage;