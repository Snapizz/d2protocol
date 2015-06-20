var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var HouseGuildShareRequestMessage = function() {
  this.enable = false;
  this.rights = 0;
};

util.inherits(HouseGuildShareRequestMessage, BaseMessage);

HouseGuildShareRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseGuildShareRequestMessage(output);
};

HouseGuildShareRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseGuildShareRequestMessage(input);
};

HouseGuildShareRequestMessage.prototype.serializeAs_HouseGuildShareRequestMessage = function(param1) {
  param1.writeBoolean(this.enable);
  if (this.rights < 0) {
    throw new Error("Forbidden value (" + this.rights + ") on element rights.");
  } else {
    param1.writeVarInt(this.rights);
    return;
  }
};

HouseGuildShareRequestMessage.prototype.deserializeAs_HouseGuildShareRequestMessage = function(param1) {
  this.enable = param1.readBoolean();
  this.rights = param1.readVarUhInt();
  if (this.rights < 0) {
    throw new Error("Forbidden value (" + this.rights + ") on element of HouseGuildShareRequestMessage.rights.");
  } else {
    return;
  }
};

HouseGuildShareRequestMessage.prototype.getMessageId = function() {
  return 5704;
};

HouseGuildShareRequestMessage.prototype.getClassName = function() {
  return 'HouseGuildShareRequestMessage';
};

module.exports.id = 5704;
module.exports.class = HouseGuildShareRequestMessage;
module.exports.getInstance = function() {
  return new HouseGuildShareRequestMessage();
};