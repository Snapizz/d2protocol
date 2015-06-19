var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountFreeFromPaddockMessage = function() {
  this.name = "";
  this.worldX = 0;
  this.worldY = 0;
  this.liberator = "";
};

util.inherits(ExchangeMountFreeFromPaddockMessage, BaseMessage);

ExchangeMountFreeFromPaddockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountFreeFromPaddockMessage(output);
};

ExchangeMountFreeFromPaddockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountFreeFromPaddockMessage(input);
};

ExchangeMountFreeFromPaddockMessage.prototype.serializeAs_ExchangeMountFreeFromPaddockMessage = function(output) {
  output.writeUTF(this.name);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeUTF(this.liberator);
};

ExchangeMountFreeFromPaddockMessage.prototype.deserializeAs_ExchangeMountFreeFromPaddockMessage = function(input) {
  this.name = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of ExchangeMountFreeFromPaddockMessage.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of ExchangeMountFreeFromPaddockMessage.worldY.")));
  };
  this.liberator = input.readUTF();
};

ExchangeMountFreeFromPaddockMessage.prototype.getMessageId = function() {
  return 6055;
};

ExchangeMountFreeFromPaddockMessage.prototype.getClassName = function() {
  return 'ExchangeMountFreeFromPaddockMessage';
};

module.exports.id = 6055;
module.exports.class = ExchangeMountFreeFromPaddockMessage;