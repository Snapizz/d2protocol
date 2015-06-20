var BaseMessage = require('./character-characteristics-informations.js').class,
  util = require('util');

var CharacterCharacteristicsInformations = function() {
  this.experience = 0;
  this.experienceLevelFloor = 0;
  this.experienceNextLevelFloor = 0;
  this.kamas = 0;
  this.statsPoints = 0;
  this.additionnalPoints = 0;
  this.spellsPoints = 0;
  this.alignmentInfos;
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.energyPoints = 0;
  this.maxEnergyPoints = 0;
  this.actionPointsCurrent = 0;
  this.movementPointsCurrent = 0;
  this.initiative;
  this.prospecting;
  this.actionPoints;
  this.movementPoints;
  this.strength;
  this.vitality;
  this.wisdom;
  this.chance;
  this.agility;
  this.intelligence;
  this.range;
  this.summonableCreaturesBoost;
  this.reflect;
  this.criticalHit;
  this.criticalHitWeapon = 0;
  this.criticalMiss;
  this.healBonus;
  this.allDamagesBonus;
  this.weaponDamagesBonusPercent;
  this.damagesBonusPercent;
  this.trapBonus;
  this.trapBonusPercent;
  this.glyphBonusPercent;
  this.permanentDamagePercent;
  this.tackleBlock;
  this.tackleEvade;
  this.PAAttack;
  this.PMAttack;
  this.pushDamageBonus;
  this.criticalDamageBonus;
  this.neutralDamageBonus;
  this.earthDamageBonus;
  this.waterDamageBonus;
  this.airDamageBonus;
  this.fireDamageBonus;
  this.dodgePALostProbability;
  this.dodgePMLostProbability;
  this.neutralElementResistPercent;
  this.earthElementResistPercent;
  this.waterElementResistPercent;
  this.airElementResistPercent;
  this.fireElementResistPercent;
  this.neutralElementReduction;
  this.earthElementReduction;
  this.waterElementReduction;
  this.airElementReduction;
  this.fireElementReduction;
  this.pushDamageReduction;
  this.criticalDamageReduction;
  this.pvpNeutralElementResistPercent;
  this.pvpEarthElementResistPercent;
  this.pvpWaterElementResistPercent;
  this.pvpAirElementResistPercent;
  this.pvpFireElementResistPercent;
  this.pvpNeutralElementReduction;
  this.pvpEarthElementReduction;
  this.pvpWaterElementReduction;
  this.pvpAirElementReduction;
  this.pvpFireElementReduction;
  this.spellModifications = [];
  this.probationTime = 0;
};

util.inherits(CharacterCharacteristicsInformations, BaseMessage);

CharacterCharacteristicsInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterCharacteristicsInformations(output);
};

CharacterCharacteristicsInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterCharacteristicsInformations(input);
};

CharacterCharacteristicsInformations.prototype.serializeAs_CharacterCharacteristicsInformations = function(param1) {
  if (this.experience < 0 || this.experience > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.experience + ") on element experience.");
  } else {
    param1.writeVarLong(this.experience);
    if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element experienceLevelFloor.");
    } else {
      param1.writeVarLong(this.experienceLevelFloor);
      if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element experienceNextLevelFloor.");
      } else {
        param1.writeVarLong(this.experienceNextLevelFloor);
        if (this.kamas < 0) {
          throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
        } else {
          param1.writeInt(this.kamas);
          if (this.statsPoints < 0) {
            throw new Error("Forbidden value (" + this.statsPoints + ") on element statsPoints.");
          } else {
            param1.writeVarShort(this.statsPoints);
            if (this.additionnalPoints < 0) {
              throw new Error("Forbidden value (" + this.additionnalPoints + ") on element additionnalPoints.");
            } else {
              param1.writeVarShort(this.additionnalPoints);
              if (this.spellsPoints < 0) {
                throw new Error("Forbidden value (" + this.spellsPoints + ") on element spellsPoints.");
              } else {
                param1.writeVarShort(this.spellsPoints);
                this.alignmentInfos.serializeAs_ActorExtendedAlignmentInformations(param1);
                if (this.lifePoints < 0) {
                  throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
                } else {
                  param1.writeVarInt(this.lifePoints);
                  if (this.maxLifePoints < 0) {
                    throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
                  } else {
                    param1.writeVarInt(this.maxLifePoints);
                    if (this.energyPoints < 0) {
                      throw new Error("Forbidden value (" + this.energyPoints + ") on element energyPoints.");
                    } else {
                      param1.writeVarShort(this.energyPoints);
                      if (this.maxEnergyPoints < 0) {
                        throw new Error("Forbidden value (" + this.maxEnergyPoints + ") on element maxEnergyPoints.");
                      } else {
                        param1.writeVarShort(this.maxEnergyPoints);
                        param1.writeVarShort(this.actionPointsCurrent);
                        param1.writeVarShort(this.movementPointsCurrent);
                        this.initiative.serializeAs_CharacterBaseCharacteristic(param1);
                        this.prospecting.serializeAs_CharacterBaseCharacteristic(param1);
                        this.actionPoints.serializeAs_CharacterBaseCharacteristic(param1);
                        this.movementPoints.serializeAs_CharacterBaseCharacteristic(param1);
                        this.strength.serializeAs_CharacterBaseCharacteristic(param1);
                        this.vitality.serializeAs_CharacterBaseCharacteristic(param1);
                        this.wisdom.serializeAs_CharacterBaseCharacteristic(param1);
                        this.chance.serializeAs_CharacterBaseCharacteristic(param1);
                        this.agility.serializeAs_CharacterBaseCharacteristic(param1);
                        this.intelligence.serializeAs_CharacterBaseCharacteristic(param1);
                        this.range.serializeAs_CharacterBaseCharacteristic(param1);
                        this.summonableCreaturesBoost.serializeAs_CharacterBaseCharacteristic(param1);
                        this.reflect.serializeAs_CharacterBaseCharacteristic(param1);
                        this.criticalHit.serializeAs_CharacterBaseCharacteristic(param1);
                        if (this.criticalHitWeapon < 0) {
                          throw new Error("Forbidden value (" + this.criticalHitWeapon + ") on element criticalHitWeapon.");
                        } else {
                          param1.writeVarShort(this.criticalHitWeapon);
                          this.criticalMiss.serializeAs_CharacterBaseCharacteristic(param1);
                          this.healBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.allDamagesBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.weaponDamagesBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.damagesBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.trapBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.trapBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.glyphBonusPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.permanentDamagePercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.tackleBlock.serializeAs_CharacterBaseCharacteristic(param1);
                          this.tackleEvade.serializeAs_CharacterBaseCharacteristic(param1);
                          this.PAAttack.serializeAs_CharacterBaseCharacteristic(param1);
                          this.PMAttack.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pushDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.criticalDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.neutralDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.earthDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.waterDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.airDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.fireDamageBonus.serializeAs_CharacterBaseCharacteristic(param1);
                          this.dodgePALostProbability.serializeAs_CharacterBaseCharacteristic(param1);
                          this.dodgePMLostProbability.serializeAs_CharacterBaseCharacteristic(param1);
                          this.neutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.earthElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.waterElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.airElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.fireElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.neutralElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.earthElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.waterElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.airElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.fireElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pushDamageReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.criticalDamageReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpNeutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpEarthElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpWaterElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpAirElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpFireElementResistPercent.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpNeutralElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpEarthElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpWaterElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpAirElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          this.pvpFireElementReduction.serializeAs_CharacterBaseCharacteristic(param1);
                          param1.writeShort(this.spellModifications.length);
                          var _loc2_ = 0;
                          while (_loc2_ < this.spellModifications.length) {
                            (this.spellModifications[_loc2_]).serializeAs_CharacterSpellModification(param1);
                            _loc2_++;
                          }
                          if (this.probationTime < 0) {
                            throw new Error("Forbidden value (" + this.probationTime + ") on element probationTime.");
                          } else {
                            param1.writeInt(this.probationTime);
                            return;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

CharacterCharacteristicsInformations.prototype.deserializeAs_CharacterCharacteristicsInformations = function(param1) {
  var _loc4_ = null;
  this.experience = param1.readVarUhLong();
  if (this.experience < 0 || this.experience > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.experience + ") on element of CharacterCharacteristicsInformations.experience.");
  } else {
    this.experienceLevelFloor = param1.readVarUhLong();
    if (this.experienceLevelFloor < 0 || this.experienceLevelFloor > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.experienceLevelFloor + ") on element of CharacterCharacteristicsInformations.experienceLevelFloor.");
    } else {
      this.experienceNextLevelFloor = param1.readVarUhLong();
      if (this.experienceNextLevelFloor < 0 || this.experienceNextLevelFloor > 9.007199254740992E15) {
        throw new Error("Forbidden value (" + this.experienceNextLevelFloor + ") on element of CharacterCharacteristicsInformations.experienceNextLevelFloor.");
      } else {
        this.kamas = param1.readInt();
        if (this.kamas < 0) {
          throw new Error("Forbidden value (" + this.kamas + ") on element of CharacterCharacteristicsInformations.kamas.");
        } else {
          this.statsPoints = param1.readVarUhShort();
          if (this.statsPoints < 0) {
            throw new Error("Forbidden value (" + this.statsPoints + ") on element of CharacterCharacteristicsInformations.statsPoints.");
          } else {
            this.additionnalPoints = param1.readVarUhShort();
            if (this.additionnalPoints < 0) {
              throw new Error("Forbidden value (" + this.additionnalPoints + ") on element of CharacterCharacteristicsInformations.additionnalPoints.");
            } else {
              this.spellsPoints = param1.readVarUhShort();
              if (this.spellsPoints < 0) {
                throw new Error("Forbidden value (" + this.spellsPoints + ") on element of CharacterCharacteristicsInformations.spellsPoints.");
              } else {
                this.alignmentInfos = new ActorExtendedAlignmentInformations();
                this.alignmentInfos.deserialize(param1);
                this.lifePoints = param1.readVarUhInt();
                if (this.lifePoints < 0) {
                  throw new Error("Forbidden value (" + this.lifePoints + ") on element of CharacterCharacteristicsInformations.lifePoints.");
                } else {
                  this.maxLifePoints = param1.readVarUhInt();
                  if (this.maxLifePoints < 0) {
                    throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of CharacterCharacteristicsInformations.maxLifePoints.");
                  } else {
                    this.energyPoints = param1.readVarUhShort();
                    if (this.energyPoints < 0) {
                      throw new Error("Forbidden value (" + this.energyPoints + ") on element of CharacterCharacteristicsInformations.energyPoints.");
                    } else {
                      this.maxEnergyPoints = param1.readVarUhShort();
                      if (this.maxEnergyPoints < 0) {
                        throw new Error("Forbidden value (" + this.maxEnergyPoints + ") on element of CharacterCharacteristicsInformations.maxEnergyPoints.");
                      } else {
                        this.actionPointsCurrent = param1.readVarShort();
                        this.movementPointsCurrent = param1.readVarShort();
                        this.initiative = new CharacterBaseCharacteristic();
                        this.initiative.deserialize(param1);
                        this.prospecting = new CharacterBaseCharacteristic();
                        this.prospecting.deserialize(param1);
                        this.actionPoints = new CharacterBaseCharacteristic();
                        this.actionPoints.deserialize(param1);
                        this.movementPoints = new CharacterBaseCharacteristic();
                        this.movementPoints.deserialize(param1);
                        this.strength = new CharacterBaseCharacteristic();
                        this.strength.deserialize(param1);
                        this.vitality = new CharacterBaseCharacteristic();
                        this.vitality.deserialize(param1);
                        this.wisdom = new CharacterBaseCharacteristic();
                        this.wisdom.deserialize(param1);
                        this.chance = new CharacterBaseCharacteristic();
                        this.chance.deserialize(param1);
                        this.agility = new CharacterBaseCharacteristic();
                        this.agility.deserialize(param1);
                        this.intelligence = new CharacterBaseCharacteristic();
                        this.intelligence.deserialize(param1);
                        this.range = new CharacterBaseCharacteristic();
                        this.range.deserialize(param1);
                        this.summonableCreaturesBoost = new CharacterBaseCharacteristic();
                        this.summonableCreaturesBoost.deserialize(param1);
                        this.reflect = new CharacterBaseCharacteristic();
                        this.reflect.deserialize(param1);
                        this.criticalHit = new CharacterBaseCharacteristic();
                        this.criticalHit.deserialize(param1);
                        this.criticalHitWeapon = param1.readVarUhShort();
                        if (this.criticalHitWeapon < 0) {
                          throw new Error("Forbidden value (" + this.criticalHitWeapon + ") on element of CharacterCharacteristicsInformations.criticalHitWeapon.");
                        } else {
                          this.criticalMiss = new CharacterBaseCharacteristic();
                          this.criticalMiss.deserialize(param1);
                          this.healBonus = new CharacterBaseCharacteristic();
                          this.healBonus.deserialize(param1);
                          this.allDamagesBonus = new CharacterBaseCharacteristic();
                          this.allDamagesBonus.deserialize(param1);
                          this.weaponDamagesBonusPercent = new CharacterBaseCharacteristic();
                          this.weaponDamagesBonusPercent.deserialize(param1);
                          this.damagesBonusPercent = new CharacterBaseCharacteristic();
                          this.damagesBonusPercent.deserialize(param1);
                          this.trapBonus = new CharacterBaseCharacteristic();
                          this.trapBonus.deserialize(param1);
                          this.trapBonusPercent = new CharacterBaseCharacteristic();
                          this.trapBonusPercent.deserialize(param1);
                          this.glyphBonusPercent = new CharacterBaseCharacteristic();
                          this.glyphBonusPercent.deserialize(param1);
                          this.permanentDamagePercent = new CharacterBaseCharacteristic();
                          this.permanentDamagePercent.deserialize(param1);
                          this.tackleBlock = new CharacterBaseCharacteristic();
                          this.tackleBlock.deserialize(param1);
                          this.tackleEvade = new CharacterBaseCharacteristic();
                          this.tackleEvade.deserialize(param1);
                          this.PAAttack = new CharacterBaseCharacteristic();
                          this.PAAttack.deserialize(param1);
                          this.PMAttack = new CharacterBaseCharacteristic();
                          this.PMAttack.deserialize(param1);
                          this.pushDamageBonus = new CharacterBaseCharacteristic();
                          this.pushDamageBonus.deserialize(param1);
                          this.criticalDamageBonus = new CharacterBaseCharacteristic();
                          this.criticalDamageBonus.deserialize(param1);
                          this.neutralDamageBonus = new CharacterBaseCharacteristic();
                          this.neutralDamageBonus.deserialize(param1);
                          this.earthDamageBonus = new CharacterBaseCharacteristic();
                          this.earthDamageBonus.deserialize(param1);
                          this.waterDamageBonus = new CharacterBaseCharacteristic();
                          this.waterDamageBonus.deserialize(param1);
                          this.airDamageBonus = new CharacterBaseCharacteristic();
                          this.airDamageBonus.deserialize(param1);
                          this.fireDamageBonus = new CharacterBaseCharacteristic();
                          this.fireDamageBonus.deserialize(param1);
                          this.dodgePALostProbability = new CharacterBaseCharacteristic();
                          this.dodgePALostProbability.deserialize(param1);
                          this.dodgePMLostProbability = new CharacterBaseCharacteristic();
                          this.dodgePMLostProbability.deserialize(param1);
                          this.neutralElementResistPercent = new CharacterBaseCharacteristic();
                          this.neutralElementResistPercent.deserialize(param1);
                          this.earthElementResistPercent = new CharacterBaseCharacteristic();
                          this.earthElementResistPercent.deserialize(param1);
                          this.waterElementResistPercent = new CharacterBaseCharacteristic();
                          this.waterElementResistPercent.deserialize(param1);
                          this.airElementResistPercent = new CharacterBaseCharacteristic();
                          this.airElementResistPercent.deserialize(param1);
                          this.fireElementResistPercent = new CharacterBaseCharacteristic();
                          this.fireElementResistPercent.deserialize(param1);
                          this.neutralElementReduction = new CharacterBaseCharacteristic();
                          this.neutralElementReduction.deserialize(param1);
                          this.earthElementReduction = new CharacterBaseCharacteristic();
                          this.earthElementReduction.deserialize(param1);
                          this.waterElementReduction = new CharacterBaseCharacteristic();
                          this.waterElementReduction.deserialize(param1);
                          this.airElementReduction = new CharacterBaseCharacteristic();
                          this.airElementReduction.deserialize(param1);
                          this.fireElementReduction = new CharacterBaseCharacteristic();
                          this.fireElementReduction.deserialize(param1);
                          this.pushDamageReduction = new CharacterBaseCharacteristic();
                          this.pushDamageReduction.deserialize(param1);
                          this.criticalDamageReduction = new CharacterBaseCharacteristic();
                          this.criticalDamageReduction.deserialize(param1);
                          this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristic();
                          this.pvpNeutralElementResistPercent.deserialize(param1);
                          this.pvpEarthElementResistPercent = new CharacterBaseCharacteristic();
                          this.pvpEarthElementResistPercent.deserialize(param1);
                          this.pvpWaterElementResistPercent = new CharacterBaseCharacteristic();
                          this.pvpWaterElementResistPercent.deserialize(param1);
                          this.pvpAirElementResistPercent = new CharacterBaseCharacteristic();
                          this.pvpAirElementResistPercent.deserialize(param1);
                          this.pvpFireElementResistPercent = new CharacterBaseCharacteristic();
                          this.pvpFireElementResistPercent.deserialize(param1);
                          this.pvpNeutralElementReduction = new CharacterBaseCharacteristic();
                          this.pvpNeutralElementReduction.deserialize(param1);
                          this.pvpEarthElementReduction = new CharacterBaseCharacteristic();
                          this.pvpEarthElementReduction.deserialize(param1);
                          this.pvpWaterElementReduction = new CharacterBaseCharacteristic();
                          this.pvpWaterElementReduction.deserialize(param1);
                          this.pvpAirElementReduction = new CharacterBaseCharacteristic();
                          this.pvpAirElementReduction.deserialize(param1);
                          this.pvpFireElementReduction = new CharacterBaseCharacteristic();
                          this.pvpFireElementReduction.deserialize(param1);
                          var _loc2_ = param1.readUnsignedShort();
                          var _loc3_ = 0;
                          while (_loc3_ < _loc2_) {
                            _loc4_ = new CharacterSpellModification();
                            _loc4_.deserialize(param1);
                            this.spellModifications.push(_loc4_);
                            _loc3_++;
                          }
                          this.probationTime = param1.readInt();
                          if (this.probationTime < 0) {
                            throw new Error("Forbidden value (" + this.probationTime + ") on element of CharacterCharacteristicsInformations.probationTime.");
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
          }
        }
      }
    }
  }
};

CharacterCharacteristicsInformations.prototype.getTypeId = function() {
  return 8;
};

CharacterCharacteristicsInformations.prototype.getClassName = function() {
  return 'CharacterCharacteristicsInformations';
};

module.exports.id = 8;
module.exports.class = CharacterCharacteristicsInformations;
module.exports.getInstance = function() {
  return new CharacterCharacteristicsInformations();
};