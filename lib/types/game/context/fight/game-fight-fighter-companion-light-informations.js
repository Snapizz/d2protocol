var BaseMessage = require('./game-fight-fighter-light-informations.js').class,
  util = require('util');

var GameFightFighterCompanionLightInformations = function() {
  this.companionId = 0;
  this.masterId = 0;
};

util.inherits(GameFightFighterCompanionLightInformations, BaseMessage);

GameFightFighterCompanionLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterCompanionLightInformations(output);
};

GameFightFighterCompanionLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterCompanionLightInformations(input);
};

GameFightFighterCompanionLightInformations.prototype.serializeAs_GameFightFighterCompanionLightInformations = function(output) {
  this.serializeAs_GameFightFighterLightInformations(output);
  if (this.companionId < 0) {
    throw (new Error((("Forbidden value (" + this.companionId) + ") on element companionId.")));
  };
  output.writeByte(this.companionId);
  output.writeInt(this.masterId);
};

GameFightFighterCompanionLightInformations.prototype.deserializeAs_GameFightFighterCompanionLightInformations = function(input) {
  this.deserialize(input);
  this.companionId = input.readByte();
  if (this.companionId < 0) {
    throw (new Error((("Forbidden value (" + this.companionId) + ") on element of GameFightFighterCompanionLightInformations.companionId.")));
  };
  this.masterId = input.readInt();
};

GameFightFighterCompanionLightInformations.prototype.getTypeId = function() {
  return 454;
};

GameFightFighterCompanionLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterCompanionLightInformations';
};

module.exports.id = 454;
module.exports.class = GameFightFighterCompanionLightInformations;