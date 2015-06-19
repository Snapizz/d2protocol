var d2com = require('d2com'),
  BaseMessage = require('../abstract-game-action-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameActionFightVanishMessage.prototype.serializeAs_GameActionFightVanishMessage = function(output) {
  this.serializeAs_AbstractGameActionMessage(output);
  output.writeInt(this.targetId);
};

GameActionFightVanishMessage.prototype.deserializeAs_GameActionFightVanishMessage = function(input) {
  this.deserialize(input);
  this.targetId = input.readInt();
};

GameActionFightVanishMessage.prototype.getMessageId = function() {
  return 6217;
};

GameActionFightVanishMessage.prototype.getClassName = function() {
  return 'GameActionFightVanishMessage';
};

module.exports.id = 6217;
module.exports.class = GameActionFightVanishMessage;