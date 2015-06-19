var d2com = require('d2com'),
  BaseMessage = require('./game-action-fight-dispell-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightDispellEffectMessage = function() {
  this.boostUID = 0;
};

util.inherits(GameActionFightDispellEffectMessage, BaseMessage);

GameActionFightDispellEffectMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDispellEffectMessage(output);
};

GameActionFightDispellEffectMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDispellEffectMessage(input);
};

GameActionFightDispellEffectMessage.prototype.serializeAs_GameActionFightDispellEffectMessage = function(output) {
  this.serializeAs_GameActionFightDispellMessage(output);
  if (this.boostUID < 0) {
    throw (new Error((("Forbidden value (" + this.boostUID) + ") on element boostUID.")));
  };
  output.writeInt(this.boostUID);
};

GameActionFightDispellEffectMessage.prototype.deserializeAs_GameActionFightDispellEffectMessage = function(input) {
  this.deserialize(input);
  this.boostUID = input.readInt();
  if (this.boostUID < 0) {
    throw (new Error((("Forbidden value (" + this.boostUID) + ") on element of GameActionFightDispellEffectMessage.boostUID.")));
  };
};

GameActionFightDispellEffectMessage.prototype.getMessageId = function() {
  return 6113;
};

GameActionFightDispellEffectMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellEffectMessage';
};

module.exports.id = 6113;
module.exports.class = GameActionFightDispellEffectMessage;