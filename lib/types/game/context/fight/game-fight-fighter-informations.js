var BaseMessage = require('../game-context-actor-informations.js').class,
  util = require('util');

var GameFightFighterInformations = function() {
  this.teamId = 2;
  this.wave = 0;
  this.alive = false;
  this.stats;
  this.previousPositions = [];
};

util.inherits(GameFightFighterInformations, BaseMessage);

GameFightFighterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterInformations(output);
};

GameFightFighterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterInformations(input);
};

GameFightFighterInformations.prototype.serializeAs_GameFightFighterInformations = function(output) {
  this.serializeAs_GameContextActorInformations(output);
  output.writeByte(this.teamId);
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element wave.")));
  };
  output.writeByte(this.wave);
  output.writeBoolean(this.alive);
  output.writeShort(this.stats.getTypeId());
  this.stats.serialize(output);
  output.writeShort(this.previousPositions.length);
  var _i5 = 0;
  while (_i5 < this.previousPositions.length) {
    if ((((this.previousPositions[_i5] < 0)) || ((this.previousPositions[_i5] > 559)))) {
      throw (new Error((("Forbidden value (" + this.previousPositions[_i5]) + ") on element 5 (starting at 1) of previousPositions.")));
    };
    output.writeVarShort(this.previousPositions[_i5]);
    _i5++;
  };
};

GameFightFighterInformations.prototype.deserializeAs_GameFightFighterInformations = function(input) {
  var _val5 = 0;
  this.deserialize(input);
  this.teamId = input.readByte();
  if (this.teamId < 0) {
    throw (new Error((("Forbidden value (" + this.teamId) + ") on element of GameFightFighterInformations.teamId.")));
  };
  this.wave = input.readByte();
  if (this.wave < 0) {
    throw (new Error((("Forbidden value (" + this.wave) + ") on element of GameFightFighterInformations.wave.")));
  };
  this.alive = input.readBoolean();
  var _id4 = input.readUnsignedShort();
  this.stats = ProtocolTypeManager.getInstance(GameFightMinimalStats, _id4);
  this.stats.deserialize(input);
  var _previousPositionsLen = input.readUnsignedShort();
  var _i5 = 0;
  while (_i5 < _previousPositionsLen) {
    _val5 = input.readVarUhShort();
    if ((((_val5 < 0)) || ((_val5 > 559)))) {
      throw (new Error((("Forbidden value (" + _val5) + ") on elements of previousPositions.")));
    };
    this.previousPositions.push(_val5);
    _i5++;
  };
};

GameFightFighterInformations.prototype.getTypeId = function() {
  return 143;
};

GameFightFighterInformations.prototype.getClassName = function() {
  return 'GameFightFighterInformations';
};

module.exports.id = 143;
module.exports.class = GameFightFighterInformations;