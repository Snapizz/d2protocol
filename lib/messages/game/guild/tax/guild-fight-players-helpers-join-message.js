var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFightPlayersHelpersJoinMessage = function() {
  this.fightId = 0;
  this.playerInfo;
};

util.inherits(GuildFightPlayersHelpersJoinMessage, BaseMessage);

GuildFightPlayersHelpersJoinMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightPlayersHelpersJoinMessage(output);
};

GuildFightPlayersHelpersJoinMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightPlayersHelpersJoinMessage(input);
};

GuildFightPlayersHelpersJoinMessage.prototype.serializeAs_GuildFightPlayersHelpersJoinMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeInt(this.fightId);
  this.playerInfo.serializeAs_CharacterMinimalPlusLookInformations(output);
};

GuildFightPlayersHelpersJoinMessage.prototype.deserializeAs_GuildFightPlayersHelpersJoinMessage = function(input) {
  this.fightId = input.readInt();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of GuildFightPlayersHelpersJoinMessage.fightId.")));
  };
  this.playerInfo = new CharacterMinimalPlusLookInformations();
  this.playerInfo.deserialize(input);
};

GuildFightPlayersHelpersJoinMessage.prototype.getMessageId = function() {
  return 5720;
};

GuildFightPlayersHelpersJoinMessage.prototype.getClassName = function() {
  return 'GuildFightPlayersHelpersJoinMessage';
};

module.exports.id = 5720;
module.exports.class = GuildFightPlayersHelpersJoinMessage;