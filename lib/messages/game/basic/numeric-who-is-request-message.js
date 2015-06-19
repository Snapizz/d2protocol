var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NumericWhoIsRequestMessage = function() {
  this.playerId = 0;
};

util.inherits(NumericWhoIsRequestMessage, BaseMessage);

NumericWhoIsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_NumericWhoIsRequestMessage(output);
};

NumericWhoIsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NumericWhoIsRequestMessage(input);
};

NumericWhoIsRequestMessage.prototype.serializeAs_NumericWhoIsRequestMessage = function(output) {
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
};

NumericWhoIsRequestMessage.prototype.deserializeAs_NumericWhoIsRequestMessage = function(input) {
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of NumericWhoIsRequestMessage.playerId.")));
  };
};

NumericWhoIsRequestMessage.prototype.getMessageId = function() {
  return 6298;
};

NumericWhoIsRequestMessage.prototype.getClassName = function() {
  return 'NumericWhoIsRequestMessage';
};

module.exports.id = 6298;
module.exports.class = NumericWhoIsRequestMessage;