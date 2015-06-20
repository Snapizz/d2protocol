var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitleGainedMessage = function() {
  this.titleId = 0;
};

util.inherits(TitleGainedMessage, BaseMessage);

TitleGainedMessage.prototype.serialize = function(output) {
  this.serializeAs_TitleGainedMessage(output);
};

TitleGainedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitleGainedMessage(input);
};

TitleGainedMessage.prototype.serializeAs_TitleGainedMessage = function(param1) {
  if (this.titleId < 0) {
    throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
  } else {
    param1.writeVarShort(this.titleId);
    return;
  }
};

TitleGainedMessage.prototype.deserializeAs_TitleGainedMessage = function(param1) {
  this.titleId = param1.readVarUhShort();
  if (this.titleId < 0) {
    throw new Error("Forbidden value (" + this.titleId + ") on element of TitleGainedMessage.titleId.");
  } else {
    return;
  }
};

TitleGainedMessage.prototype.getMessageId = function() {
  return 6364;
};

TitleGainedMessage.prototype.getClassName = function() {
  return 'TitleGainedMessage';
};

module.exports.id = 6364;
module.exports.class = TitleGainedMessage;