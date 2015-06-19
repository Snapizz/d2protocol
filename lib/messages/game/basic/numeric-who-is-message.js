var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NumericWhoIsMessage = function() {
  this.playerId = 0;
  this.accountId = 0;
};

util.inherits(NumericWhoIsMessage, BaseMessage);

NumericWhoIsMessage.prototype.serialize = function(output) {
  this.serializeAs_NumericWhoIsMessage(output);
};

NumericWhoIsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NumericWhoIsMessage(input);
};

NumericWhoIsMessage.prototype.serializeAs_NumericWhoIsMessage = function(output) {
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
};

NumericWhoIsMessage.prototype.deserializeAs_NumericWhoIsMessage = function(input) {
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of NumericWhoIsMessage.playerId.")));
  };
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of NumericWhoIsMessage.accountId.")));
  };
};

NumericWhoIsMessage.prototype.getMessageId = function() {
  return 6297;
};

NumericWhoIsMessage.prototype.getClassName = function() {
  return 'NumericWhoIsMessage';
};

module.exports.id = 6297;
module.exports.class = NumericWhoIsMessage;