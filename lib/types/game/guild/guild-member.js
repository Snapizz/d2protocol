var BaseMessage = require('../character/character-minimal-informations.js').class,
  util = require('util');

var GuildMember = function() {
  this.breed = 0;
  this.sex = false;
  this.rank = 0;
  this.givenExperience = 0;
  this.experienceGivenPercent = 0;
  this.rights = 0;
  this.connected = 99;
  this.alignmentSide = 0;
  this.hoursSinceLastConnection = 0;
  this.moodSmileyId = 0;
  this.accountId = 0;
  this.achievementPoints = 0;
  this.status;
};

util.inherits(GuildMember, BaseMessage);

GuildMember.prototype.serialize = function(output) {
  this.serializeAs_GuildMember(output);
};

GuildMember.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMember(input);
};

GuildMember.prototype.serializeAs_GuildMember = function(output) {
  this.serializeAs_CharacterMinimalInformations(output);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  if (this.rank < 0) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element rank.")));
  };
  output.writeVarShort(this.rank);
  if ((((this.givenExperience < 0)) || ((this.givenExperience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.givenExperience) + ") on element givenExperience.")));
  };
  output.writeVarLong(this.givenExperience);
  if ((((this.experienceGivenPercent < 0)) || ((this.experienceGivenPercent > 100)))) {
    throw (new Error((("Forbidden value (" + this.experienceGivenPercent) + ") on element experienceGivenPercent.")));
  };
  output.writeByte(this.experienceGivenPercent);
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element rights.")));
  };
  output.writeVarInt(this.rights);
  output.writeByte(this.connected);
  output.writeByte(this.alignmentSide);
  if ((((this.hoursSinceLastConnection < 0)) || ((this.hoursSinceLastConnection > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.hoursSinceLastConnection) + ") on element hoursSinceLastConnection.")));
  };
  output.writeShort(this.hoursSinceLastConnection);
  output.writeByte(this.moodSmileyId);
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element accountId.")));
  };
  output.writeInt(this.accountId);
  output.writeInt(this.achievementPoints);
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
};

GuildMember.prototype.deserializeAs_GuildMember = function(input) {
  this.deserialize(input);
  this.breed = input.readByte();
  this.sex = input.readBoolean();
  this.rank = input.readVarUhShort();
  if (this.rank < 0) {
    throw (new Error((("Forbidden value (" + this.rank) + ") on element of GuildMember.rank.")));
  };
  this.givenExperience = input.readVarUhLong();
  if ((((this.givenExperience < 0)) || ((this.givenExperience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.givenExperience) + ") on element of GuildMember.givenExperience.")));
  };
  this.experienceGivenPercent = input.readByte();
  if ((((this.experienceGivenPercent < 0)) || ((this.experienceGivenPercent > 100)))) {
    throw (new Error((("Forbidden value (" + this.experienceGivenPercent) + ") on element of GuildMember.experienceGivenPercent.")));
  };
  this.rights = input.readVarUhInt();
  if (this.rights < 0) {
    throw (new Error((("Forbidden value (" + this.rights) + ") on element of GuildMember.rights.")));
  };
  this.connected = input.readByte();
  if (this.connected < 0) {
    throw (new Error((("Forbidden value (" + this.connected) + ") on element of GuildMember.connected.")));
  };
  this.alignmentSide = input.readByte();
  this.hoursSinceLastConnection = input.readUnsignedShort();
  if ((((this.hoursSinceLastConnection < 0)) || ((this.hoursSinceLastConnection > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.hoursSinceLastConnection) + ") on element of GuildMember.hoursSinceLastConnection.")));
  };
  this.moodSmileyId = input.readByte();
  this.accountId = input.readInt();
  if (this.accountId < 0) {
    throw (new Error((("Forbidden value (" + this.accountId) + ") on element of GuildMember.accountId.")));
  };
  this.achievementPoints = input.readInt();
  var _id13 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id13);
  this.status.deserialize(input);
};

GuildMember.prototype.getTypeId = function() {
  return 88;
};

GuildMember.prototype.getClassName = function() {
  return 'GuildMember';
};

module.exports.id = 88;
module.exports.class = GuildMember;