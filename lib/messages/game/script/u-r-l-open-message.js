var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var URLOpenMessage = function() {
  this.urlId = 0;
};

util.inherits(URLOpenMessage, BaseMessage);

URLOpenMessage.prototype.serialize = function(output) {
  this.serializeAs_URLOpenMessage(output);
};

URLOpenMessage.prototype.deserialize = function(input) {
  this.deserializeAs_URLOpenMessage(input);
};

URLOpenMessage.prototype.serializeAs_URLOpenMessage = function(param1) {
  if (this.urlId < 0) {
    throw new Error("Forbidden value (" + this.urlId + ") on element urlId.");
  } else {
    param1.writeByte(this.urlId);
    return;
  }
};

URLOpenMessage.prototype.deserializeAs_URLOpenMessage = function(param1) {
  this.urlId = param1.readByte();
  if (this.urlId < 0) {
    throw new Error("Forbidden value (" + this.urlId + ") on element of URLOpenMessage.urlId.");
  } else {
    return;
  }
};

URLOpenMessage.prototype.getMessageId = function() {
  return 6266;
};

URLOpenMessage.prototype.getClassName = function() {
  return 'URLOpenMessage';
};

module.exports.id = 6266;
module.exports.class = URLOpenMessage;
module.exports.getInstance = function() {
  return new URLOpenMessage();
};