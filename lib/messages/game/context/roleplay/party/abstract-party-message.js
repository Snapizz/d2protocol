var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var AbstractPartyMessage = function() {
  this.partyId = 0;
};

util.inherits(AbstractPartyMessage, BaseMessage);

AbstractPartyMessage.prototype.serialize = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

AbstractPartyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractPartyMessage(input);
};

AbstractPartyMessage.prototype.serializeAs_AbstractPartyMessage = function(param1) {
  if (this.partyId < 0) {
    throw new Error("Forbidden value (" + this.partyId + ") on element partyId.");
  } else {
    param1.writeVarInt(this.partyId);
    return;
  }
};

AbstractPartyMessage.prototype.deserializeAs_AbstractPartyMessage = function(param1) {
  this.partyId = param1.readVarUhInt();
  if (this.partyId < 0) {
    throw new Error("Forbidden value (" + this.partyId + ") on element of AbstractPartyMessage.partyId.");
  } else {
    return;
  }
};

AbstractPartyMessage.prototype.getMessageId = function() {
  return 6274;
};

AbstractPartyMessage.prototype.getClassName = function() {
  return 'AbstractPartyMessage';
};

module.exports.id = 6274;
module.exports.class = AbstractPartyMessage;
module.exports.getInstance = function() {
  return new AbstractPartyMessage();
};