var BaseMessage = require('./game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayNpcInformations = function() {
  this.npcId = 0;
  this.sex = false;
  this.specialArtworkId = 0;
};

util.inherits(GameRolePlayNpcInformations, BaseMessage);

GameRolePlayNpcInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNpcInformations(output);
};

GameRolePlayNpcInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNpcInformations(input);
};

GameRolePlayNpcInformations.prototype.serializeAs_GameRolePlayNpcInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element npcId.")));
  };
  output.writeVarShort(this.npcId);
  output.writeBoolean(this.sex);
  if (this.specialArtworkId < 0) {
    throw (new Error((("Forbidden value (" + this.specialArtworkId) + ") on element specialArtworkId.")));
  };
  output.writeVarShort(this.specialArtworkId);
};

GameRolePlayNpcInformations.prototype.deserializeAs_GameRolePlayNpcInformations = function(input) {
  this.deserialize(input);
  this.npcId = input.readVarUhShort();
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element of GameRolePlayNpcInformations.npcId.")));
  };
  this.sex = input.readBoolean();
  this.specialArtworkId = input.readVarUhShort();
  if (this.specialArtworkId < 0) {
    throw (new Error((("Forbidden value (" + this.specialArtworkId) + ") on element of GameRolePlayNpcInformations.specialArtworkId.")));
  };
};

GameRolePlayNpcInformations.prototype.getTypeId = function() {
  return 156;
};

GameRolePlayNpcInformations.prototype.getClassName = function() {
  return 'GameRolePlayNpcInformations';
};

module.exports.id = 156;
module.exports.class = GameRolePlayNpcInformations;