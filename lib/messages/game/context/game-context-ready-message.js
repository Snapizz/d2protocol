var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextReadyMessage = function() {
  this.mapId = 0;
};

util.inherits(GameContextReadyMessage, BaseMessage);

GameContextReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextReadyMessage(output);
};

GameContextReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextReadyMessage(input);
};

GameContextReadyMessage.prototype.serializeAs_GameContextReadyMessage = function(output) {
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
};

GameContextReadyMessage.prototype.deserializeAs_GameContextReadyMessage = function(input) {
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of GameContextReadyMessage.mapId.")));
  };
};

GameContextReadyMessage.prototype.getMessageId = function() {
  return 6071;
};

GameContextReadyMessage.prototype.getClassName = function() {
  return 'GameContextReadyMessage';
};

module.exports.id = 6071;
module.exports.class = GameContextReadyMessage;