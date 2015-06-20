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

GameFightMinimalStats.prototype.serializeAs_GameFightMinimalStats = function(param1) {
  if (this.lifePoints < 0) {
    throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
  } else {
    param1.writeVarInt(this.lifePoints);
    if (this.maxLifePoints < 0) {
      throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
    } else {
      param1.writeVarInt(this.maxLifePoints);
      if (this.baseMaxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.baseMaxLifePoints + ") on element baseMaxLifePoints.");
      } else {
        param1.writeVarInt(this.baseMaxLifePoints);
        if (this.permanentDamagePercent < 0) {
          throw new Error("Forbidden value (" + this.permanentDamagePercent + ") on element permanentDamagePercent.");
        } else {
          param1.writeVarInt(this.permanentDamagePercent);
          if (this.shieldPoints < 0) {
            throw new Error("Forbidden value (" + this.shieldPoints + ") on element shieldPoints.");
          } else {
            param1.writeVarInt(this.shieldPoints);
            param1.writeVarShort(this.actionPoints);
            param1.writeVarShort(this.maxActionPoints);
            param1.writeVarShort(this.movementPoints);
            param1.writeVarShort(this.maxMovementPoints);
            param1.writeInt(this.summoner);
            param1.writeBoolean(this.summoned);
            param1.writeVarShort(this.neutralElementResistPercent);
            param1.writeVarShort(this.earthElementResistPercent);
            param1.writeVarShort(this.waterElementResistPercent);
            param1.writeVarShort(this.airElementResistPercent);
            param1.writeVarShort(this.fireElementResistPercent);
            param1.writeVarShort(this.neutralElementReduction);
            param1.writeVarShort(this.earthElementReduction);
            param1.writeVarShort(this.waterElementReduction);
            param1.writeVarShort(this.airElementReduction);
            param1.writeVarShort(this.fireElementReduction);
            param1.writeVarShort(this.criticalDamageFixedResist);
            param1.writeVarShort(this.pushDamageFixedResist);
            if (this.dodgePALostProbability < 0) {
              throw new Error("Forbidden value (" + this.dodgePALostProbability + ") on element dodgePALostProbability.");
            } else {
              param1.writeVarShort(this.dodgePALostProbability);
              if (this.dodgePMLostProbability < 0) {
                throw new Error("Forbidden value (" + this.dodgePMLostProbability + ") on element dodgePMLostProbability.");
              } else {
                param1.writeVarShort(this.dodgePMLostProbability);
                param1.writeVarShort(this.tackleBlock);
                param1.writeVarShort(this.tackleEvade);
                param1.writeByte(this.invisibilityState);
                return;
              }
            }
          }
        }
      }
    }
  }
};

GameFightMinimalStats.prototype.deserializeAs_GameFightMinimalStats = function(param1) {
  this.lifePoints = param1.readVarUhInt();
  if (this.lifePoints < 0) {
    throw new Error("Forbidden value (" + this.lifePoints + ") on element of GameFightMinimalStats.lifePoints.");
  } else {
    this.maxLifePoints = param1.readVarUhInt();
    if (this.maxLifePoints < 0) {
      throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of GameFightMinimalStats.maxLifePoints.");
    } else {
      this.baseMaxLifePoints = param1.readVarUhInt();
      if (this.baseMaxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.baseMaxLifePoints + ") on element of GameFightMinimalStats.baseMaxLifePoints.");
      } else {
        this.permanentDamagePercent = param1.readVarUhInt();
        if (this.permanentDamagePercent < 0) {
          throw new Error("Forbidden value (" + this.permanentDamagePercent + ") on element of GameFightMinimalStats.permanentDamagePercent.");
        } else {
          this.shieldPoints = param1.readVarUhInt();
          if (this.shieldPoints < 0) {
            throw new Error("Forbidden value (" + this.shieldPoints + ") on element of GameFightMinimalStats.shieldPoints.");
          } else {
            this.actionPoints = param1.readVarShort();
            this.maxActionPoints = param1.readVarShort();
            this.movementPoints = param1.readVarShort();
            this.maxMovementPoints = param1.readVarShort();
            this.summoner = param1.readInt();
            this.summoned = param1.readBoolean();
            this.neutralElementResistPercent = param1.readVarShort();
            this.earthElementResistPercent = param1.readVarShort();
            this.waterElementResistPercent = param1.readVarShort();
            this.airElementResistPercent = param1.readVarShort();
            this.fireElementResistPercent = param1.readVarShort();
            this.neutralElementReduction = param1.readVarShort();
            this.earthElementReduction = param1.readVarShort();
            this.waterElementReduction = param1.readVarShort();
            this.airElementReduction = param1.readVarShort();
            this.fireElementReduction = param1.readVarShort();
            this.criticalDamageFixedResist = param1.readVarShort();
            this.pushDamageFixedResist = param1.readVarShort();
            this.dodgePALostProbability = param1.readVarUhShort();
            if (this.dodgePALostProbability < 0) {
              throw new Error("Forbidden value (" + this.dodgePALostProbability + ") on element of GameFightMinimalStats.dodgePALostProbability.");
            } else {
              this.dodgePMLostProbability = param1.readVarUhShort();
              if (this.dodgePMLostProbability < 0) {
                throw new Error("Forbidden value (" + this.dodgePMLostProbability + ") on element of GameFightMinimalStats.dodgePMLostProbability.");
              } else {
                this.tackleBlock = param1.readVarShort();
                this.tackleEvade = param1.readVarShort();
                this.invisibilityState = param1.readByte();
                if (this.invisibilityState < 0) {
                  throw new Error("Forbidden value (" + this.invisibilityState + ") on element of GameFightMinimalStats.invisibilityState.");
                } else {
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
};

GameFightMinimalStats.prototype.getTypeId = function() {
  return 31;
};

GameFightMinimalStats.prototype.getClassName = function() {
  return 'GameFightMinimalStats';
};

module.exports.id = 31;
module.exports.class = GameFightMinimalStats;