var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var OrnamentSelectRequestMessage = function() {
  this.ornamentId = 0;
};

util.inherits(OrnamentSelectRequestMessage, BaseMessage);

OrnamentSelectRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_OrnamentSelectRequestMessage(output);
};

OrnamentSelectRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_OrnamentSelectRequestMessage(input);
};

OrnamentSelectRequestMessage.prototype.serializeAs_OrnamentSelectRequestMessage = function(output) {
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
  } else {
    param1.writeVarShort(this.ornamentId);
    return;
  }
};

OrnamentSelectRequestMessage.prototype.deserializeAs_OrnamentSelectRequestMessage = function(input) {
  this.ornamentId = param1.readVarUhShort();
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentSelectRequestMessage.ornamentId.");
  } else {
    return;
  }
};

OrnamentSelectRequestMessage.prototype.getMessageId = function() {
  return 6374;
};

OrnamentSelectRequestMessage.prototype.getClassName = function() {
  return 'OrnamentSelectRequestMessage';
};

module.exports.id = 6374;
module.exports.class = OrnamentSelectRequestMessage;