var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ObjectGroundRemovedMessage = function() {
  this.cell = 0;
};

util.inherits(ObjectGroundRemovedMessage, BaseMessage);

ObjectGroundRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectGroundRemovedMessage(output);
};

ObjectGroundRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectGroundRemovedMessage(input);
};

ObjectGroundRemovedMessage.prototype.serializeAs_ObjectGroundRemovedMessage = function(param1) {
  if (this.cell < 0 || this.cell > 559) {
    throw new Error("Forbidden value (" + this.cell + ") on element cell.");
  } else {
    param1.writeVarShort(this.cell);
    return;
  }
};

ObjectGroundRemovedMessage.prototype.deserializeAs_ObjectGroundRemovedMessage = function(param1) {
  this.cell = param1.readVarUhShort();
  if (this.cell < 0 || this.cell > 559) {
    throw new Error("Forbidden value (" + this.cell + ") on element of ObjectGroundRemovedMessage.cell.");
  } else {
    return;
  }
};

ObjectGroundRemovedMessage.prototype.getMessageId = function() {
  return 3014;
};

ObjectGroundRemovedMessage.prototype.getClassName = function() {
  return 'ObjectGroundRemovedMessage';
};

module.exports.id = 3014;
module.exports.class = ObjectGroundRemovedMessage;
module.exports.getInstance = function() {
  return new ObjectGroundRemovedMessage();
};