var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObtainedItemMessage = function() {
  this.genericId = 0;
  this.baseQuantity = 0;
};

util.inherits(ObtainedItemMessage, BaseMessage);

ObtainedItemMessage.prototype.serialize = function(output) {
  this.serializeAs_ObtainedItemMessage(output);
};

ObtainedItemMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObtainedItemMessage(input);
};

ObtainedItemMessage.prototype.serializeAs_ObtainedItemMessage = function(output) {
  if (this.genericId < 0) {
    throw (new Error((("Forbidden value (" + this.genericId) + ") on element genericId.")));
  };
  output.writeVarShort(this.genericId);
  if (this.baseQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.baseQuantity) + ") on element baseQuantity.")));
  };
  output.writeVarInt(this.baseQuantity);
};

ObtainedItemMessage.prototype.deserializeAs_ObtainedItemMessage = function(input) {
  this.genericId = input.readVarUhShort();
  if (this.genericId < 0) {
    throw (new Error((("Forbidden value (" + this.genericId) + ") on element of ObtainedItemMessage.genericId.")));
  };
  this.baseQuantity = input.readVarUhInt();
  if (this.baseQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.baseQuantity) + ") on element of ObtainedItemMessage.baseQuantity.")));
  };
};

ObtainedItemMessage.prototype.getMessageId = function() {
  return 6519;
};

ObtainedItemMessage.prototype.getClassName = function() {
  return 'ObtainedItemMessage';
};

module.exports.id = 6519;
module.exports.class = ObtainedItemMessage;