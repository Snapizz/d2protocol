var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayPlayerFightRequestMessage = function() {
  this.targetId = 0;
  this.targetCellId = 0;
  this.friendly = false;
};

util.inherits(GameRolePlayPlayerFightRequestMessage, BaseMessage);

GameRolePlayPlayerFightRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayPlayerFightRequestMessage(output);
};

GameRolePlayPlayerFightRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayPlayerFightRequestMessage(input);
};

GameRolePlayPlayerFightRequestMessage.prototype.serializeAs_GameRolePlayPlayerFightRequestMessage = function(output) {
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element targetId.")));
  };
  output.writeVarInt(this.targetId);
  if ((((this.targetCellId < -1)) || ((this.targetCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.targetCellId) + ") on element targetCellId.")));
  };
  output.writeShort(this.targetCellId);
  output.writeBoolean(this.friendly);
};

GameRolePlayPlayerFightRequestMessage.prototype.deserializeAs_GameRolePlayPlayerFightRequestMessage = function(input) {
  this.targetId = input.readVarUhInt();
  if (this.targetId < 0) {
    throw (new Error((("Forbidden value (" + this.targetId) + ") on element of GameRolePlayPlayerFightRequestMessage.targetId.")));
  };
  this.targetCellId = input.readShort();
  if ((((this.targetCellId < -1)) || ((this.targetCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.targetCellId) + ") on element of GameRolePlayPlayerFightRequestMessage.targetCellId.")));
  };
  this.friendly = input.readBoolean();
};

GameRolePlayPlayerFightRequestMessage.prototype.getMessageId = function() {
  return 5731;
};

GameRolePlayPlayerFightRequestMessage.prototype.getClassName = function() {
  return 'GameRolePlayPlayerFightRequestMessage';
};

module.exports.id = 5731;
module.exports.class = GameRolePlayPlayerFightRequestMessage;