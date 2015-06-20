var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildFightPlayersEnemiesListMessage = function() {
  this.fightId = 0;
  this.playerInfo = [];
};

util.inherits(GuildFightPlayersEnemiesListMessage, BaseMessage);

GuildFightPlayersEnemiesListMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildFightPlayersEnemiesListMessage(output);
};

GuildFightPlayersEnemiesListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildFightPlayersEnemiesListMessage(input);
};

GuildFightPlayersEnemiesListMessage.prototype.serializeAs_GuildFightPlayersEnemiesListMessage = function(output) {
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element fightId.")));
  };
  output.writeInt(this.fightId);
  output.writeShort(this.playerInfo.length);
  var _i2 = 0;
  while (_i2 < this.playerInfo.length) {
    (this.playerInfo[_i2]).serializeAs_CharacterMinimalPlusLookInformations(output);
    _i2++;
  };
};

GuildFightPlayersEnemiesListMessage.prototype.deserializeAs_GuildFightPlayersEnemiesListMessage = function(input) {
  var _item2;
  this.fightId = input.readInt();
  if (this.fightId < 0) {
    throw (new Error((("Forbidden value (" + this.fightId) + ") on element of GuildFightPlayersEnemiesListMessage.fightId.")));
  };
  var _playerInfoLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _playerInfoLen) {
    _item2 = new CharacterMinimalPlusLookInformations();
    _item2.deserialize(input);
    this.playerInfo.push(_item2);
    _i2++;
  };
};

GuildFightPlayersEnemiesListMessage.prototype.getMessageId = function() {
  return 5928;
};

GuildFightPlayersEnemiesListMessage.prototype.getClassName = function() {
  return 'GuildFightPlayersEnemiesListMessage';
};

module.exports.id = 5928;
module.exports.class = GuildFightPlayersEnemiesListMessage;