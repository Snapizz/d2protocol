var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightDispellableEffectMessage = function() {
  this.effect;
};

util.inherits(GameActionFightDispellableEffectMessage, BaseMessage);

GameActionFightDispellableEffectMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDispellableEffectMessage(output);
};

GameActionFightDispellableEffectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDispellableEffectMessage(input);
};

GameActionFightDispellableEffectMessage.prototype.serializeAs_GameActionFightDispellableEffectMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeShort(this.effect.getTypeId());
  this.effect.serialize(output);
};

GameActionFightDispellableEffectMessage.prototype.deserializeAs_GameActionFightDispellableEffectMessage = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.effect = ProtocolTypeManager.getInstance(AbstractFightDispellableEffect, _id1);
  this.effect.deserialize(input);
};

GameActionFightDispellableEffectMessage.prototype.getMessageId = function() {
  return 6070;
};

GameActionFightDispellableEffectMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellableEffectMessage';
};

module.exports.id = 6070;
module.exports.class = GameActionFightDispellableEffectMessage;