var d2com = require('d2com'),
  BaseMessage = require('./object-use-message.js').class,
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

ObjectUseOnCellMessage.prototype.serializeAs_ObjectUseOnCellMessage = function(output) {
  this.serializeAs_ObjectUseMessage(output);
  if ((((this.cells < 0)) || ((this.cells > 559)))) {
    throw (new Error((("Forbidden value (" + this.cells) + ") on element cells.")));
  };
  output.writeVarShort(this.cells);
};

ObjectUseOnCellMessage.prototype.deserializeAs_ObjectUseOnCellMessage = function(input) {
  this.deserialize(input);
  this.cells = input.readVarUhShort();
  if ((((this.cells < 0)) || ((this.cells > 559)))) {
    throw (new Error((("Forbidden value (" + this.cells) + ") on element of ObjectUseOnCellMessage.cells.")));
  };
};

ObjectUseOnCellMessage.prototype.getMessageId = function() {
  return 3013;
};

ObjectUseOnCellMessage.prototype.getClassName = function() {
  return 'ObjectUseOnCellMessage';
};

module.exports.id = 3013;
module.exports.class = ObjectUseOnCellMessage;