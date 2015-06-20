var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var SpellForgetUIMessage = function() {
  this.open = false;
};

util.inherits(SpellForgetUIMessage, BaseMessage);

SpellForgetUIMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellForgetUIMessage(output);
};

SpellForgetUIMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellForgetUIMessage(input);
};

SpellForgetUIMessage.prototype.serializeAs_SpellForgetUIMessage = function(param1) {
  param1.writeBoolean(this.open);
};

SpellForgetUIMessage.prototype.deserializeAs_SpellForgetUIMessage = function(param1) {
  this.open = param1.readBoolean();
};

SpellForgetUIMessage.prototype.getMessageId = function() {
  return 5565;
};

SpellForgetUIMessage.prototype.getClassName = function() {
  return 'SpellForgetUIMessage';
};

module.exports.id = 5565;
module.exports.class = SpellForgetUIMessage;