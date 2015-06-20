var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TitleSelectedMessage = function() {
  this.titleId = 0;
};

util.inherits(TitleSelectedMessage, BaseMessage);

TitleSelectedMessage.prototype.serialize = function(output) {
  this.serializeAs_TitleSelectedMessage(output);
};

TitleSelectedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitleSelectedMessage(input);
};

TitleSelectedMessage.prototype.serializeAs_TitleSelectedMessage = function(param1) {
  if (this.titleId < 0) {
    throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
  } else {
    param1.writeVarShort(this.titleId);
    return;
  }
};

TitleSelectedMessage.prototype.deserializeAs_TitleSelectedMessage = function(param1) {
  this.titleId = param1.readVarUhShort();
  if (this.titleId < 0) {
    throw new Error("Forbidden value (" + this.titleId + ") on element of TitleSelectedMessage.titleId.");
  } else {
    return;
  }
};

TitleSelectedMessage.prototype.getMessageId = function() {
  return 6366;
};

TitleSelectedMessage.prototype.getClassName = function() {
  return 'TitleSelectedMessage';
};

module.exports.id = 6366;
module.exports.class = TitleSelectedMessage;
module.exports.getInstance = function() {
  return new TitleSelectedMessage();
};