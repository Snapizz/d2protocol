var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockRemoveItemRequestMessage = function() {
  this.cellId = 0;
};

util.inherits(PaddockRemoveItemRequestMessage, BaseMessage);

PaddockRemoveItemRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockRemoveItemRequestMessage(output);
};

PaddockRemoveItemRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockRemoveItemRequestMessage(input);
};

PaddockRemoveItemRequestMessage.prototype.serializeAs_PaddockRemoveItemRequestMessage = function(output) {
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
};

PaddockRemoveItemRequestMessage.prototype.deserializeAs_PaddockRemoveItemRequestMessage = function(input) {
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of PaddockRemoveItemRequestMessage.cellId.")));
  };
};

PaddockRemoveItemRequestMessage.prototype.getMessageId = function() {
  return 5958;
};

PaddockRemoveItemRequestMessage.prototype.getClassName = function() {
  return 'PaddockRemoveItemRequestMessage';
};

module.exports.id = 5958;
module.exports.class = PaddockRemoveItemRequestMessage;