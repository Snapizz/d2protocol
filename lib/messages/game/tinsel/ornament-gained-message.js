var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var OrnamentGainedMessage = function() {
  this.ornamentId = 0;
};

util.inherits(OrnamentGainedMessage, BaseMessage);

OrnamentGainedMessage.prototype.serialize = function(output) {
  this.serializeAs_OrnamentGainedMessage(output);
};

OrnamentGainedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_OrnamentGainedMessage(input);
};

OrnamentGainedMessage.prototype.serializeAs_OrnamentGainedMessage = function(output) {
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
  } else {
    param1.writeShort(this.ornamentId);
    return;
  }
};

OrnamentGainedMessage.prototype.deserializeAs_OrnamentGainedMessage = function(input) {
  this.ornamentId = param1.readShort();
  if (this.ornamentId < 0) {
    throw new Error("Forbidden value (" + this.ornamentId + ") on element of OrnamentGainedMessage.ornamentId.");
  } else {
    return;
  }
};

OrnamentGainedMessage.prototype.getMessageId = function() {
  return 6368;
};

OrnamentGainedMessage.prototype.getClassName = function() {
  return 'OrnamentGainedMessage';
};

module.exports.id = 6368;
module.exports.class = OrnamentGainedMessage;