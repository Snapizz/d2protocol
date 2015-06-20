var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameActionFightDispellMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightDispellMessage, BaseMessage);

GameActionFightDispellMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightDispellMessage(output);
};

GameActionFightDispellMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightDispellMessage(input);
};

GameActionFightDispellMessage.prototype.serializeAs_GameActionFightDispellMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
};

GameActionFightDispellMessage.prototype.deserializeAs_GameActionFightDispellMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
};

GameActionFightDispellMessage.prototype.getMessageId = function() {
  return 5533;
};

GameActionFightDispellMessage.prototype.getClassName = function() {
  return 'GameActionFightDispellMessage';
};

module.exports.id = 5533;
module.exports.class = GameActionFightDispellMessage;