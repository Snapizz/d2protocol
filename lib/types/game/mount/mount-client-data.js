var MountClientData = function() {
  this.id = 0;
  this.model = 0;
  this.ancestor = [];
  this.behaviors = [];
  this.name = "";
  this.sex = false;
  this.ownerId = 0;
  this.experience = 0;
  this.experienceForLevel = 0;
  this.experienceForNextLevel = 0;
  this.level = 0;
  this.isRideable = false;
  this.maxPods = 0;
  this.isWild = false;
  this.stamina = 0;
  this.staminaMax = 0;
  this.maturity = 0;
  this.maturityForAdult = 0;
  this.energy = 0;
  this.energyMax = 0;
  this.serenity = 0;
  this.aggressivityMax = 0;
  this.serenityMax = 0;
  this.love = 0;
  this.loveMax = 0;
  this.fecondationTime = 0;
  this.isFecondationReady = false;
  this.boostLimiter = 0;
  this.boostMax = 0;
  this.reproductionCount = 0;
  this.reproductionCountMax = 0;
  this.effectList = [];
};



MountClientData.prototype.serialize = function(output) {
  this.serializeAs_MountClientData(output);
};

MountClientData.prototype.deserialize = function(input) {
  this.deserializeAs_MountClientData(input);
};

MountClientData.prototype.serializeAs_MountClientData = function(output) {
  var _box0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.sex);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.isRideable);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.isWild);
  _box0 = BooleanByteWrapper.setFlag(_box0, 3, this.isFecondationReady);
  output.writeByte(_box0);
  if ((((this.id < -9007199254740992)) || ((this.id > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeDouble(this.id);
  if (this.model < 0) {
    throw (new Error((("Forbidden value (" + this.model) + ") on element model.")));
  };
  output.writeVarInt(this.model);
  output.writeShort(this.ancestor.length);
  var _i3;
  while (_i3 < this.ancestor.length) {
    if (this.ancestor[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.ancestor[_i3]) + ") on element 3 (starting at 1) of ancestor.")));
    };
    output.writeInt(this.ancestor[_i3]);
    _i3++;
  };
  output.writeShort(this.behaviors.length);
  var _i4;
  while (_i4 < this.behaviors.length) {
    if (this.behaviors[_i4] < 0) {
      throw (new Error((("Forbidden value (" + this.behaviors[_i4]) + ") on element 4 (starting at 1) of behaviors.")));
    };
    output.writeInt(this.behaviors[_i4]);
    _i4++;
  };
  output.writeUTF(this.name);
  if (this.ownerId < 0) {
    throw (new Error((("Forbidden value (" + this.ownerId) + ") on element ownerId.")));
  };
  output.writeInt(this.ownerId);
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if ((((this.experienceForLevel < 0)) || ((this.experienceForLevel > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceForLevel) + ") on element experienceForLevel.")));
  };
  output.writeVarLong(this.experienceForLevel);
  if ((((this.experienceForNextLevel < -9007199254740992)) || ((this.experienceForNextLevel > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceForNextLevel) + ") on element experienceForNextLevel.")));
  };
  output.writeDouble(this.experienceForNextLevel);
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  if (this.maxPods < 0) {
    throw (new Error((("Forbidden value (" + this.maxPods) + ") on element maxPods.")));
  };
  output.writeVarInt(this.maxPods);
  if (this.stamina < 0) {
    throw (new Error((("Forbidden value (" + this.stamina) + ") on element stamina.")));
  };
  output.writeVarInt(this.stamina);
  if (this.staminaMax < 0) {
    throw (new Error((("Forbidden value (" + this.staminaMax) + ") on element staminaMax.")));
  };
  output.writeVarInt(this.staminaMax);
  if (this.maturity < 0) {
    throw (new Error((("Forbidden value (" + this.maturity) + ") on element maturity.")));
  };
  output.writeVarInt(this.maturity);
  if (this.maturityForAdult < 0) {
    throw (new Error((("Forbidden value (" + this.maturityForAdult) + ") on element maturityForAdult.")));
  };
  output.writeVarInt(this.maturityForAdult);
  if (this.energy < 0) {
    throw (new Error((("Forbidden value (" + this.energy) + ") on element energy.")));
  };
  output.writeVarInt(this.energy);
  if (this.energyMax < 0) {
    throw (new Error((("Forbidden value (" + this.energyMax) + ") on element energyMax.")));
  };
  output.writeVarInt(this.energyMax);
  output.writeInt(this.serenity);
  output.writeInt(this.aggressivityMax);
  if (this.serenityMax < 0) {
    throw (new Error((("Forbidden value (" + this.serenityMax) + ") on element serenityMax.")));
  };
  output.writeVarInt(this.serenityMax);
  if (this.love < 0) {
    throw (new Error((("Forbidden value (" + this.love) + ") on element love.")));
  };
  output.writeVarInt(this.love);
  if (this.loveMax < 0) {
    throw (new Error((("Forbidden value (" + this.loveMax) + ") on element loveMax.")));
  };
  output.writeVarInt(this.loveMax);
  output.writeInt(this.fecondationTime);
  if (this.boostLimiter < 0) {
    throw (new Error((("Forbidden value (" + this.boostLimiter) + ") on element boostLimiter.")));
  };
  output.writeInt(this.boostLimiter);
  if ((((this.boostMax < -9007199254740992)) || ((this.boostMax > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.boostMax) + ") on element boostMax.")));
  };
  output.writeDouble(this.boostMax);
  output.writeInt(this.reproductionCount);
  if (this.reproductionCountMax < 0) {
    throw (new Error((("Forbidden value (" + this.reproductionCountMax) + ") on element reproductionCountMax.")));
  };
  output.writeVarInt(this.reproductionCountMax);
  output.writeShort(this.effectList.length);
  var _i32;
  while (_i32 < this.effectList.length) {
    (this.effectList[_i32]).serializeAs_ObjectEffectInteger(output);
    _i32++;
  };
};

MountClientData.prototype.deserializeAs_MountClientData = function(input) {
  var _val3;
  var _val4;
  var _item32;
  var _box0 = input.readByte();
  this.sex = BooleanByteWrapper.getFlag(_box0, 0);
  this.isRideable = BooleanByteWrapper.getFlag(_box0, 1);
  this.isWild = BooleanByteWrapper.getFlag(_box0, 2);
  this.isFecondationReady = BooleanByteWrapper.getFlag(_box0, 3);
  this.id = input.readDouble();
  if ((((this.id < -9007199254740992)) || ((this.id > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of MountClientData.id.")));
  };
  this.model = input.readVarUhInt();
  if (this.model < 0) {
    throw (new Error((("Forbidden value (" + this.model) + ") on element of MountClientData.model.")));
  };
  var _ancestorLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _ancestorLen) {
    _val3 = input.readInt();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of ancestor.")));
    };
    this.ancestor.push(_val3);
    _i3++;
  };
  var _behaviorsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _behaviorsLen) {
    _val4 = input.readInt();
    if (_val4 < 0) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of behaviors.")));
    };
    this.behaviors.push(_val4);
    _i4++;
  };
  this.name = input.readUTF();
  this.ownerId = input.readInt();
  if (this.ownerId < 0) {
    throw (new Error((("Forbidden value (" + this.ownerId) + ") on element of MountClientData.ownerId.")));
  };
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of MountClientData.experience.")));
  };
  this.experienceForLevel = input.readVarUhLong();
  if ((((this.experienceForLevel < 0)) || ((this.experienceForLevel > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceForLevel) + ") on element of MountClientData.experienceForLevel.")));
  };
  this.experienceForNextLevel = input.readDouble();
  if ((((this.experienceForNextLevel < -9007199254740992)) || ((this.experienceForNextLevel > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceForNextLevel) + ") on element of MountClientData.experienceForNextLevel.")));
  };
  this.level = input.readByte();
  if (this.level < 0) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of MountClientData.level.")));
  };
  this.maxPods = input.readVarUhInt();
  if (this.maxPods < 0) {
    throw (new Error((("Forbidden value (" + this.maxPods) + ") on element of MountClientData.maxPods.")));
  };
  this.stamina = input.readVarUhInt();
  if (this.stamina < 0) {
    throw (new Error((("Forbidden value (" + this.stamina) + ") on element of MountClientData.stamina.")));
  };
  this.staminaMax = input.readVarUhInt();
  if (this.staminaMax < 0) {
    throw (new Error((("Forbidden value (" + this.staminaMax) + ") on element of MountClientData.staminaMax.")));
  };
  this.maturity = input.readVarUhInt();
  if (this.maturity < 0) {
    throw (new Error((("Forbidden value (" + this.maturity) + ") on element of MountClientData.maturity.")));
  };
  this.maturityForAdult = input.readVarUhInt();
  if (this.maturityForAdult < 0) {
    throw (new Error((("Forbidden value (" + this.maturityForAdult) + ") on element of MountClientData.maturityForAdult.")));
  };
  this.energy = input.readVarUhInt();
  if (this.energy < 0) {
    throw (new Error((("Forbidden value (" + this.energy) + ") on element of MountClientData.energy.")));
  };
  this.energyMax = input.readVarUhInt();
  if (this.energyMax < 0) {
    throw (new Error((("Forbidden value (" + this.energyMax) + ") on element of MountClientData.energyMax.")));
  };
  this.serenity = input.readInt();
  this.aggressivityMax = input.readInt();
  this.serenityMax = input.readVarUhInt();
  if (this.serenityMax < 0) {
    throw (new Error((("Forbidden value (" + this.serenityMax) + ") on element of MountClientData.serenityMax.")));
  };
  this.love = input.readVarUhInt();
  if (this.love < 0) {
    throw (new Error((("Forbidden value (" + this.love) + ") on element of MountClientData.love.")));
  };
  this.loveMax = input.readVarUhInt();
  if (this.loveMax < 0) {
    throw (new Error((("Forbidden value (" + this.loveMax) + ") on element of MountClientData.loveMax.")));
  };
  this.fecondationTime = input.readInt();
  this.boostLimiter = input.readInt();
  if (this.boostLimiter < 0) {
    throw (new Error((("Forbidden value (" + this.boostLimiter) + ") on element of MountClientData.boostLimiter.")));
  };
  this.boostMax = input.readDouble();
  if ((((this.boostMax < -9007199254740992)) || ((this.boostMax > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.boostMax) + ") on element of MountClientData.boostMax.")));
  };
  this.reproductionCount = input.readInt();
  this.reproductionCountMax = input.readVarUhInt();
  if (this.reproductionCountMax < 0) {
    throw (new Error((("Forbidden value (" + this.reproductionCountMax) + ") on element of MountClientData.reproductionCountMax.")));
  };
  var _effectListLen = input.readUnsignedShort();
  var _i32;
  while (_i32 < _effectListLen) {
    _item32 = new ObjectEffectInteger();
    _item32.deserialize(input);
    this.effectList.push(_item32);
    _i32++;
  };
};

MountClientData.prototype.getTypeId = function() {
  return 178;
};

MountClientData.prototype.getClassName = function() {
  return 'MountClientData';
};

module.exports.id = 178;
module.exports.class = MountClientData;