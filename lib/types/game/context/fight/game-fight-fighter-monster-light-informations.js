var GameFightFighterMonsterLightInformations = function() {
  this.creatureGenericId = 0;
};



GameFightFighterMonsterLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterMonsterLightInformations(output);
};

GameFightFighterMonsterLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterMonsterLightInformations(input);
};

GameFightFighterMonsterLightInformations.prototype.serializeAs_GameFightFighterMonsterLightInformations = function(output) {
  super.serializeAs_GameFightFighterLightInformations(param1);
  if (this.creatureGenericId < 0) {
    throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
  } else {
    param1.writeVarShort(this.creatureGenericId);
    return;
  }
};

GameFightFighterMonsterLightInformations.prototype.deserializeAs_GameFightFighterMonsterLightInformations = function(input) {
  super.deserialize(param1);
  this.creatureGenericId = param1.readVarUhShort();
  if (this.creatureGenericId < 0) {
    throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of GameFightFighterMonsterLightInformations.creatureGenericId.");
  } else {
    return;
  }
};

GameFightFighterMonsterLightInformations.prototype.getTypeId = function() {
  return 455;
};

GameFightFighterMonsterLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterMonsterLightInformations';
};

module.exports.id = 455;
module.exports.class = GameFightFighterMonsterLightInformations;