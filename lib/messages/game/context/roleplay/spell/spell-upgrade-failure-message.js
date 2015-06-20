var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var SpellUpgradeFailureMessage = function() {

};

util.inherits(SpellUpgradeFailureMessage, BaseMessage);

SpellUpgradeFailureMessage.prototype.serialize = function(output) {
  this.serializeAs_SpellUpgradeFailureMessage(output);
};

SpellUpgradeFailureMessage.prototype.deserialize = function(input) {
  this.deserializeAs_SpellUpgradeFailureMessage(input);
};

SpellUpgradeFailureMessage.prototype.serializeAs_SpellUpgradeFailureMessage = function(param1) {

};

SpellUpgradeFailureMessage.prototype.deserializeAs_SpellUpgradeFailureMessage = function(param1) {

};

SpellUpgradeFailureMessage.prototype.getMessageId = function() {
  return 1202;
};

SpellUpgradeFailureMessage.prototype.getClassName = function() {
  return 'SpellUpgradeFailureMessage';
};

module.exports.id = 1202;
module.exports.class = SpellUpgradeFailureMessage;
module.exports.getInstance = function() {
  return new SpellUpgradeFailureMessage();
};