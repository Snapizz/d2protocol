var BaseMessage = require('./game-fight-fighter-informations.js').class,
  util = require('util');

var GameFightCompanionInformations = function() {
  this.companionGenericId = 0;
  this.level = 0;
  this.masterId = 0;
};

util.inherits(GameFightCompanionInformations, BaseMessage);

GameFightCompanionInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightCompanionInformations(output);
};

GameFightCompanionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightCompanionInformations(input);
};

GameFightCompanionInformations.prototype.serializeAs_GameFightCompanionInformations = function(output) {
  this.serializeAs_GameFightFighterInformations(output);
  if (this.companionGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.companionGenericId) + ") on element companionGenericId.")));
  };
  output.writeByte(this.companionGenericId);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  output.writeInt(this.masterId);
};

GameFightCompanionInformations.prototype.deserializeAs_GameFightCompanionInformations = function(input) {
  this.deserialize(input);
  this.companionGenericId = input.readByte();
  if (this.companionGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.companionGenericId) + ") on element of GameFightCompanionInformations.companionGenericId.")));
  };
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GameFightCompanionInformations.level.")));
  };
  this.masterId = input.readInt();
};

GameFightCompanionInformations.prototype.getTypeId = function() {
  return 450;
};

GameFightCompanionInformations.prototype.getClassName = function() {
  return 'GameFightCompanionInformations';
};

module.exports.id = 450;
module.exports.class = GameFightCompanionInformations;