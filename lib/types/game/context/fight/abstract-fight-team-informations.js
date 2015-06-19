var AbstractFightTeamInformations = function() {
  this.teamId = 2;
  this.leaderId = 0;
  this.teamSide = 0;
  this.teamTypeId = 0;
  this.nbWaves = 0;
};



AbstractFightTeamInformations.prototype.serialize = function(output) {
  this.serializeAs_AbstractFightTeamInformations(output);
};

AbstractFightTeamInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractFightTeamInformations(input);
};

AbstractFightTeamInformations.prototype.serializeAs_AbstractFightTeamInformations = function(output) {
  output.writeByte(this.teamId);
  output.writeInt(this.leaderId);
  output.writeByte(this.teamSide);
  output.writeByte(this.teamTypeId);
  if (this.nbWaves < 0) {
    throw (new Error((("Forbidden value (" + this.nbWaves) + ") on element nbWaves.")));
  };
  output.writeByte(this.nbWaves);
};

AbstractFightTeamInformations.prototype.deserializeAs_AbstractFightTeamInformations = function(input) {
  this.teamId = input.readByte();
  if (this.teamId < 0) {
    throw (new Error((("Forbidden value (" + this.teamId) + ") on element of AbstractFightTeamInformations.teamId.")));
  };
  this.leaderId = input.readInt();
  this.teamSide = input.readByte();
  this.teamTypeId = input.readByte();
  if (this.teamTypeId < 0) {
    throw (new Error((("Forbidden value (" + this.teamTypeId) + ") on element of AbstractFightTeamInformations.teamTypeId.")));
  };
  this.nbWaves = input.readByte();
  if (this.nbWaves < 0) {
    throw (new Error((("Forbidden value (" + this.nbWaves) + ") on element of AbstractFightTeamInformations.nbWaves.")));
  };
};

AbstractFightTeamInformations.prototype.getTypeId = function() {
  return 116;
};

AbstractFightTeamInformations.prototype.getClassName = function() {
  return 'AbstractFightTeamInformations';
};

module.exports.id = 116;
module.exports.class = AbstractFightTeamInformations;