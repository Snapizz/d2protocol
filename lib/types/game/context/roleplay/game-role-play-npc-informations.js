var BaseMessage = require('./game-role-play-npc-informations.js').class,
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

GameRolePlayNpcInformations.prototype.serializeAs_GameRolePlayNpcInformations = function(param1) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  if (this.npcId < 0) {
    throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
  } else {
    param1.writeVarShort(this.npcId);
    param1.writeBoolean(this.sex);
    if (this.specialArtworkId < 0) {
      throw new Error("Forbidden value (" + this.specialArtworkId + ") on element specialArtworkId.");
    } else {
      param1.writeVarShort(this.specialArtworkId);
      return;
    }
  }
};

GameRolePlayNpcInformations.prototype.deserializeAs_GameRolePlayNpcInformations = function(param1) {
  this.deserialize(param1);
  this.npcId = param1.readVarUhShort();
  if (this.npcId < 0) {
    throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayNpcInformations.npcId.");
  } else {
    this.sex = param1.readBoolean();
    this.specialArtworkId = param1.readVarUhShort();
    if (this.specialArtworkId < 0) {
      throw new Error("Forbidden value (" + this.specialArtworkId + ") on element of GameRolePlayNpcInformations.specialArtworkId.");
    } else {
      return;
    }
  }
};

GameRolePlayNpcInformations.prototype.getTypeId = function() {
  return 156;
};

GameRolePlayNpcInformations.prototype.getClassName = function() {
  return 'GameRolePlayNpcInformations';
};

module.exports.id = 156;
module.exports.class = GameRolePlayNpcInformations;
module.exports.getInstance = function() {
  return new GameRolePlayNpcInformations();
};