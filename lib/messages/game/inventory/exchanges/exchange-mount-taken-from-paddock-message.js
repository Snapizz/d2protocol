var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMountTakenFromPaddockMessage = function() {
  this.name = "";
  this.worldX = 0;
  this.worldY = 0;
  this.ownername = "";
};

util.inherits(ExchangeMountTakenFromPaddockMessage, BaseMessage);

ExchangeMountTakenFromPaddockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountTakenFromPaddockMessage(output);
};

ExchangeMountTakenFromPaddockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountTakenFromPaddockMessage(input);
};

ExchangeMountTakenFromPaddockMessage.prototype.serializeAs_ExchangeMountTakenFromPaddockMessage = function(output) {
  output.writeUTF(this.name);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeUTF(this.ownername);
};

ExchangeMountTakenFromPaddockMessage.prototype.deserializeAs_ExchangeMountTakenFromPaddockMessage = function(input) {
  this.name = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of ExchangeMountTakenFromPaddockMessage.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of ExchangeMountTakenFromPaddockMessage.worldY.")));
  };
  this.ownername = input.readUTF();
};

ExchangeMountTakenFromPaddockMessage.prototype.getMessageId = function() {
  return 5994;
};

ExchangeMountTakenFromPaddockMessage.prototype.getClassName = function() {
  return 'ExchangeMountTakenFromPaddockMessage';
};

module.exports.id = 5994;
module.exports.class = ExchangeMountTakenFromPaddockMessage;