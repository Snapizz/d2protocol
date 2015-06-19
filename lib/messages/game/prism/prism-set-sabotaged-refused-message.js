var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PrismSetSabotagedRefusedMessage = function() {
  this.subAreaId = 0;
  this.reason = 0;
};

util.inherits(PrismSetSabotagedRefusedMessage, BaseMessage);

PrismSetSabotagedRefusedMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismSetSabotagedRefusedMessage(output);
};

PrismSetSabotagedRefusedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismSetSabotagedRefusedMessage(input);
};

PrismSetSabotagedRefusedMessage.prototype.serializeAs_PrismSetSabotagedRefusedMessage = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeByte(this.reason);
};

PrismSetSabotagedRefusedMessage.prototype.deserializeAs_PrismSetSabotagedRefusedMessage = function(input) {
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismSetSabotagedRefusedMessage.subAreaId.")));
  };
  this.reason = input.readByte();
};

PrismSetSabotagedRefusedMessage.prototype.getMessageId = function() {
  return 6466;
};

PrismSetSabotagedRefusedMessage.prototype.getClassName = function() {
  return 'PrismSetSabotagedRefusedMessage';
};

module.exports.id = 6466;
module.exports.class = PrismSetSabotagedRefusedMessage;