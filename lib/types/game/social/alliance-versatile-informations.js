var AllianceVersatileInformations = function() {
  this.allianceId = 0;
  this.nbGuilds = 0;
  this.nbMembers = 0;
  this.nbSubarea = 0;
};



AllianceVersatileInformations.prototype.serialize = function(output) {
  this.serializeAs_AllianceVersatileInformations(output);
};

AllianceVersatileInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceVersatileInformations(input);
};

AllianceVersatileInformations.prototype.serializeAs_AllianceVersatileInformations = function(output) {
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element allianceId.")));
  };
  output.writeVarInt(this.allianceId);
  if (this.nbGuilds < 0) {
    throw (new Error((("Forbidden value (" + this.nbGuilds) + ") on element nbGuilds.")));
  };
  output.writeVarShort(this.nbGuilds);
  if (this.nbMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element nbMembers.")));
  };
  output.writeVarShort(this.nbMembers);
  if (this.nbSubarea < 0) {
    throw (new Error((("Forbidden value (" + this.nbSubarea) + ") on element nbSubarea.")));
  };
  output.writeVarShort(this.nbSubarea);
};

AllianceVersatileInformations.prototype.deserializeAs_AllianceVersatileInformations = function(input) {
  this.allianceId = input.readVarUhInt();
  if (this.allianceId < 0) {
    throw (new Error((("Forbidden value (" + this.allianceId) + ") on element of AllianceVersatileInformations.allianceId.")));
  };
  this.nbGuilds = input.readVarUhShort();
  if (this.nbGuilds < 0) {
    throw (new Error((("Forbidden value (" + this.nbGuilds) + ") on element of AllianceVersatileInformations.nbGuilds.")));
  };
  this.nbMembers = input.readVarUhShort();
  if (this.nbMembers < 0) {
    throw (new Error((("Forbidden value (" + this.nbMembers) + ") on element of AllianceVersatileInformations.nbMembers.")));
  };
  this.nbSubarea = input.readVarUhShort();
  if (this.nbSubarea < 0) {
    throw (new Error((("Forbidden value (" + this.nbSubarea) + ") on element of AllianceVersatileInformations.nbSubarea.")));
  };
};

AllianceVersatileInformations.prototype.getTypeId = function() {
  return 432;
};

AllianceVersatileInformations.prototype.getClassName = function() {
  return 'AllianceVersatileInformations';
};

module.exports.id = 432;
module.exports.class = AllianceVersatileInformations;