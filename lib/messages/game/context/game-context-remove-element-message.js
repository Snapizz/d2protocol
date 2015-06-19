var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextRemoveElementMessage = function() {
  this.id = 0;
};

util.inherits(GameContextRemoveElementMessage, BaseMessage);

GameContextRemoveElementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextRemoveElementMessage(output);
};

GameContextRemoveElementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextRemoveElementMessage(input);
};

GameContextRemoveElementMessage.prototype.serializeAs_GameContextRemoveElementMessage = function(output) {
  output.writeInt(this.id);
};

GameContextRemoveElementMessage.prototype.deserializeAs_GameContextRemoveElementMessage = function(input) {
  this.id = input.readInt();
};

GameContextRemoveElementMessage.prototype.getMessageId = function() {
  return 251;
};

GameContextRemoveElementMessage.prototype.getClassName = function() {
  return 'GameContextRemoveElementMessage';
};

module.exports.id = 251;
module.exports.class = GameContextRemoveElementMessage;