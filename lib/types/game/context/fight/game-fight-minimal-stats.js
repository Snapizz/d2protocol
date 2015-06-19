var GameFightMinimalStats = function() {
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.baseMaxLifePoints = 0;
  this.permanentDamagePercent = 0;
  this.shieldPoints = 0;
  this.actionPoints = 0;
  this.maxActionPoints = 0;
  this.movementPoints = 0;
  this.maxMovementPoints = 0;
  this.summoner = 0;
  this.summoned = false;
  this.neutralElementResistPercent = 0;
  this.earthElementResistPercent = 0;
  this.waterElementResistPercent = 0;
  this.airElementResistPercent = 0;
  this.fireElementResistPercent = 0;
  this.neutralElementReduction = 0;
  this.earthElementReduction = 0;
  this.waterElementReduction = 0;
  this.airElementReduction = 0;
  this.fireElementReduction = 0;
  this.criticalDamageFixedResist = 0;
  this.pushDamageFixedResist = 0;
  this.dodgePALostProbability = 0;
  this.dodgePMLostProbability = 0;
  this.tackleBlock = 0;
  this.tackleEvade = 0;
  this.invisibilityState = 0;
};



GameFightMinimalStats.prototype.serialize = function(output) {
  this.serializeAs_GameFightMinimalStats(output);
};

GameFightMinimalStats.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMinimalStats(input);
};

GameFightMinimalStats.prototype.serializeAs_GameFightMinimalStats = function(output) {
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element lifePoints.")));
  };
  output.writeVarInt(this.lifePoints);
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element maxLifePoints.")));
  };
  output.writeVarInt(this.maxLifePoints);
  if (this.baseMaxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.baseMaxLifePoints) + ") on element baseMaxLifePoints.")));
  };
  output.writeVarInt(this.baseMaxLifePoints);
  if (this.permanentDamagePercent < 0) {
    throw (new Error((("Forbidden value (" + this.permanentDamagePercent) + ") on element permanentDamagePercent.")));
  };
  output.writeVarInt(this.permanentDamagePercent);
  if (this.shieldPoints < 0) {
    throw (new Error((("Forbidden value (" + this.shieldPoints) + ") on element shieldPoints.")));
  };
  output.writeVarInt(this.shieldPoints);
  output.writeVarShort(this.actionPoints);
  output.writeVarShort(this.maxActionPoints);
  output.writeVarShort(this.movementPoints);
  output.writeVarShort(this.maxMovementPoints);
  output.writeInt(this.summoner);
  output.writeBoolean(this.summoned);
  output.writeVarShort(this.neutralElementResistPercent);
  output.writeVarShort(this.earthElementResistPercent);
  output.writeVarShort(this.waterElementResistPercent);
  output.writeVarShort(this.airElementResistPercent);
  output.writeVarShort(this.fireElementResistPercent);
  output.writeVarShort(this.neutralElementReduction);
  output.writeVarShort(this.earthElementReduction);
  output.writeVarShort(this.waterElementReduction);
  output.writeVarShort(this.airElementReduction);
  output.writeVarShort(this.fireElementReduction);
  output.writeVarShort(this.criticalDamageFixedResist);
  output.writeVarShort(this.pushDamageFixedResist);
  if (this.dodgePALostProbability < 0) {
    throw (new Error((("Forbidden value (" + this.dodgePALostProbability) + ") on element dodgePALostProbability.")));
  };
  output.writeVarShort(this.dodgePALostProbability);
  if (this.dodgePMLostProbability < 0) {
    throw (new Error((("Forbidden value (" + this.dodgePMLostProbability) + ") on element dodgePMLostProbability.")));
  };
  output.writeVarShort(this.dodgePMLostProbability);
  output.writeVarShort(this.tackleBlock);
  output.writeVarShort(this.tackleEvade);
  output.writeByte(this.invisibilityState);
};

GameFightMinimalStats.prototype.deserializeAs_GameFightMinimalStats = function(input) {
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of GameFightMinimalStats.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of GameFightMinimalStats.maxLifePoints.")));
  };
  this.baseMaxLifePoints = input.readVarUhInt();
  if (this.baseMaxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.baseMaxLifePoints) + ") on element of GameFightMinimalStats.baseMaxLifePoints.")));
  };
  this.permanentDamagePercent = input.readVarUhInt();
  if (this.permanentDamagePercent < 0) {
    throw (new Error((("Forbidden value (" + this.permanentDamagePercent) + ") on element of GameFightMinimalStats.permanentDamagePercent.")));
  };
  this.shieldPoints = input.readVarUhInt();
  if (this.shieldPoints < 0) {
    throw (new Error((("Forbidden value (" + this.shieldPoints) + ") on element of GameFightMinimalStats.shieldPoints.")));
  };
  this.actionPoints = input.readVarShort();
  this.maxActionPoints = input.readVarShort();
  this.movementPoints = input.readVarShort();
  this.maxMovementPoints = input.readVarShort();
  this.summoner = input.readInt();
  this.summoned = input.readBoolean();
  this.neutralElementResistPercent = input.readVarShort();
  this.earthElementResistPercent = input.readVarShort();
  this.waterElementResistPercent = input.readVarShort();
  this.airElementResistPercent = input.readVarShort();
  this.fireElementResistPercent = input.readVarShort();
  this.neutralElementReduction = input.readVarShort();
  this.earthElementReduction = input.readVarShort();
  this.waterElementReduction = input.readVarShort();
  this.airElementReduction = input.readVarShort();
  this.fireElementReduction = input.readVarShort();
  this.criticalDamageFixedResist = input.readVarShort();
  this.pushDamageFixedResist = input.readVarShort();
  this.dodgePALostProbability = input.readVarUhShort();
  if (this.dodgePALostProbability < 0) {
    throw (new Error((("Forbidden value (" + this.dodgePALostProbability) + ") on element of GameFightMinimalStats.dodgePALostProbability.")));
  };
  this.dodgePMLostProbability = input.readVarUhShort();
  if (this.dodgePMLostProbability < 0) {
    throw (new Error((("Forbidden value (" + this.dodgePMLostProbability) + ") on element of GameFightMinimalStats.dodgePMLostProbability.")));
  };
  this.tackleBlock = input.readVarShort();
  this.tackleEvade = input.readVarShort();
  this.invisibilityState = input.readByte();
  if (this.invisibilityState < 0) {
    throw (new Error((("Forbidden value (" + this.invisibilityState) + ") on element of GameFightMinimalStats.invisibilityState.")));
  };
};

GameFightMinimalStats.prototype.getTypeId = function() {
  return 31;
};

GameFightMinimalStats.prototype.getClassName = function() {
  return 'GameFightMinimalStats';
};

module.exports.id = 31;
module.exports.class = GameFightMinimalStats;