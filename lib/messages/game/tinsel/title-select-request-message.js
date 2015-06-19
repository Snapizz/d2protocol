var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TitleSelectRequestMessage = function() {
  this.titleId = 0;
};

util.inherits(TitleSelectRequestMessage, BaseMessage);

TitleSelectRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TitleSelectRequestMessage(output);
};

TitleSelectRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TitleSelectRequestMessage(input);
};

TitleSelectRequestMessage.prototype.serializeAs_TitleSelectRequestMessage = function(output) {
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element titleId.")));
  };
  output.writeVarShort(this.titleId);
};

TitleSelectRequestMessage.prototype.deserializeAs_TitleSelectRequestMessage = function(input) {
  this.titleId = input.readVarUhShort();
  if (this.titleId < 0) {
    throw (new Error((("Forbidden value (" + this.titleId) + ") on element of TitleSelectRequestMessage.titleId.")));
  };
};

TitleSelectRequestMessage.prototype.getMessageId = function() {
  return 6365;
};

TitleSelectRequestMessage.prototype.getClassName = function() {
  return 'TitleSelectRequestMessage';
};

module.exports.id = 6365;
module.exports.class = TitleSelectRequestMessage;