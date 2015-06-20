var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

NumericWhoIsMessage.prototype.serializeAs_NumericWhoIsMessage = function(param1) {
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
  } else {
    param1.writeVarInt(this.playerId);
    if (this.accountId < 0) {
      throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
      param1.writeInt(this.accountId);
      return;
    }
  }
};

NumericWhoIsMessage.prototype.deserializeAs_NumericWhoIsMessage = function(param1) {
  this.playerId = param1.readVarUhInt();
  if (this.playerId < 0) {
    throw new Error("Forbidden value (" + this.playerId + ") on element of NumericWhoIsMessage.playerId.");
  } else {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
      throw new Error("Forbidden value (" + this.accountId + ") on element of NumericWhoIsMessage.accountId.");
    } else {
      return;
    }
  }
};

NumericWhoIsMessage.prototype.getMessageId = function() {
  return 6297;
};

NumericWhoIsMessage.prototype.getClassName = function() {
  return 'NumericWhoIsMessage';
};

module.exports.id = 6297;
module.exports.class = NumericWhoIsMessage;
module.exports.getInstance = function() {
  return new NumericWhoIsMessage();
};