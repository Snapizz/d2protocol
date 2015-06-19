var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitleLostMessage = function() {
  this.titleId = 0;
};

util.inherits(TitleLostMessage, BaseMessage);

TitleLostMessage.prototype.serialize = function(output) {
  this.serializeAs_TitleLostMessage(output);
};

TitleLostMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitleLostMessage(input);
};

TitleLostMessage.prototype.serializeAs_TitleLostMessage = function(output) {
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element titleId.")));
  };
  output.writeVarShort(this.titleId);
};

TitleLostMessage.prototype.deserializeAs_TitleLostMessage = function(input) {
  this.titleId = input.readVarUhShort();
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element of TitleLostMessage.titleId.")));
  };
};

TitleLostMessage.prototype.getMessageId = function() {
  return 6371;
};

TitleLostMessage.prototype.getClassName = function() {
  return 'TitleLostMessage';
};

module.exports.id = 6371;
module.exports.class = TitleLostMessage;