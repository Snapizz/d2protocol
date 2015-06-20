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
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeInt(this.fightId);
    param1.writeShort(this.playerInfo.length);
    var _loc2_ = 0;
    while (_loc2_ < this.playerInfo.length) {
      (this.playerInfo[_loc2_]).serializeAs_CharacterMinimalPlusLookInformations(param1);
      _loc2_++;
    }
    return;
  }
};

GuildFightPlayersEnemiesListMessage.prototype.deserializeAs_GuildFightPlayersEnemiesListMessage = function(input) {
  var _loc4_ = null;
  this.fightId = param1.readInt();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of GuildFightPlayersEnemiesListMessage.fightId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = new CharacterMinimalPlusLookInformations();
      _loc4_.deserialize(param1);
      this.playerInfo.push(_loc4_);
      _loc3_++;
    }
    return;
  }
};

GuildFightPlayersEnemiesListMessage.prototype.getMessageId = function() {
  return 5928;
};

GuildFightPlayersEnemiesListMessage.prototype.getClassName = function() {
  return 'GuildFightPlayersEnemiesListMessage';
};

module.exports.id = 5928;
module.exports.class = GuildFightPlayersEnemiesListMessage;