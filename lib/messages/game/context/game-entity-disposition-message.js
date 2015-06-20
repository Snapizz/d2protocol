var d2com = require('d2com'),
  BaseMessage = require('./game-entity-disposition-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var IdentifiedEntityDispositionInformations = require('../../../types/game/context/identified-entity-disposition-informations.js').class;

var GameEntityDispositionMessage = function() {
  this.disposition = new IdentifiedEntityDispositionInformations();
};

util.inherits(GameEntityDispositionMessage, BaseMessage);

GameEntityDispositionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameEntityDispositionMessage(output);
};

GameEntityDispositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameEntityDispositionMessage(input);
};

GameEntityDispositionMessage.prototype.serializeAs_GameEntityDispositionMessage = function(param1) {
  this.disposition.serializeAs_IdentifiedEntityDispositionInformations(param1);
};

GameEntityDispositionMessage.prototype.deserializeAs_GameEntityDispositionMessage = function(param1) {
  this.disposition = new IdentifiedEntityDispositionInformations();
  this.disposition.deserialize(param1);
};

GameEntityDispositionMessage.prototype.getMessageId = function() {
  return 5693;
};

GameEntityDispositionMessage.prototype.getClassName = function() {
  return 'GameEntityDispositionMessage';
};

module.exports.id = 5693;
module.exports.class = GameEntityDispositionMessage;
module.exports.getInstance = function() {
  return new GameEntityDispositionMessage();
};