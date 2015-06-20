var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations.js');

var FighterStatsListMessage = function() {
  this.stats = new CharacterCharacteristicsInformations();
};

util.inherits(FighterStatsListMessage, BaseMessage);

FighterStatsListMessage.prototype.serialize = function(output) {
  this.serializeAs_FighterStatsListMessage(output);
};

FighterStatsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FighterStatsListMessage(input);
};

FighterStatsListMessage.prototype.serializeAs_FighterStatsListMessage = function(param1) {
  this.stats.serializeAs_CharacterCharacteristicsInformations(param1);
};

FighterStatsListMessage.prototype.deserializeAs_FighterStatsListMessage = function(param1) {
  this.stats = new CharacterCharacteristicsInformations();
  this.stats.deserialize(param1);
};

FighterStatsListMessage.prototype.getMessageId = function() {
  return 6322;
};

FighterStatsListMessage.prototype.getClassName = function() {
  return 'FighterStatsListMessage';
};

module.exports.id = 6322;
module.exports.class = FighterStatsListMessage;