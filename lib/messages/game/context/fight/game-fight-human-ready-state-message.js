var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightHumanReadyStateMessage = function() {
  this.characterId = 0;
  this.isReady = false;
};

util.inherits(GameFightHumanReadyStateMessage, BaseMessage);

GameFightHumanReadyStateMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightHumanReadyStateMessage(output);
};

GameFightHumanReadyStateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightHumanReadyStateMessage(input);
};

GameFightHumanReadyStateMessage.prototype.serializeAs_GameFightHumanReadyStateMessage = function(output) {
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeVarInt(this.characterId);
  output.writeBoolean(this.isReady);
};

GameFightHumanReadyStateMessage.prototype.deserializeAs_GameFightHumanReadyStateMessage = function(input) {
  this.characterId = input.readVarUhInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of GameFightHumanReadyStateMessage.characterId.")));
  };
  this.isReady = input.readBoolean();
};

GameFightHumanReadyStateMessage.prototype.getMessageId = function() {
  return 740;
};

GameFightHumanReadyStateMessage.prototype.getClassName = function() {
  return 'GameFightHumanReadyStateMessage';
};

module.exports.id = 740;
module.exports.class = GameFightHumanReadyStateMessage;