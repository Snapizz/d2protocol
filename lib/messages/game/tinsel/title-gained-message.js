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

TitleGainedMessage.prototype.serializeAs_TitleGainedMessage = function(output) {
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element titleId.")));
  };
  output.writeVarShort(this.titleId);
};

TitleGainedMessage.prototype.deserializeAs_TitleGainedMessage = function(input) {
  this.titleId = input.readVarUhShort();
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element of TitleGainedMessage.titleId.")));
  };
};

TitleGainedMessage.prototype.getMessageId = function() {
  return 6364;
};

TitleGainedMessage.prototype.getClassName = function() {
  return 'TitleGainedMessage';
};

module.exports.id = 6364;
module.exports.class = TitleGainedMessage;