var NamedPartyTeam = function() {
  this.teamId = 2;
  this.partyName = "";
};



NamedPartyTeam.prototype.serialize = function(output) {
  this.serializeAs_NamedPartyTeam(output);
};

NamedPartyTeam.prototype.deserialize = function(input) {
  this.deserializeAs_NamedPartyTeam(input);
};

NamedPartyTeam.prototype.serializeAs_NamedPartyTeam = function(output) {
  output.writeByte(this.teamId);
  output.writeUTF(this.partyName);
};

NamedPartyTeam.prototype.deserializeAs_NamedPartyTeam = function(input) {
  this.teamId = input.readByte();
  if (this.teamId < 0) {
    throw (new Error((("Forbidden value (" + this.teamId) + ") on element of NamedPartyTeam.teamId.")));
  };
  this.partyName = input.readUTF();
};

NamedPartyTeam.prototype.getTypeId = function() {
  return 469;
};

NamedPartyTeam.prototype.getClassName = function() {
  return 'NamedPartyTeam';
};

module.exports.id = 469;
module.exports.class = NamedPartyTeam;