var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameDataPaddockObjectAddMessage = function() {
  this.paddockItemDescription;
};

util.inherits(GameDataPaddockObjectAddMessage, BaseMessage);

GameDataPaddockObjectAddMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPaddockObjectAddMessage(output);
};

GameDataPaddockObjectAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPaddockObjectAddMessage(input);
};

GameDataPaddockObjectAddMessage.prototype.serializeAs_GameDataPaddockObjectAddMessage = function(output) {
  this.paddockItemDescription.serializeAs_PaddockItem(output);
};

GameDataPaddockObjectAddMessage.prototype.deserializeAs_GameDataPaddockObjectAddMessage = function(input) {
  this.paddockItemDescription = new PaddockItem();
  this.paddockItemDescription.deserialize(input);
};

GameDataPaddockObjectAddMessage.prototype.getMessageId = function() {
  return 5990;
};

GameDataPaddockObjectAddMessage.prototype.getClassName = function() {
  return 'GameDataPaddockObjectAddMessage';
};

module.exports.id = 5990;
module.exports.class = GameDataPaddockObjectAddMessage;