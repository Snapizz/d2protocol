var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

AchievementFinishedInformationMessage.prototype.serializeAs_AchievementFinishedInformationMessage = function(param1) {
  this.serializeAs_AchievementFinishedMessage(param1);
  param1.writeUTF(this.name);
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    return;
  }
};

AchievementFinishedInformationMessage.prototype.deserializeAs_AchievementFinishedInformationMessage = function(param1) {
  this.deserialize(param1);
  this.name = param1.readUTF();
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of AchievementFinishedInformationMessage.playerId.");
  } else {
    return;
  }
};

AchievementFinishedInformationMessage.prototype.getMessageId = function() {
  return 6381;
};

AchievementFinishedInformationMessage.prototype.getClassName = function() {
  return 'AchievementFinishedInformationMessage';
};

module.exports.id = 6381;
module.exports.class = AchievementFinishedInformationMessage;