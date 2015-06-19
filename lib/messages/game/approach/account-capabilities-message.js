var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AccountCapabilitiesMessage = function() {
  this.accountId = 0;
  this.tutorialAvailable = false;
  this.breedsVisible = 0;
  this.breedsAvailable = 0;
  this.status = -1;
};

util.inherits(AccountCapabilitiesMessage, BaseMessage);

AccountCapabilitiesMessage.prototype.serialize = function(output) {
  this.serializeAs_AccountCapabilitiesMessage(output);
};

AccountCapabilitiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AccountCapabilitiesMessage(input);
};

AccountCapabilitiesMessage.prototype.serializeAs_AccountCapabilitiesMessage = function(output) {
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  output.writeBoolean(this.tutorialAvailable);
  if ((((this.breedsVisible < 0)) || ((this.breedsVisible > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.breedsVisible) + ") on element breedsVisible.")));
  };
  output.writeShort(this.breedsVisible);
  if ((((this.breedsAvailable < 0)) || ((this.breedsAvailable > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.breedsAvailable) + ") on element breedsAvailable.")));
  };
  output.writeShort(this.breedsAvailable);
  output.writeByte(this.status);
};

AccountCapabilitiesMessage.prototype.deserializeAs_AccountCapabilitiesMessage = function(input) {
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of AccountCapabilitiesMessage.accountId.")));
  };
  this.tutorialAvailable = input.readBoolean();
  this.breedsVisible = input.readUnsignedShort();
  if ((((this.breedsVisible < 0)) || ((this.breedsVisible > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.breedsVisible) + ") on element of AccountCapabilitiesMessage.breedsVisible.")));
  };
  this.breedsAvailable = input.readUnsignedShort();
  if ((((this.breedsAvailable < 0)) || ((this.breedsAvailable > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.breedsAvailable) + ") on element of AccountCapabilitiesMessage.breedsAvailable.")));
  };
  this.status = input.readByte();
};

AccountCapabilitiesMessage.prototype.getMessageId = function() {
  return 6216;
};

AccountCapabilitiesMessage.prototype.getClassName = function() {
  return 'AccountCapabilitiesMessage';
};

module.exports.id = 6216;
module.exports.class = AccountCapabilitiesMessage;