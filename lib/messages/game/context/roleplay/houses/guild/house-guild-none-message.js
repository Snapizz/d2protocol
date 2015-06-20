var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var HouseGuildNoneMessage = function() {
  this.houseId = 0;
};

util.inherits(HouseGuildNoneMessage, BaseMessage);

HouseGuildNoneMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseGuildNoneMessage(output);
};

HouseGuildNoneMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseGuildNoneMessage(input);
};

HouseGuildNoneMessage.prototype.serializeAs_HouseGuildNoneMessage = function(param1) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    return;
  }
};

HouseGuildNoneMessage.prototype.deserializeAs_HouseGuildNoneMessage = function(param1) {
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of HouseGuildNoneMessage.houseId.");
  } else {
    return;
  }
};

HouseGuildNoneMessage.prototype.getMessageId = function() {
  return 5701;
};

HouseGuildNoneMessage.prototype.getClassName = function() {
  return 'HouseGuildNoneMessage';
};

module.exports.id = 5701;
module.exports.class = HouseGuildNoneMessage;
module.exports.getInstance = function() {
  return new HouseGuildNoneMessage();
};