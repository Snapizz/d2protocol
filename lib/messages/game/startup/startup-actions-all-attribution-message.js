var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StartupActionsAllAttributionMessage = function() {
  this.characterId = 0;
};

util.inherits(StartupActionsAllAttributionMessage, BaseMessage);

StartupActionsAllAttributionMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionsAllAttributionMessage(output);
};

StartupActionsAllAttributionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionsAllAttributionMessage(input);
};

StartupActionsAllAttributionMessage.prototype.serializeAs_StartupActionsAllAttributionMessage = function(output) {
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeInt(this.characterId);
};

StartupActionsAllAttributionMessage.prototype.deserializeAs_StartupActionsAllAttributionMessage = function(input) {
  this.characterId = input.readInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of StartupActionsAllAttributionMessage.characterId.")));
  };
};

StartupActionsAllAttributionMessage.prototype.getMessageId = function() {
  return 6537;
};

StartupActionsAllAttributionMessage.prototype.getClassName = function() {
  return 'StartupActionsAllAttributionMessage';
};

module.exports.id = 6537;
module.exports.class = StartupActionsAllAttributionMessage;