var GameFightMonsterInformations = function() {
  this.creatureGenericId = 0;
  this.creatureGrade = 0;
};



GameFightMonsterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightMonsterInformations(output);
};

GameFightMonsterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMonsterInformations(input);
};

GameFightMonsterInformations.prototype.serializeAs_GameFightMonsterInformations = function(param1) {
  this.serializeAs_GameFightAIInformations(param1);
  if (this.creatureGenericId < 0) {
    throw new Error("Forbidden value (" + this.creatureGenericId + ") on element creatureGenericId.");
  } else {
    param1.writeVarShort(this.creatureGenericId);
    if (this.creatureGrade < 0) {
      throw new Error("Forbidden value (" + this.creatureGrade + ") on element creatureGrade.");
    } else {
      param1.writeByte(this.creatureGrade);
      return;
    }
  }
};

GameFightMonsterInformations.prototype.deserializeAs_GameFightMonsterInformations = function(param1) {
  this.deserialize(param1);
  this.creatureGenericId = param1.readVarUhShort();
  if (this.creatureGenericId < 0) {
    throw new Error("Forbidden value (" + this.creatureGenericId + ") on element of GameFightMonsterInformations.creatureGenericId.");
  } else {
    this.creatureGrade = param1.readByte();
    if (this.creatureGrade < 0) {
      throw new Error("Forbidden value (" + this.creatureGrade + ") on element of GameFightMonsterInformations.creatureGrade.");
    } else {
      return;
    }
  }
};

GameFightMonsterInformations.prototype.getTypeId = function() {
  return 29;
};

GameFightMonsterInformations.prototype.getClassName = function() {
  return 'GameFightMonsterInformations';
};

module.exports.id = 29;
module.exports.class = GameFightMonsterInformations;