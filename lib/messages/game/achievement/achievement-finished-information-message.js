var d2com = require('d2com'),
  BaseMessage = require('./achievement-finished-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AchievementFinishedInformationMessage = function() {
  this.name = "";
  this.playerId = 0;
};

util.inherits(AchievementFinishedInformationMessage, BaseMessage);

AchievementFinishedInformationMessage.prototype.serialize = function(output) {
  this.serializeAs_AchievementFinishedInformationMessage(output);
};

AchievementFinishedInformationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementFinishedInformationMessage(input);
};

AchievementFinishedInformationMessage.prototype.serializeAs_AchievementFinishedInformationMessage = function(output) {
  this.serializeAs_AchievementFinishedMessage(output);
  output.writeUTF(this.name);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

AchievementFinishedInformationMessage.prototype.deserializeAs_AchievementFinishedInformationMessage = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of AchievementFinishedInformationMessage.playerId.")));
  };
};

AchievementFinishedInformationMessage.prototype.getMessageId = function() {
  return 6381;
};

AchievementFinishedInformationMessage.prototype.getClassName = function() {
  return 'AchievementFinishedInformationMessage';
};

module.exports.id = 6381;
module.exports.class = AchievementFinishedInformationMessage;