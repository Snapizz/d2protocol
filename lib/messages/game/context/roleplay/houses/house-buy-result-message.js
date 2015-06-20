var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var HouseBuyResultMessage = function() {
  this.houseId = 0;
  this.bought = false;
  this.realPrice = 0;
};

util.inherits(HouseBuyResultMessage, BaseMessage);

HouseBuyResultMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseBuyResultMessage(output);
};

HouseBuyResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseBuyResultMessage(input);
};

HouseBuyResultMessage.prototype.serializeAs_HouseBuyResultMessage = function(param1) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    param1.writeBoolean(this.bought);
    if (this.realPrice < 0) {
      throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
    } else {
      param1.writeVarInt(this.realPrice);
      return;
    }
  }
};

HouseBuyResultMessage.prototype.deserializeAs_HouseBuyResultMessage = function(param1) {
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of HouseBuyResultMessage.houseId.");
  } else {
    this.bought = param1.readBoolean();
    this.realPrice = param1.readVarUhInt();
    if (this.realPrice < 0) {
      throw new Error("Forbidden value (" + this.realPrice + ") on element of HouseBuyResultMessage.realPrice.");
    } else {
      return;
    }
  }
};

HouseBuyResultMessage.prototype.getMessageId = function() {
  return 5735;
};

HouseBuyResultMessage.prototype.getClassName = function() {
  return 'HouseBuyResultMessage';
};

module.exports.id = 5735;
module.exports.class = HouseBuyResultMessage;
module.exports.getInstance = function() {
  return new HouseBuyResultMessage();
};