var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseSoldMessage = function() {
  this.houseId = 0;
  this.realPrice = 0;
  this.buyerName = "";
};

util.inherits(HouseSoldMessage, BaseMessage);

HouseSoldMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseSoldMessage(output);
};

HouseSoldMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseSoldMessage(input);
};

HouseSoldMessage.prototype.serializeAs_HouseSoldMessage = function(param1) {
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element houseId.");
  } else {
    param1.writeVarInt(this.houseId);
    if (this.realPrice < 0) {
      throw new Error("Forbidden value (" + this.realPrice + ") on element realPrice.");
    } else {
      param1.writeVarInt(this.realPrice);
      param1.writeUTF(this.buyerName);
      return;
    }
  }
};

HouseSoldMessage.prototype.deserializeAs_HouseSoldMessage = function(param1) {
  this.houseId = param1.readVarUhInt();
  if (this.houseId < 0) {
    throw new Error("Forbidden value (" + this.houseId + ") on element of HouseSoldMessage.houseId.");
  } else {
    this.realPrice = param1.readVarUhInt();
    if (this.realPrice < 0) {
      throw new Error("Forbidden value (" + this.realPrice + ") on element of HouseSoldMessage.realPrice.");
    } else {
      this.buyerName = param1.readUTF();
      return;
    }
  }
};

HouseSoldMessage.prototype.getMessageId = function() {
  return 5737;
};

HouseSoldMessage.prototype.getClassName = function() {
  return 'HouseSoldMessage';
};

module.exports.id = 5737;
module.exports.class = HouseSoldMessage;