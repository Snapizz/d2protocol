var BaseMessage = require('./game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayGroupMonsterInformations = function() {
  this.staticInfos;
  this.ageBonus = 0;
  this.lootShare = 0;
  this.alignmentSide = 0;
  this.keyRingBonus = false;
  this.hasHardcoreDrop = false;
  this.hasAVARewardToken = false;
};

util.inherits(GameRolePlayGroupMonsterInformations, BaseMessage);

GameRolePlayGroupMonsterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayGroupMonsterInformations(output);
};

GameRolePlayGroupMonsterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayGroupMonsterInformations(input);
};

GameRolePlayGroupMonsterInformations.prototype.serializeAs_GameRolePlayGroupMonsterInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.keyRingBonus);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.hasHardcoreDrop);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.hasAVARewardToken);
  output.writeByte(_box0);
  output.writeShort(this.staticInfos.getTypeId());
  this.staticInfos.serialize(output);
  if ((((this.ageBonus < -1)) || ((this.ageBonus > 1000)))) {
    throw (new Error((("Forbidden value (" + this.ageBonus) + ") on element ageBonus.")));
  };
  output.writeShort(this.ageBonus);
  if ((((this.lootShare < -1)) || ((this.lootShare > 8)))) {
    throw (new Error((("Forbidden value (" + this.lootShare) + ") on element lootShare.")));
  };
  output.writeByte(this.lootShare);
  output.writeByte(this.alignmentSide);
};

GameRolePlayGroupMonsterInformations.prototype.deserializeAs_GameRolePlayGroupMonsterInformations = function(input) {
  this.deserialize(input);
  var _box0 = input.readByte();
  this.keyRingBonus = BooleanByteWrapper.getFlag(_box0, 0);
  this.hasHardcoreDrop = BooleanByteWrapper.getFlag(_box0, 1);
  this.hasAVARewardToken = BooleanByteWrapper.getFlag(_box0, 2);
  var _id1 = input.readUnsignedShort();
  this.staticInfos = ProtocolTypeManager.getInstance(GroupMonsterStaticInformations, _id1);
  this.staticInfos.deserialize(input);
  this.ageBonus = input.readShort();
  if ((((this.ageBonus < -1)) || ((this.ageBonus > 1000)))) {
    throw (new Error((("Forbidden value (" + this.ageBonus) + ") on element of GameRolePlayGroupMonsterInformations.ageBonus.")));
  };
  this.lootShare = input.readByte();
  if ((((this.lootShare < -1)) || ((this.lootShare > 8)))) {
    throw (new Error((("Forbidden value (" + this.lootShare) + ") on element of GameRolePlayGroupMonsterInformations.lootShare.")));
  };
  this.alignmentSide = input.readByte();
};

GameRolePlayGroupMonsterInformations.prototype.getTypeId = function() {
  return 160;
};

GameRolePlayGroupMonsterInformations.prototype.getClassName = function() {
  return 'GameRolePlayGroupMonsterInformations';
};

module.exports.id = 160;
module.exports.class = GameRolePlayGroupMonsterInformations;