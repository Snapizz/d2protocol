var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FightTeamInformations = require('../../../../types/game/context/fight/fight-team-informations.js');

var GameFightUpdateTeamMessage = function() {
  this.fightId = 0;
  this.team = new FightTeamInformations();
};

util.inherits(GameFightUpdateTeamMessage, BaseMessage);

GameFightUpdateTeamMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightUpdateTeamMessage(output);
};

GameFightUpdateTeamMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightUpdateTeamMessage(input);
};

GameFightUpdateTeamMessage.prototype.serializeAs_GameFightUpdateTeamMessage = function(param1) {
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
  } else {
    param1.writeShort(this.fightId);
    this.team.serializeAs_FightTeamInformations(param1);
    return;
  }
};

GameFightUpdateTeamMessage.prototype.deserializeAs_GameFightUpdateTeamMessage = function(param1) {
  this.fightId = param1.readShort();
  if (this.fightId < 0) {
    throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightUpdateTeamMessage.fightId.");
  } else {
    this.team = new FightTeamInformations();
    this.team.deserialize(param1);
    return;
  }
};

GameFightUpdateTeamMessage.prototype.getMessageId = function() {
  return 5572;
};

GameFightUpdateTeamMessage.prototype.getClassName = function() {
  return 'GameFightUpdateTeamMessage';
};

module.exports.id = 5572;
module.exports.class = GameFightUpdateTeamMessage;
module.exports.getInstance = function() {
  return new GameFightUpdateTeamMessage();
};