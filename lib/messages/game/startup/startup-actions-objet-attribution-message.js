var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StartupActionsObjetAttributionMessage = function() {
  this.actionId = 0;
  this.characterId = 0;
};

util.inherits(StartupActionsObjetAttributionMessage, BaseMessage);

StartupActionsObjetAttributionMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionsObjetAttributionMessage(output);
};

StartupActionsObjetAttributionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionsObjetAttributionMessage(input);
};

StartupActionsObjetAttributionMessage.prototype.serializeAs_StartupActionsObjetAttributionMessage = function(output) {
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element actionId.")));
  };
  output.writeInt(this.actionId);
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element characterId.")));
  };
  output.writeInt(this.characterId);
};

StartupActionsObjetAttributionMessage.prototype.deserializeAs_StartupActionsObjetAttributionMessage = function(input) {
  this.actionId = input.readInt();
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element of StartupActionsObjetAttributionMessage.actionId.")));
  };
  this.characterId = input.readInt();
  if (this.characterId < 0) {
    throw (new Error((("Forbidden value (" + this.characterId) + ") on element of StartupActionsObjetAttributionMessage.characterId.")));
  };
};

StartupActionsObjetAttributionMessage.prototype.getMessageId = function() {
  return 1303;
};

StartupActionsObjetAttributionMessage.prototype.getClassName = function() {
  return 'StartupActionsObjetAttributionMessage';
};

module.exports.id = 1303;
module.exports.class = StartupActionsObjetAttributionMessage;