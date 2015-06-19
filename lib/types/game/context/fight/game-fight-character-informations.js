var BaseMessage = require('./game-fight-fighter-named-informations.js').class,
  util = require('util');

var GameFightCharacterInformations = function() {
  this.level = 0;
  this.alignmentInfos;
  this.breed = 0;
  this.sex = false;
};

util.inherits(GameFightCharacterInformations, BaseMessage);

GameFightCharacterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightCharacterInformations(output);
};

GameFightCharacterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightCharacterInformations(input);
};

GameFightCharacterInformations.prototype.serializeAs_GameFightCharacterInformations = function(output) {
  this.serializeAs_GameFightFighterNamedInformations(output);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
};

GameFightCharacterInformations.prototype.deserializeAs_GameFightCharacterInformations = function(input) {
  this.deserialize(input);
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GameFightCharacterInformations.level.")));
  };
  this.alignmentInfos = new ActorAlignmentInformations();
  this.alignmentInfos.deserialize(input);
  this.breed = input.readByte();
  this.sex = input.readBoolean();
};

GameFightCharacterInformations.prototype.getTypeId = function() {
  return 46;
};

GameFightCharacterInformations.prototype.getClassName = function() {
  return 'GameFightCharacterInformations';
};

module.exports.id = 46;
module.exports.class = GameFightCharacterInformations;