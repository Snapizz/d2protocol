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

GuildVersatileInformations.prototype.serializeAs_GuildVersatileInformations = function(output) {
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element guildId.")));
  };
  output.writeVarInt(this.guildId);
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element leaderId.")));
  };
  output.writeVarInt(this.leaderId);
  if ((((this.guildLevel < 1)) || ((this.guildLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element guildLevel.")));
  };
  output.writeByte(this.guildLevel);
  if ((((this.nbMembers < 1)) || ((this.nbMembers > 240)))) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element nbMembers.")));
  };
  output.writeByte(this.nbMembers);
};

GuildVersatileInformations.prototype.deserializeAs_GuildVersatileInformations = function(input) {
  this.guildId = input.readVarUhInt();
  if (this.guildId < 0) {
    throw (new Error((("Forbidden value (" + this.guildId) + ") on element of GuildVersatileInformations.guildId.")));
  };
  this.leaderId = input.readVarUhInt();
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element of GuildVersatileInformations.leaderId.")));
  };
  this.guildLevel = input.readUnsignedByte();
  if ((((this.guildLevel < 1)) || ((this.guildLevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.guildLevel) + ") on element of GuildVersatileInformations.guildLevel.")));
  };
  this.nbMembers = input.readUnsignedByte();
  if ((((this.nbMembers < 1)) || ((this.nbMembers > 240)))) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element of GuildVersatileInformations.nbMembers.")));
  };
};

GuildVersatileInformations.prototype.getTypeId = function() {
  return 435;
};

GuildVersatileInformations.prototype.getClassName = function() {
  return 'GuildVersatileInformations';
};

module.exports.id = 435;
module.exports.class = GuildVersatileInformations;