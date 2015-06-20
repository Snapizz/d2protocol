var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameRolePlayArenaFightPropositionMessage = function() {
  this.fightId = 0;
  this.alliesId = [];
  this.duration = 0;
};

util.inherits(GameRolePlayArenaFightPropositionMessage, BaseMessage);

GameRolePlayArenaFightPropositionMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaFightPropositionMessage(output);
};

GameRolePlayArenaFightPropositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaFightPropositionMessage(input);
};

GameRolePlayArenaFightPropositionMessage.prototype.serializeAs_GameRolePlayArenaFightPropositionMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeInt(this.fightId);
  output.writeShort(this.alliesId.length);
  var _i2 = 0;
  while (_i2 < this.alliesId.length) {
    if (this.alliesId[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.alliesId[_i2]) + ") on element 2 (starting at 1) of alliesId.")));
    };
    output.writeVarInt(this.alliesId[_i2]);
    _i2++;
  };
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element duration.")));
  };
  output.writeVarShort(this.duration);
};

GameRolePlayArenaFightPropositionMessage.prototype.deserializeAs_GameRolePlayArenaFightPropositionMessage = function(input) {
  var _val2 = 0;
  this.fightId = input.readInt();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of GameRolePlayArenaFightPropositionMessage.fightId.")));
  };
  var _alliesIdLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _alliesIdLen) {
    _val2 = input.readVarUhInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of alliesId.")));
    };
    this.alliesId.push(_val2);
    _i2++;
  };
  this.duration = input.readVarUhShort();
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element of GameRolePlayArenaFightPropositionMessage.duration.")));
  };
};

GameRolePlayArenaFightPropositionMessage.prototype.getMessageId = function() {
  return 6276;
};

GameRolePlayArenaFightPropositionMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaFightPropositionMessage';
};

module.exports.id = 6276;
module.exports.class = GameRolePlayArenaFightPropositionMessage;