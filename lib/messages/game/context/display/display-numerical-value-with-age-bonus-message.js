var d2com = require('d2com'),
  BaseMessage = require('./display-numerical-value-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DisplayNumericalValueWithAgeBonusMessage = function() {
  this.valueOfBonus = 0;
};

util.inherits(DisplayNumericalValueWithAgeBonusMessage, BaseMessage);

DisplayNumericalValueWithAgeBonusMessage.prototype.serialize = function(output) {
  this.serializeAs_DisplayNumericalValueWithAgeBonusMessage(output);
};

DisplayNumericalValueWithAgeBonusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DisplayNumericalValueWithAgeBonusMessage(input);
};

DisplayNumericalValueWithAgeBonusMessage.prototype.serializeAs_DisplayNumericalValueWithAgeBonusMessage = function(output) {
  this.serializeAs_DisplayNumericalValueMessage(output);
  output.writeInt(this.valueOfBonus);
};

DisplayNumericalValueWithAgeBonusMessage.prototype.deserializeAs_DisplayNumericalValueWithAgeBonusMessage = function(input) {
  this.deserialize(input);
  this.valueOfBonus = input.readInt();
};

DisplayNumericalValueWithAgeBonusMessage.prototype.getMessageId = function() {
  return 6361;
};

DisplayNumericalValueWithAgeBonusMessage.prototype.getClassName = function() {
  return 'DisplayNumericalValueWithAgeBonusMessage';
};

module.exports.id = 6361;
module.exports.class = DisplayNumericalValueWithAgeBonusMessage;