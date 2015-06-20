var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

GameActionFightDispellEffectMessage.prototype.serializeAs_GameActionFightDispellEffectMessage = function(param1) {
  this.serializeAs_GameActionFightDispellMessage(param1);
  if (this.boostUID < 0) {
    throw new Error("Forbidden value (" + this.boostUID + ") on element boostUID.");
  } else {
    param1.writeInt(this.boostUID);
    return;
  }
};

GameActionFightDispellEffectMessage.prototype.deserializeAs_GameActionFightDispellEffectMessage = function(param1) {
  this.deserialize(param1);
  this.boostUID = param1.readInt();
  if (this.boostUID < 0) {
    throw new Error("Forbidden value (" + this.boostUID + ") on element of GameActionFightDispellEffectMessage.boostUID.");
  } else {
    return;
  }
};

GameActionFightDispellEffectMessage.prototype.getMessageId = function() {
  return 6113;
};

GameActionFightDispellEffectMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellEffectMessage';
};

module.exports.id = 6113;
module.exports.class = GameActionFightDispellEffectMessage;
module.exports.getInstance = function() {
  return new GameActionFightDispellEffectMessage();
};