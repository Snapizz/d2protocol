var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightCastRequestMessage = function() {
  this.spellId = 0;
  this.cellId = 0;
};

util.inherits(GameActionFightCastRequestMessage, BaseMessage);

GameActionFightCastRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightCastRequestMessage(output);
};

GameActionFightCastRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightCastRequestMessage(input);
};

GameActionFightCastRequestMessage.prototype.serializeAs_GameActionFightCastRequestMessage = function(output) {
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeShort(this.cellId);
};

GameActionFightCastRequestMessage.prototype.deserializeAs_GameActionFightCastRequestMessage = function(input) {
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightCastRequestMessage.spellId.")));
  };
  this.cellId = input.readShort();
  if ((((this.cellId < -1)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameActionFightCastRequestMessage.cellId.")));
  };
};

GameActionFightCastRequestMessage.prototype.getMessageId = function() {
  return 1005;
};

GameActionFightCastRequestMessage.prototype.getClassName = function() {
  return 'GameActionFightCastRequestMessage';
};

module.exports.id = 1005;
module.exports.class = GameActionFightCastRequestMessage;