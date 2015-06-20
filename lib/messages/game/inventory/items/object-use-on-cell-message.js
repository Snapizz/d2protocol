var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ObjectUseOnCellMessage = function() {
  this.cells = 0;
};

util.inherits(ObjectUseOnCellMessage, BaseMessage);

ObjectUseOnCellMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectUseOnCellMessage(output);
};

ObjectUseOnCellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectUseOnCellMessage(input);
};

ObjectUseOnCellMessage.prototype.serializeAs_ObjectUseOnCellMessage = function(param1) {
  this.serializeAs_ObjectUseMessage(param1);
  if (this.cells < 0 || this.cells > 559) {
    throw new Error("Forbidden value (" + this.cells + ") on element cells.");
  } else {
    param1.writeVarShort(this.cells);
    return;
  }
};

ObjectUseOnCellMessage.prototype.deserializeAs_ObjectUseOnCellMessage = function(param1) {
  this.deserialize(param1);
  this.cells = param1.readVarUhShort();
  if (this.cells < 0 || this.cells > 559) {
    throw new Error("Forbidden value (" + this.cells + ") on element of ObjectUseOnCellMessage.cells.");
  } else {
    return;
  }
};

ObjectUseOnCellMessage.prototype.getMessageId = function() {
  return 3013;
};

ObjectUseOnCellMessage.prototype.getClassName = function() {
  return 'ObjectUseOnCellMessage';
};

module.exports.id = 3013;
module.exports.class = ObjectUseOnCellMessage;