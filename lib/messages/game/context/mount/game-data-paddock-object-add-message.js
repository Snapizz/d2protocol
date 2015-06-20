var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var PaddockItem = require('../../../../types/game/paddock/paddock-item.js').class;

var GameDataPaddockObjectAddMessage = function() {
  this.paddockItemDescription = new PaddockItem();
};

util.inherits(GameDataPaddockObjectAddMessage, BaseMessage);

GameDataPaddockObjectAddMessage.prototype.serialize = function(output) {
  this.serializeAs_GameDataPaddockObjectAddMessage(output);
};

GameDataPaddockObjectAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameDataPaddockObjectAddMessage(input);
};

GameDataPaddockObjectAddMessage.prototype.serializeAs_GameDataPaddockObjectAddMessage = function(param1) {
  this.paddockItemDescription.serializeAs_PaddockItem(param1);
};

GameDataPaddockObjectAddMessage.prototype.deserializeAs_GameDataPaddockObjectAddMessage = function(param1) {
  this.paddockItemDescription = new PaddockItem();
  this.paddockItemDescription.deserialize(param1);
};

GameDataPaddockObjectAddMessage.prototype.getMessageId = function() {
  return 5990;
};

GameDataPaddockObjectAddMessage.prototype.getClassName = function() {
  return 'GameDataPaddockObjectAddMessage';
};

module.exports.id = 5990;
module.exports.class = GameDataPaddockObjectAddMessage;
module.exports.getInstance = function() {
  return new GameDataPaddockObjectAddMessage();
};