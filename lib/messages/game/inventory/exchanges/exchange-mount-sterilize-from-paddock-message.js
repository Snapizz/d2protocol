var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeMountSterilizeFromPaddockMessage = function() {
  this.name = "";
  this.worldX = 0;
  this.worldY = 0;
  this.sterilizator = "";
};

util.inherits(ExchangeMountSterilizeFromPaddockMessage, BaseMessage);

ExchangeMountSterilizeFromPaddockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMountSterilizeFromPaddockMessage(output);
};

ExchangeMountSterilizeFromPaddockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMountSterilizeFromPaddockMessage(input);
};

ExchangeMountSterilizeFromPaddockMessage.prototype.serializeAs_ExchangeMountSterilizeFromPaddockMessage = function(param1) {
  param1.writeUTF(this.name);
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
  } else {
    param1.writeShort(this.worldX);
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
    } else {
      param1.writeShort(this.worldY);
      param1.writeUTF(this.sterilizator);
      return;
    }
  }
};

ExchangeMountSterilizeFromPaddockMessage.prototype.deserializeAs_ExchangeMountSterilizeFromPaddockMessage = function(param1) {
  this.name = param1.readUTF();
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeMountSterilizeFromPaddockMessage.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeMountSterilizeFromPaddockMessage.worldY.");
    } else {
      this.sterilizator = param1.readUTF();
      return;
    }
  }
};

ExchangeMountSterilizeFromPaddockMessage.prototype.getMessageId = function() {
  return 6056;
};

ExchangeMountSterilizeFromPaddockMessage.prototype.getClassName = function() {
  return 'ExchangeMountSterilizeFromPaddockMessage';
};

module.exports.id = 6056;
module.exports.class = ExchangeMountSterilizeFromPaddockMessage;
module.exports.getInstance = function() {
  return new ExchangeMountSterilizeFromPaddockMessage();
};