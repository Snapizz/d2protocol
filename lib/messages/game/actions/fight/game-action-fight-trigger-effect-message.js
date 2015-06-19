var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-dispell-effect-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightTriggerEffectMessage = function() {

};

util.inherits(GameActionFightTriggerEffectMessage, BaseMessage);

GameActionFightTriggerEffectMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightTriggerEffectMessage(output);
};

GameActionFightTriggerEffectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightTriggerEffectMessage(input);
};

GameActionFightTriggerEffectMessage.prototype.serializeAs_GameActionFightTriggerEffectMessage = function(output) {
  this.serializeAs_GameActionFightDispellEffectMessage(output);
};

GameActionFightTriggerEffectMessage.prototype.deserializeAs_GameActionFightTriggerEffectMessage = function(input) {
  this.deserialize(input);
};

GameActionFightTriggerEffectMessage.prototype.getMessageId = function() {
  return 6147;
};

GameActionFightTriggerEffectMessage.prototype.getClassName = function() {
  return 'GameActionFightTriggerEffectMessage';
};

module.exports.id = 6147;
module.exports.class = GameActionFightTriggerEffectMessage;