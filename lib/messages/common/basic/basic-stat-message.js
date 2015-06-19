var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicStatMessage = function() {
  this.statId = 0;
};

util.inherits(BasicStatMessage, BaseMessage);

BasicStatMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicStatMessage(output);
};

BasicStatMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicStatMessage(input);
};

BasicStatMessage.prototype.serializeAs_BasicStatMessage = function(output) {
  output.writeVarShort(this.statId);
};

BasicStatMessage.prototype.deserializeAs_BasicStatMessage = function(input) {
  this.statId = input.readVarUhShort();
  if (this.statId < 0) {
    throw (new Error((("Forbidden value (" + this.statId) + ") on element of BasicStatMessage.statId.")));
  };
};

BasicStatMessage.prototype.getMessageId = function() {
  return 6530;
};

BasicStatMessage.prototype.getClassName = function() {
  return 'BasicStatMessage';
};

module.exports.id = 6530;
module.exports.class = BasicStatMessage;