var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextRefreshEntityLookMessage = function() {
  this.id = 0;
  this.look;
};

util.inherits(GameContextRefreshEntityLookMessage, BaseMessage);

GameContextRefreshEntityLookMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextRefreshEntityLookMessage(output);
};

GameContextRefreshEntityLookMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextRefreshEntityLookMessage(input);
};

GameContextRefreshEntityLookMessage.prototype.serializeAs_GameContextRefreshEntityLookMessage = function(output) {
  output.writeInt(this.id);
  this.look.serializeAs_EntityLook(output);
};

GameContextRefreshEntityLookMessage.prototype.deserializeAs_GameContextRefreshEntityLookMessage = function(input) {
  this.id = input.readInt();
  this.look = new EntityLook();
  this.look.deserialize(input);
};

GameContextRefreshEntityLookMessage.prototype.getMessageId = function() {
  return 5637;
};

GameContextRefreshEntityLookMessage.prototype.getClassName = function() {
  return 'GameContextRefreshEntityLookMessage';
};

module.exports.id = 5637;
module.exports.class = GameContextRefreshEntityLookMessage;