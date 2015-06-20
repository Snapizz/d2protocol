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



CharacterCharacteristicsInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterCharacteristicsInformations(output);
};

CharacterCharacteristicsInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterCharacteristicsInformations(input);
};

CharacterCharacteristicsInformations.prototype.serializeAs_CharacterCharacteristicsInformations = function(output) {
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if ((((this.experienceLevelFloor < 0)) || ((this.experienceLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceLevelFloor) + ") on element experienceLevelFloor.")));
  };
  output.writeVarLong(this.experienceLevelFloor);
  if ((((this.experienceNextLevelFloor < 0)) || ((this.experienceNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceNextLevelFloor) + ") on element experienceNextLevelFloor.")));
  };
  output.writeVarLong(this.experienceNextLevelFloor);
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element kamas.")));
  };
  output.writeInt(this.kamas);
  if (this.statsPoints < 0) {
    throw (new Error((("Forbidden value (" + this.statsPoints) + ") on element statsPoints.")));
  };
  output.writeVarShort(this.statsPoints);
  if (this.additionnalPoints < 0) {
    throw (new Error((("Forbidden value (" + this.additionnalPoints) + ") on element additionnalPoints.")));
  };
  output.writeVarShort(this.additionnalPoints);
  if (this.spellsPoints < 0) {
    throw (new Error((("Forbidden value (" + this.spellsPoints) + ") on element spellsPoints.")));
  };
  output.writeVarShort(this.spellsPoints);
  this.alignmentInfos.serializeAs_ActorExtendedAlignmentInformations(output);
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element lifePoints.")));
  };
  output.writeVarInt(this.lifePoints);
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element maxLifePoints.")));
  };
  output.writeVarInt(this.maxLifePoints);
  if (this.energyPoints < 0) {
    throw (new Error((("Forbidden value (" + this.energyPoints) + ") on element energyPoints.")));
  };
  output.writeVarShort(this.energyPoints);
  if (this.maxEnergyPoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxEnergyPoints) + ") on element maxEnergyPoints.")));
  };
  output.writeVarShort(this.maxEnergyPoints);
  output.writeVarShort(this.actionPointsCurrent);
  output.writeVarShort(this.movementPointsCurrent);
  this.initiative.serializeAs_CharacterBaseCharacteristic(output);
  this.prospecting.serializeAs_CharacterBaseCharacteristic(output);
  this.actionPoints.serializeAs_CharacterBaseCharacteristic(output);
  this.movementPoints.serializeAs_CharacterBaseCharacteristic(output);
  this.strength.serializeAs_CharacterBaseCharacteristic(output);
  this.vitality.serializeAs_CharacterBaseCharacteristic(output);
  this.wisdom.serializeAs_CharacterBaseCharacteristic(output);
  this.chance.serializeAs_CharacterBaseCharacteristic(output);
  this.agility.serializeAs_CharacterBaseCharacteristic(output);
  this.intelligence.serializeAs_CharacterBaseCharacteristic(output);
  this.range.serializeAs_CharacterBaseCharacteristic(output);
  this.summonableCreaturesBoost.serializeAs_CharacterBaseCharacteristic(output);
  this.reflect.serializeAs_CharacterBaseCharacteristic(output);
  this.criticalHit.serializeAs_CharacterBaseCharacteristic(output);
  if (this.criticalHitWeapon < 0) {
    throw (new Error((("Forbidden value (" + this.criticalHitWeapon) + ") on element criticalHitWeapon.")));
  };
  output.writeVarShort(this.criticalHitWeapon);
  this.criticalMiss.serializeAs_CharacterBaseCharacteristic(output);
  this.healBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.allDamagesBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.weaponDamagesBonusPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.damagesBonusPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.trapBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.trapBonusPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.glyphBonusPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.permanentDamagePercent.serializeAs_CharacterBaseCharacteristic(output);
  this.tackleBlock.serializeAs_CharacterBaseCharacteristic(output);
  this.tackleEvade.serializeAs_CharacterBaseCharacteristic(output);
  this.PAAttack.serializeAs_CharacterBaseCharacteristic(output);
  this.PMAttack.serializeAs_CharacterBaseCharacteristic(output);
  this.pushDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.criticalDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.neutralDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.earthDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.waterDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.airDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.fireDamageBonus.serializeAs_CharacterBaseCharacteristic(output);
  this.dodgePALostProbability.serializeAs_CharacterBaseCharacteristic(output);
  this.dodgePMLostProbability.serializeAs_CharacterBaseCharacteristic(output);
  this.neutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.earthElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.waterElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.airElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.fireElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.neutralElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.earthElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.waterElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.airElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.fireElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pushDamageReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.criticalDamageReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpNeutralElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpEarthElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpWaterElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpAirElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpFireElementResistPercent.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpNeutralElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpEarthElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpWaterElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpAirElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  this.pvpFireElementReduction.serializeAs_CharacterBaseCharacteristic(output);
  output.writeShort(this.spellModifications.length);
  var _i74 = 0;
  while (_i74 < this.spellModifications.length) {
    (this.spellModifications[_i74]).serializeAs_CharacterSpellModification(output);
    _i74++;
  };
  if (this.probationTime < 0) {
    throw (new Error((("Forbidden value (" + this.probationTime) + ") on element probationTime.")));
  };
  output.writeInt(this.probationTime);
};

CharacterCharacteristicsInformations.prototype.deserializeAs_CharacterCharacteristicsInformations = function(input) {
  var _item74;
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of CharacterCharacteristicsInformations.experience.")));
  };
  this.experienceLevelFloor = input.readVarUhLong();
  if ((((this.experienceLevelFloor < 0)) || ((this.experienceLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceLevelFloor) + ") on element of CharacterCharacteristicsInformations.experienceLevelFloor.")));
  };
  this.experienceNextLevelFloor = input.readVarUhLong();
  if ((((this.experienceNextLevelFloor < 0)) || ((this.experienceNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceNextLevelFloor) + ") on element of CharacterCharacteristicsInformations.experienceNextLevelFloor.")));
  };
  this.kamas = input.readInt();
  if (this.kamas < 0) {
    throw (new Error((("Forbidden value (" + this.kamas) + ") on element of CharacterCharacteristicsInformations.kamas.")));
  };
  this.statsPoints = input.readVarUhShort();
  if (this.statsPoints < 0) {
    throw (new Error((("Forbidden value (" + this.statsPoints) + ") on element of CharacterCharacteristicsInformations.statsPoints.")));
  };
  this.additionnalPoints = input.readVarUhShort();
  if (this.additionnalPoints < 0) {
    throw (new Error((("Forbidden value (" + this.additionnalPoints) + ") on element of CharacterCharacteristicsInformations.additionnalPoints.")));
  };
  this.spellsPoints = input.readVarUhShort();
  if (this.spellsPoints < 0) {
    throw (new Error((("Forbidden value (" + this.spellsPoints) + ") on element of CharacterCharacteristicsInformations.spellsPoints.")));
  };
  this.alignmentInfos = new ActorExtendedAlignmentInformations();
  this.alignmentInfos.deserialize(input);
  this.lifePoints = input.readVarUhInt();
  if (this.lifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.lifePoints) + ") on element of CharacterCharacteristicsInformations.lifePoints.")));
  };
  this.maxLifePoints = input.readVarUhInt();
  if (this.maxLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxLifePoints) + ") on element of CharacterCharacteristicsInformations.maxLifePoints.")));
  };
  this.energyPoints = input.readVarUhShort();
  if (this.energyPoints < 0) {
    throw (new Error((("Forbidden value (" + this.energyPoints) + ") on element of CharacterCharacteristicsInformations.energyPoints.")));
  };
  this.maxEnergyPoints = input.readVarUhShort();
  if (this.maxEnergyPoints < 0) {
    throw (new Error((("Forbidden value (" + this.maxEnergyPoints) + ") on element of CharacterCharacteristicsInformations.maxEnergyPoints.")));
  };
  this.actionPointsCurrent = input.readVarShort();
  this.movementPointsCurrent = input.readVarShort();
  this.initiative = new CharacterBaseCharacteristic();
  this.initiative.deserialize(input);
  this.prospecting = new CharacterBaseCharacteristic();
  this.prospecting.deserialize(input);
  this.actionPoints = new CharacterBaseCharacteristic();
  this.actionPoints.deserialize(input);
  this.movementPoints = new CharacterBaseCharacteristic();
  this.movementPoints.deserialize(input);
  this.strength = new CharacterBaseCharacteristic();
  this.strength.deserialize(input);
  this.vitality = new CharacterBaseCharacteristic();
  this.vitality.deserialize(input);
  this.wisdom = new CharacterBaseCharacteristic();
  this.wisdom.deserialize(input);
  this.chance = new CharacterBaseCharacteristic();
  this.chance.deserialize(input);
  this.agility = new CharacterBaseCharacteristic();
  this.agility.deserialize(input);
  this.intelligence = new CharacterBaseCharacteristic();
  this.intelligence.deserialize(input);
  this.range = new CharacterBaseCharacteristic();
  this.range.deserialize(input);
  this.summonableCreaturesBoost = new CharacterBaseCharacteristic();
  this.summonableCreaturesBoost.deserialize(input);
  this.reflect = new CharacterBaseCharacteristic();
  this.reflect.deserialize(input);
  this.criticalHit = new CharacterBaseCharacteristic();
  this.criticalHit.deserialize(input);
  this.criticalHitWeapon = input.readVarUhShort();
  if (this.criticalHitWeapon < 0) {
    throw (new Error((("Forbidden value (" + this.criticalHitWeapon) + ") on element of CharacterCharacteristicsInformations.criticalHitWeapon.")));
  };
  this.criticalMiss = new CharacterBaseCharacteristic();
  this.criticalMiss.deserialize(input);
  this.healBonus = new CharacterBaseCharacteristic();
  this.healBonus.deserialize(input);
  this.allDamagesBonus = new CharacterBaseCharacteristic();
  this.allDamagesBonus.deserialize(input);
  this.weaponDamagesBonusPercent = new CharacterBaseCharacteristic();
  this.weaponDamagesBonusPercent.deserialize(input);
  this.damagesBonusPercent = new CharacterBaseCharacteristic();
  this.damagesBonusPercent.deserialize(input);
  this.trapBonus = new CharacterBaseCharacteristic();
  this.trapBonus.deserialize(input);
  this.trapBonusPercent = new CharacterBaseCharacteristic();
  this.trapBonusPercent.deserialize(input);
  this.glyphBonusPercent = new CharacterBaseCharacteristic();
  this.glyphBonusPercent.deserialize(input);
  this.permanentDamagePercent = new CharacterBaseCharacteristic();
  this.permanentDamagePercent.deserialize(input);
  this.tackleBlock = new CharacterBaseCharacteristic();
  this.tackleBlock.deserialize(input);
  this.tackleEvade = new CharacterBaseCharacteristic();
  this.tackleEvade.deserialize(input);
  this.PAAttack = new CharacterBaseCharacteristic();
  this.PAAttack.deserialize(input);
  this.PMAttack = new CharacterBaseCharacteristic();
  this.PMAttack.deserialize(input);
  this.pushDamageBonus = new CharacterBaseCharacteristic();
  this.pushDamageBonus.deserialize(input);
  this.criticalDamageBonus = new CharacterBaseCharacteristic();
  this.criticalDamageBonus.deserialize(input);
  this.neutralDamageBonus = new CharacterBaseCharacteristic();
  this.neutralDamageBonus.deserialize(input);
  this.earthDamageBonus = new CharacterBaseCharacteristic();
  this.earthDamageBonus.deserialize(input);
  this.waterDamageBonus = new CharacterBaseCharacteristic();
  this.waterDamageBonus.deserialize(input);
  this.airDamageBonus = new CharacterBaseCharacteristic();
  this.airDamageBonus.deserialize(input);
  this.fireDamageBonus = new CharacterBaseCharacteristic();
  this.fireDamageBonus.deserialize(input);
  this.dodgePALostProbability = new CharacterBaseCharacteristic();
  this.dodgePALostProbability.deserialize(input);
  this.dodgePMLostProbability = new CharacterBaseCharacteristic();
  this.dodgePMLostProbability.deserialize(input);
  this.neutralElementResistPercent = new CharacterBaseCharacteristic();
  this.neutralElementResistPercent.deserialize(input);
  this.earthElementResistPercent = new CharacterBaseCharacteristic();
  this.earthElementResistPercent.deserialize(input);
  this.waterElementResistPercent = new CharacterBaseCharacteristic();
  this.waterElementResistPercent.deserialize(input);
  this.airElementResistPercent = new CharacterBaseCharacteristic();
  this.airElementResistPercent.deserialize(input);
  this.fireElementResistPercent = new CharacterBaseCharacteristic();
  this.fireElementResistPercent.deserialize(input);
  this.neutralElementReduction = new CharacterBaseCharacteristic();
  this.neutralElementReduction.deserialize(input);
  this.earthElementReduction = new CharacterBaseCharacteristic();
  this.earthElementReduction.deserialize(input);
  this.waterElementReduction = new CharacterBaseCharacteristic();
  this.waterElementReduction.deserialize(input);
  this.airElementReduction = new CharacterBaseCharacteristic();
  this.airElementReduction.deserialize(input);
  this.fireElementReduction = new CharacterBaseCharacteristic();
  this.fireElementReduction.deserialize(input);
  this.pushDamageReduction = new CharacterBaseCharacteristic();
  this.pushDamageReduction.deserialize(input);
  this.criticalDamageReduction = new CharacterBaseCharacteristic();
  this.criticalDamageReduction.deserialize(input);
  this.pvpNeutralElementResistPercent = new CharacterBaseCharacteristic();
  this.pvpNeutralElementResistPercent.deserialize(input);
  this.pvpEarthElementResistPercent = new CharacterBaseCharacteristic();
  this.pvpEarthElementResistPercent.deserialize(input);
  this.pvpWaterElementResistPercent = new CharacterBaseCharacteristic();
  this.pvpWaterElementResistPercent.deserialize(input);
  this.pvpAirElementResistPercent = new CharacterBaseCharacteristic();
  this.pvpAirElementResistPercent.deserialize(input);
  this.pvpFireElementResistPercent = new CharacterBaseCharacteristic();
  this.pvpFireElementResistPercent.deserialize(input);
  this.pvpNeutralElementReduction = new CharacterBaseCharacteristic();
  this.pvpNeutralElementReduction.deserialize(input);
  this.pvpEarthElementReduction = new CharacterBaseCharacteristic();
  this.pvpEarthElementReduction.deserialize(input);
  this.pvpWaterElementReduction = new CharacterBaseCharacteristic();
  this.pvpWaterElementReduction.deserialize(input);
  this.pvpAirElementReduction = new CharacterBaseCharacteristic();
  this.pvpAirElementReduction.deserialize(input);
  this.pvpFireElementReduction = new CharacterBaseCharacteristic();
  this.pvpFireElementReduction.deserialize(input);
  var _spellModificationsLen = input.readUnsignedShort();
  var _i74 = 0;
  while (_i74 < _spellModificationsLen) {
    _item74 = new CharacterSpellModification();
    _item74.deserialize(input);
    this.spellModifications.push(_item74);
    _i74++;
  };
  this.probationTime = input.readInt();
  if (this.probationTime < 0) {
    throw (new Error((("Forbidden value (" + this.probationTime) + ") on element of CharacterCharacteristicsInformations.probationTime.")));
  };
};

CharacterCharacteristicsInformations.prototype.getTypeId = function() {
  return 8;
};

CharacterCharacteristicsInformations.prototype.getClassName = function() {
  return 'CharacterCharacteristicsInformations';
};

module.exports.id = 8;
module.exports.class = CharacterCharacteristicsInformations;