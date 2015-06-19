var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AbstractGameActionMessage = function() {
  this.actionId = 0;
  this.sourceId = 0;
};

util.inherits(AbstractGameActionMessage, BaseMessage);

AbstractGameActionMessage.prototype.serialize = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
};

AbstractGameActionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractGameActionMessage(input);
};

AbstractGameActionMessage.prototype.serializeAs_AbstractGameActionMessage = function(output) {
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element actionId.")));
  };
  output.writeVarShort(this.actionId);
  output.writeInt(this.sourceId);
};

AbstractGameActionMessage.prototype.deserializeAs_AbstractGameActionMessage = function(input) {
  this.actionId = input.readVarUhShort();
  if (this.actionId < 0) {
    throw (new Error((("Forbidden value (" + this.actionId) + ") on element of AbstractGameActionMessage.actionId.")));
  };
  this.sourceId = input.readInt();
};

AbstractGameActionMessage.prototype.getMessageId = function() {
  return 1000;
};

AbstractGameActionMessage.prototype.getClassName = function() {
  return 'AbstractGameActionMessage';
};

module.exports.id = 1000;
module.exports.class = AbstractGameActionMessage;