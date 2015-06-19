var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightRemoveTeamMemberMessage = function() {
  this.fightId = 0;
  this.teamId = 2;
  this.charId = 0;
};

util.inherits(GameFightRemoveTeamMemberMessage, BaseMessage);

GameFightRemoveTeamMemberMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightRemoveTeamMemberMessage(output);
};

GameFightRemoveTeamMemberMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightRemoveTeamMemberMessage(input);
};

GameFightRemoveTeamMemberMessage.prototype.serializeAs_GameFightRemoveTeamMemberMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeShort(this.fightId);
  output.writeByte(this.teamId);
  output.writeInt(this.charId);
};

GameFightRemoveTeamMemberMessage.prototype.deserializeAs_GameFightRemoveTeamMemberMessage = function(input) {
  this.fightId = input.readShort();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of GameFightRemoveTeamMemberMessage.fightId.")));
  };
  this.teamId = input.readByte();
  if (this.teamId < 0) {
    throw (new Error((("Forbidden value (" + this.teamId) + ") on element of GameFightRemoveTeamMemberMessage.teamId.")));
  };
  this.charId = input.readInt();
};

GameFightRemoveTeamMemberMessage.prototype.getMessageId = function() {
  return 711;
};

GameFightRemoveTeamMemberMessage.prototype.getClassName = function() {
  return 'GameFightRemoveTeamMemberMessage';
};

module.exports.id = 711;
module.exports.class = GameFightRemoveTeamMemberMessage;