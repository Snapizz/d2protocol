var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseBuyRequestMessage = function() {
  this.proposedPrice = 0;
};

util.inherits(HouseBuyRequestMessage, BaseMessage);

HouseBuyRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseBuyRequestMessage(output);
};

HouseBuyRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseBuyRequestMessage(input);
};

HouseBuyRequestMessage.prototype.serializeAs_HouseBuyRequestMessage = function(output) {
  if (this.proposedPrice < 0) {
    throw (new Error((("Forbidden value (" + this.proposedPrice) + ") on element proposedPrice.")));
  };
  output.writeVarInt(this.proposedPrice);
};

HouseBuyRequestMessage.prototype.deserializeAs_HouseBuyRequestMessage = function(input) {
  this.proposedPrice = input.readVarUhInt();
  if (this.proposedPrice < 0) {
    throw (new Error((("Forbidden value (" + this.proposedPrice) + ") on element of HouseBuyRequestMessage.proposedPrice.")));
  };
};

HouseBuyRequestMessage.prototype.getMessageId = function() {
  return 5738;
};

HouseBuyRequestMessage.prototype.getClassName = function() {
  return 'HouseBuyRequestMessage';
};

module.exports.id = 5738;
module.exports.class = HouseBuyRequestMessage;