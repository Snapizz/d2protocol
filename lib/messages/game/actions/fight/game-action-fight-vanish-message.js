var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameActionFightVanishMessage = function() {
  this.targetId = 0;
};

util.inherits(GameActionFightVanishMessage, BaseMessage);

GameActionFightVanishMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightVanishMessage(output);
};

GameActionFightVanishMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightVanishMessage(input);
};

GameActionFightVanishMessage.prototype.serializeAs_GameActionFightVanishMessage = function(param1) {
  this.serializeAs_AbstractGameActionMessage(param1);
  param1.writeInt(this.targetId);
};

GameActionFightVanishMessage.prototype.deserializeAs_GameActionFightVanishMessage = function(param1) {
  this.deserialize(param1);
  this.targetId = param1.readInt();
};

GameActionFightVanishMessage.prototype.getMessageId = function() {
  return 6217;
};

GameActionFightVanishMessage.prototype.getClassName = function() {
  return 'GameActionFightVanishMessage';
};

module.exports.id = 6217;
module.exports.class = GameActionFightVanishMessage;
module.exports.getInstance = function() {
  return new GameActionFightVanishMessage();
};