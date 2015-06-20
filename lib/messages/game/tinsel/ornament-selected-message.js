var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var OrnamentSelectedMessage = function() {
  this.ornamentId = 0;
};

util.inherits(OrnamentSelectedMessage, BaseMessage);

OrnamentSelectedMessage.prototype.serialize = function(output) {
  this.serializeAs_OrnamentSelectedMessage(output);
};

OrnamentSelectedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_OrnamentSelectedMessage(input);
};

OrnamentSelectedMessage.prototype.serializeAs_OrnamentSelectedMessage = function(param1) {
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
  } else {
    param1.writeVarShort(this.ornamentId);
    return;
  }
};

OrnamentSelectedMessage.prototype.deserializeAs_OrnamentSelectedMessage = function(param1) {
  this.ornamentId = param1.readVarUhShort();
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentSelectedMessage.ornamentId.");
  } else {
    return;
  }
};

OrnamentSelectedMessage.prototype.getMessageId = function() {
  return 6369;
};

OrnamentSelectedMessage.prototype.getClassName = function() {
  return 'OrnamentSelectedMessage';
};

module.exports.id = 6369;
module.exports.class = OrnamentSelectedMessage;
module.exports.getInstance = function() {
  return new OrnamentSelectedMessage();
};