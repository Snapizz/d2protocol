var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

URLOpenMessage.prototype.serializeAs_URLOpenMessage = function(output) {
  if (this.urlId < 0) {
    throw (new Error((("Forbidden value (" + this.urlId) + ") on element urlId.")));
  };
  output.writeByte(this.urlId);
};

URLOpenMessage.prototype.deserializeAs_URLOpenMessage = function(input) {
  this.urlId = input.readByte();
  if (this.urlId < 0) {
    throw (new Error((("Forbidden value (" + this.urlId) + ") on element of URLOpenMessage.urlId.")));
  };
};

URLOpenMessage.prototype.getMessageId = function() {
  return 6266;
};

URLOpenMessage.prototype.getClassName = function() {
  return 'URLOpenMessage';
};

module.exports.id = 6266;
module.exports.class = URLOpenMessage;