var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameActionFightCastOnTargetRequestMessage = function() {
  this.spellId = 0;
  this.targetId = 0;
};

util.inherits(GameActionFightCastOnTargetRequestMessage, BaseMessage);

GameActionFightCastOnTargetRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameActionFightCastOnTargetRequestMessage(output);
};

GameActionFightCastOnTargetRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameActionFightCastOnTargetRequestMessage(input);
};

GameActionFightCastOnTargetRequestMessage.prototype.serializeAs_GameActionFightCastOnTargetRequestMessage = function(output) {
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element spellId.")));
  };
  output.writeVarShort(this.spellId);
  output.writeInt(this.targetId);
};

GameActionFightCastOnTargetRequestMessage.prototype.deserializeAs_GameActionFightCastOnTargetRequestMessage = function(input) {
  this.spellId = input.readVarUhShort();
  if (this.spellId < 0) {
    throw (new Error((("Forbidden value (" + this.spellId) + ") on element of GameActionFightCastOnTargetRequestMessage.spellId.")));
  };
  this.targetId = input.readInt();
};

GameActionFightCastOnTargetRequestMessage.prototype.getMessageId = function() {
  return 6330;
};

GameActionFightCastOnTargetRequestMessage.prototype.getClassName = function() {
  return 'GameActionFightCastOnTargetRequestMessage';
};

module.exports.id = 6330;
module.exports.class = GameActionFightCastOnTargetRequestMessage;