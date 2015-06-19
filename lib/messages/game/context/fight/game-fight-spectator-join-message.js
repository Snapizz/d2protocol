var d2com = require('d2com'),
  BaseMessage = require('./game-fight-join-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightSpectatorJoinMessage = function() {
  this.namedPartyTeams = [];
};

util.inherits(GameFightSpectatorJoinMessage, BaseMessage);

GameFightSpectatorJoinMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightSpectatorJoinMessage(output);
};

GameFightSpectatorJoinMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightSpectatorJoinMessage(input);
};

GameFightSpectatorJoinMessage.prototype.serializeAs_GameFightSpectatorJoinMessage = function(output) {
  this.serializeAs_GameFightJoinMessage(output);
  output.writeShort(this.namedPartyTeams.length);
  var _i1;
  while (_i1 < this.namedPartyTeams.length) {
    (this.namedPartyTeams[_i1]).serializeAs_NamedPartyTeam(output);
    _i1++;
  };
};

GameFightSpectatorJoinMessage.prototype.deserializeAs_GameFightSpectatorJoinMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _namedPartyTeamsLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _namedPartyTeamsLen) {
    _item1 = new NamedPartyTeam();
    _item1.deserialize(input);
    this.namedPartyTeams.push(_item1);
    _i1++;
  };
};

GameFightSpectatorJoinMessage.prototype.getMessageId = function() {
  return 6504;
};

GameFightSpectatorJoinMessage.prototype.getClassName = function() {
  return 'GameFightSpectatorJoinMessage';
};

module.exports.id = 6504;
module.exports.class = GameFightSpectatorJoinMessage;