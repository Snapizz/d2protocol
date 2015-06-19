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

HouseSoldMessage.prototype.serializeAs_HouseSoldMessage = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeVarInt(this.houseId);
  if (this.realPrice < 0) {
    throw (new Error((("Forbidden value (" + this.realPrice) + ") on element realPrice.")));
  };
  output.writeVarInt(this.realPrice);
  output.writeUTF(this.buyerName);
};

HouseSoldMessage.prototype.deserializeAs_HouseSoldMessage = function(input) {
  this.houseId = input.readVarUhInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of HouseSoldMessage.houseId.")));
  };
  this.realPrice = input.readVarUhInt();
  if (this.realPrice < 0) {
    throw (new Error((("Forbidden value (" + this.realPrice) + ") on element of HouseSoldMessage.realPrice.")));
  };
  this.buyerName = input.readUTF();
};

HouseSoldMessage.prototype.getMessageId = function() {
  return 5737;
};

HouseSoldMessage.prototype.getClassName = function() {
  return 'HouseSoldMessage';
};

module.exports.id = 5737;
module.exports.class = HouseSoldMessage;