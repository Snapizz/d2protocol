var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameEntityDispositionMessage = function() {
  this.disposition;
};

util.inherits(GameEntityDispositionMessage, BaseMessage);

GameEntityDispositionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameEntityDispositionMessage(output);
};

GameEntityDispositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameEntityDispositionMessage(input);
};

GameEntityDispositionMessage.prototype.serializeAs_GameEntityDispositionMessage = function(output) {
  this.disposition.serializeAs_IdentifiedEntityDispositionInformations(param1);
};

GameEntityDispositionMessage.prototype.deserializeAs_GameEntityDispositionMessage = function(input) {
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