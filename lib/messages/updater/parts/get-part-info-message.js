var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GetPartInfoMessage = function() {
  this.id = "";
};

util.inherits(GetPartInfoMessage, BaseMessage);

GetPartInfoMessage.prototype.serialize = function(output) {
  this.serializeAs_GetPartInfoMessage(output);
};

GetPartInfoMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GetPartInfoMessage(input);
};

GetPartInfoMessage.prototype.serializeAs_GetPartInfoMessage = function(param1) {
  param1.writeUTF(this.id);
};

GetPartInfoMessage.prototype.deserializeAs_GetPartInfoMessage = function(param1) {
  this.id = param1.readUTF();
};

GetPartInfoMessage.prototype.getMessageId = function() {
  return 1506;
};

GetPartInfoMessage.prototype.getClassName = function() {
  return 'GetPartInfoMessage';
};

module.exports.id = 1506;
module.exports.class = GetPartInfoMessage;