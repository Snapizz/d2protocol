var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismFightRemovedMessage = function() {
  this.subAreaId = 0;
};

util.inherits(PrismFightRemovedMessage, BaseMessage);

PrismFightRemovedMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismFightRemovedMessage(output);
};

PrismFightRemovedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightRemovedMessage(input);
};

PrismFightRemovedMessage.prototype.serializeAs_PrismFightRemovedMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

PrismFightRemovedMessage.prototype.deserializeAs_PrismFightRemovedMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightRemovedMessage.subAreaId.")));
  };
};

PrismFightRemovedMessage.prototype.getMessageId = function() {
  return 6453;
};

PrismFightRemovedMessage.prototype.getClassName = function() {
  return 'PrismFightRemovedMessage';
};

module.exports.id = 6453;
module.exports.class = PrismFightRemovedMessage;