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

AccountCapabilitiesMessage.prototype.serializeAs_AccountCapabilitiesMessage = function(param1) {
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
  } else {
    param1.writeInt(this.accountId);
    param1.writeBoolean(this.tutorialAvailable);
    if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
      throw new Error("Forbidden value (" + this.breedsVisible + ") on element breedsVisible.");
    } else {
      param1.writeShort(this.breedsVisible);
      if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
        throw new Error("Forbidden value (" + this.breedsAvailable + ") on element breedsAvailable.");
      } else {
        param1.writeShort(this.breedsAvailable);
        param1.writeByte(this.status);
        return;
      }
    }
  }
};

AccountCapabilitiesMessage.prototype.deserializeAs_AccountCapabilitiesMessage = function(param1) {
  this.accountId = param1.readInt();
  if (this.accountId < 0) {
    throw new Error("Forbidden value (" + this.accountId + ") on element of AccountCapabilitiesMessage.accountId.");
  } else {
    this.tutorialAvailable = param1.readBoolean();
    this.breedsVisible = param1.readUnsignedShort();
    if (this.breedsVisible < 0 || this.breedsVisible > 65535) {
      throw new Error("Forbidden value (" + this.breedsVisible + ") on element of AccountCapabilitiesMessage.breedsVisible.");
    } else {
      this.breedsAvailable = param1.readUnsignedShort();
      if (this.breedsAvailable < 0 || this.breedsAvailable > 65535) {
        throw new Error("Forbidden value (" + this.breedsAvailable + ") on element of AccountCapabilitiesMessage.breedsAvailable.");
      } else {
        this.status = param1.readByte();
        return;
      }
    }
  }
};

AccountCapabilitiesMessage.prototype.getMessageId = function() {
  return 6216;
};

AccountCapabilitiesMessage.prototype.getClassName = function() {
  return 'AccountCapabilitiesMessage';
};

module.exports.id = 6216;
module.exports.class = AccountCapabilitiesMessage;
module.exports.getInstance = function() {
  return new AccountCapabilitiesMessage();
};