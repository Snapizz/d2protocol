var GameFightFighterCompanionLightInformations = function() {
  this.companionId = 0;
  this.masterId = 0;
};



GameFightFighterCompanionLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterCompanionLightInformations(output);
};

GameFightFighterCompanionLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterCompanionLightInformations(input);
};

GameFightFighterCompanionLightInformations.prototype.serializeAs_GameFightFighterCompanionLightInformations = function(output) {
  this.serializeAs_GameFightFighterLightInformations(param1);
  if (this.companionId < 0) {
    throw new Error("Forbidden value (" + this.companionId + ") on element companionId.");
  } else {
    param1.writeByte(this.companionId);
    param1.writeInt(this.masterId);
    return;
  }
};

GameFightFighterCompanionLightInformations.prototype.deserializeAs_GameFightFighterCompanionLightInformations = function(input) {
  this.deserialize(param1);
  this.companionId = param1.readByte();
  if (this.companionId < 0) {
    throw new Error("Forbidden value (" + this.companionId + ") on element of GameFightFighterCompanionLightInformations.companionId.");
  } else {
    this.masterId = param1.readInt();
    return;
  }
};

GameFightFighterCompanionLightInformations.prototype.getTypeId = function() {
  return 454;
};

GameFightFighterCompanionLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterCompanionLightInformations';
};

module.exports.id = 454;
module.exports.class = GameFightFighterCompanionLightInformations;