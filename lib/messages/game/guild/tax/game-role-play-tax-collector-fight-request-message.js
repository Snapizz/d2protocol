var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayTaxCollectorFightRequestMessage = function() {
  this.taxCollectorId = 0;
};

util.inherits(GameRolePlayTaxCollectorFightRequestMessage, BaseMessage);

GameRolePlayTaxCollectorFightRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayTaxCollectorFightRequestMessage(output);
};

GameRolePlayTaxCollectorFightRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayTaxCollectorFightRequestMessage(input);
};

GameRolePlayTaxCollectorFightRequestMessage.prototype.serializeAs_GameRolePlayTaxCollectorFightRequestMessage = function(output) {
  param1.writeInt(this.taxCollectorId);
};

GameRolePlayTaxCollectorFightRequestMessage.prototype.deserializeAs_GameRolePlayTaxCollectorFightRequestMessage = function(input) {
  this.taxCollectorId = param1.readInt();
};

GameRolePlayTaxCollectorFightRequestMessage.prototype.getMessageId = function() {
  return 5954;
};

GameRolePlayTaxCollectorFightRequestMessage.prototype.getClassName = function() {
  return 'GameRolePlayTaxCollectorFightRequestMessage';
};

module.exports.id = 5954;
module.exports.class = GameRolePlayTaxCollectorFightRequestMessage;