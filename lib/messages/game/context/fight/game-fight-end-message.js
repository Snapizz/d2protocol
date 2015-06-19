var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightEndMessage = function() {
  this.duration = 0;
  this.ageBonus = 0;
  this.lootShareLimitMalus = 0;
  this.results = [];
  this.namedPartyTeamsOutcomes = [];
};

util.inherits(GameFightEndMessage, BaseMessage);

GameFightEndMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightEndMessage(output);
};

GameFightEndMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightEndMessage(input);
};

GameFightEndMessage.prototype.serializeAs_GameFightEndMessage = function(output) {
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element duration.")));
  };
  output.writeInt(this.duration);
  output.writeShort(this.ageBonus);
  output.writeShort(this.lootShareLimitMalus);
  output.writeShort(this.results.length);
  var _i4;
  while (_i4 < this.results.length) {
    output.writeShort((this.results[_i4]).getTypeId());
    (this.results[_i4]).serialize(output);
    _i4++;
  };
  output.writeShort(this.namedPartyTeamsOutcomes.length);
  var _i5;
  while (_i5 < this.namedPartyTeamsOutcomes.length) {
    (this.namedPartyTeamsOutcomes[_i5]).serializeAs_NamedPartyTeamWithOutcome(output);
    _i5++;
  };
};

GameFightEndMessage.prototype.deserializeAs_GameFightEndMessage = function(input) {
  var _id4;
  var _item4;
  var _item5;
  this.duration = input.readInt();
  if (this.duration < 0) {
    throw (new Error((("Forbidden value (" + this.duration) + ") on element of GameFightEndMessage.duration.")));
  };
  this.ageBonus = input.readShort();
  this.lootShareLimitMalus = input.readShort();
  var _resultsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _resultsLen) {
    _id4 = input.readUnsignedShort();
    _item4 = ProtocolTypeManager.getInstance(FightResultListEntry, _id4);
    _item4.deserialize(input);
    this.results.push(_item4);
    _i4++;
  };
  var _namedPartyTeamsOutcomesLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _namedPartyTeamsOutcomesLen) {
    _item5 = new NamedPartyTeamWithOutcome();
    _item5.deserialize(input);
    this.namedPartyTeamsOutcomes.push(_item5);
    _i5++;
  };
};

GameFightEndMessage.prototype.getMessageId = function() {
  return 720;
};

GameFightEndMessage.prototype.getClassName = function() {
  return 'GameFightEndMessage';
};

module.exports.id = 720;
module.exports.class = GameFightEndMessage;