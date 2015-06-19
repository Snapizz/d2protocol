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

HouseGuildShareRequestMessage.prototype.serializeAs_HouseGuildShareRequestMessage = function(output) {
  output.writeBoolean(this.enable);
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element rights.")));
  };
  output.writeVarInt(this.rights);
};

HouseGuildShareRequestMessage.prototype.deserializeAs_HouseGuildShareRequestMessage = function(input) {
  this.enable = input.readBoolean();
  this.rights = input.readVarUhInt();
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element of HouseGuildShareRequestMessage.rights.")));
  };
};

HouseGuildShareRequestMessage.prototype.getMessageId = function() {
  return 5704;
};

HouseGuildShareRequestMessage.prototype.getClassName = function() {
  return 'HouseGuildShareRequestMessage';
};

module.exports.id = 5704;
module.exports.class = HouseGuildShareRequestMessage;