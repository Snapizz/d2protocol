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



GuildMember.prototype.serialize = function(output) {
  this.serializeAs_GuildMember(output);
};

GuildMember.prototype.deserialize = function(input) {
  this.deserializeAs_GuildMember(input);
};

GuildMember.prototype.serializeAs_GuildMember = function(output) {
  super.serializeAs_CharacterMinimalInformations(param1);
  param1.writeByte(this.breed);
  param1.writeBoolean(this.sex);
  if (this.rank < 0) {
    throw new Error("Forbidden value (" + this.rank + ") on element rank.");
  } else {
    param1.writeVarShort(this.rank);
    if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.givenExperience + ") on element givenExperience.");
    } else {
      param1.writeVarLong(this.givenExperience);
      if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
        throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element experienceGivenPercent.");
      } else {
        param1.writeByte(this.experienceGivenPercent);
        if (this.rights < 0) {
          throw new Error("Forbidden value (" + this.rights + ") on element rights.");
        } else {
          param1.writeVarInt(this.rights);
          param1.writeByte(this.connected);
          param1.writeByte(this.alignmentSide);
          if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
            throw new Error("Forbidden value (" + this.hoursSinceLastConnection + ") on element hoursSinceLastConnection.");
          } else {
            param1.writeShort(this.hoursSinceLastConnection);
            param1.writeByte(this.moodSmileyId);
            if (this.accountId < 0) {
              throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
            } else {
              param1.writeInt(this.accountId);
              param1.writeInt(this.achievementPoints);
              param1.writeShort(this.status.getTypeId());
              this.status.serialize(param1);
              return;
            }
          }
        }
      }
    }
  }
};

GuildMember.prototype.deserializeAs_GuildMember = function(input) {
  super.deserialize(param1);
  this.breed = param1.readByte();
  this.sex = param1.readBoolean();
  this.rank = param1.readVarUhShort();
  if (this.rank < 0) {
    throw new Error("Forbidden value (" + this.rank + ") on element of GuildMember.rank.");
  } else {
    this.givenExperience = param1.readVarUhLong();
    if (this.givenExperience < 0 || this.givenExperience > 9.007199254740992E15) {
      throw new Error("Forbidden value (" + this.givenExperience + ") on element of GuildMember.givenExperience.");
    } else {
      this.experienceGivenPercent = param1.readByte();
      if (this.experienceGivenPercent < 0 || this.experienceGivenPercent > 100) {
        throw new Error("Forbidden value (" + this.experienceGivenPercent + ") on element of GuildMember.experienceGivenPercent.");
      } else {
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
          throw new Error("Forbidden value (" + this.rights + ") on element of GuildMember.rights.");
        } else {
          this.connected = param1.readByte();
          if (this.connected < 0) {
            throw new Error("Forbidden value (" + this.connected + ") on element of GuildMember.connected.");
          } else {
            this.alignmentSide = param1.readByte();
            this.hoursSinceLastConnection = param1.readUnsignedShort();
            if (this.hoursSinceLastConnection < 0 || this.hoursSinceLastConnection > 65535) {
              throw new Error("Forbidden value (" + this.hoursSinceLastConnection + ") on element of GuildMember.hoursSinceLastConnection.");
            } else {
              this.moodSmileyId = param1.readByte();
              this.accountId = param1.readInt();
              if (this.accountId < 0) {
                throw new Error("Forbidden value (" + this.accountId + ") on element of GuildMember.accountId.");
              } else {
                this.achievementPoints = param1.readInt();
                var _loc2_ = param1.readUnsignedShort();
                this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
                this.status.deserialize(param1);
                return;
              }
            }
          }
        }
      }
    }
  }
};

GuildMember.prototype.getTypeId = function() {
  return 88;
};

GuildMember.prototype.getClassName = function() {
  return 'GuildMember';
};

module.exports.id = 88;
module.exports.class = GuildMember;