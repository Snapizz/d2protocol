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

AbstractGameActionMessage.prototype.serializeAs_AbstractGameActionMessage = function(param1) {
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
  } else {
    param1.writeVarShort(this.actionId);
    param1.writeInt(this.sourceId);
    return;
  }
};

AbstractGameActionMessage.prototype.deserializeAs_AbstractGameActionMessage = function(param1) {
  this.actionId = param1.readVarUhShort();
  if (this.actionId < 0) {
    throw new Error("Forbidden value (" + this.actionId + ") on element of AbstractGameActionMessage.actionId.");
  } else {
    this.sourceId = param1.readInt();
    return;
  }
};

AbstractGameActionMessage.prototype.getMessageId = function() {
  return 1000;
};

AbstractGameActionMessage.prototype.getClassName = function() {
  return 'AbstractGameActionMessage';
};

module.exports.id = 1000;
module.exports.class = AbstractGameActionMessage;
module.exports.getInstance = function() {
  return new AbstractGameActionMessage();
};