var GuildVersatileInformations = function() {
  this.guildId = 0;
  this.leaderId = 0;
  this.guildLevel = 0;
  this.nbMembers = 0;
};



GuildVersatileInformations.prototype.serialize = function(output) {
  this.serializeAs_GuildVersatileInformations(output);
};

GuildVersatileInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GuildVersatileInformations(input);
};

GuildVersatileInformations.prototype.serializeAs_GuildVersatileInformations = function(param1) {
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
  } else {
    param1.writeVarInt(this.guildId);
    if (this.leaderId < 0) {
      throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
    } else {
      param1.writeVarInt(this.leaderId);
      if (this.guildLevel < 1 || this.guildLevel > 200) {
        throw new Error("Forbidden value (" + this.guildLevel + ") on element guildLevel.");
      } else {
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 1 || this.nbMembers > 240) {
          throw new Error("Forbidden value (" + this.nbMembers + ") on element nbMembers.");
        } else {
          param1.writeByte(this.nbMembers);
          return;
        }
      }
    }
  }
};

GuildVersatileInformations.prototype.deserializeAs_GuildVersatileInformations = function(param1) {
  this.guildId = param1.readVarUhInt();
  if (this.guildId < 0) {
    throw new Error("Forbidden value (" + this.guildId + ") on element of GuildVersatileInformations.guildId.");
  } else {
    this.leaderId = param1.readVarUhInt();
    if (this.leaderId < 0) {
      throw new Error("Forbidden value (" + this.leaderId + ") on element of GuildVersatileInformations.leaderId.");
    } else {
      this.guildLevel = param1.readUnsignedByte();
      if (this.guildLevel < 1 || this.guildLevel > 200) {
        throw new Error("Forbidden value (" + this.guildLevel + ") on element of GuildVersatileInformations.guildLevel.");
      } else {
        this.nbMembers = param1.readUnsignedByte();
        if (this.nbMembers < 1 || this.nbMembers > 240) {
          throw new Error("Forbidden value (" + this.nbMembers + ") on element of GuildVersatileInformations.nbMembers.");
        } else {
          return;
        }
      }
    }
  }
};

GuildVersatileInformations.prototype.getTypeId = function() {
  return 435;
};

GuildVersatileInformations.prototype.getClassName = function() {
  return 'GuildVersatileInformations';
};

module.exports.id = 435;
module.exports.class = GuildVersatileInformations;