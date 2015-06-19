var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeBidHouseBuyResultMessage = function() {
  this.uid = 0;
  this.bought = false;
};

util.inherits(ExchangeBidHouseBuyResultMessage, BaseMessage);

ExchangeBidHouseBuyResultMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeBidHouseBuyResultMessage(output);
};

ExchangeBidHouseBuyResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeBidHouseBuyResultMessage(input);
};

ExchangeBidHouseBuyResultMessage.prototype.serializeAs_ExchangeBidHouseBuyResultMessage = function(output) {
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element uid.")));
  };
  output.writeVarInt(this.uid);
  output.writeBoolean(this.bought);
};

ExchangeBidHouseBuyResultMessage.prototype.deserializeAs_ExchangeBidHouseBuyResultMessage = function(input) {
  this.uid = input.readVarUhInt();
  if (this.uid < 0) {
    throw (new Error((("Forbidden value (" + this.uid) + ") on element of ExchangeBidHouseBuyResultMessage.uid.")));
  };
  this.bought = input.readBoolean();
};

ExchangeBidHouseBuyResultMessage.prototype.getMessageId = function() {
  return 6272;
};

ExchangeBidHouseBuyResultMessage.prototype.getClassName = function() {
  return 'ExchangeBidHouseBuyResultMessage';
};

module.exports.id = 6272;
module.exports.class = ExchangeBidHouseBuyResultMessage;