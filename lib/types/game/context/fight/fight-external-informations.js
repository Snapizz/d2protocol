var FightExternalInformations = function() {
  this.fightId = 0;
  this.fightType = 0;
  this.fightStart = 0;
  this.fightSpectatorLocked = false;
  this.fightTeams = [];
  this.fightTeamsOptions = [];
};



FightExternalInformations.prototype.serialize = function(output) {
  this.serializeAs_FightExternalInformations(output);
};

FightExternalInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightExternalInformations(input);
};

FightExternalInformations.prototype.serializeAs_FightExternalInformations = function(output) {
  output.writeInt(this.fightId);
  output.writeByte(this.fightType);
  if (this.fightStart < 0) {
    throw (new Error((("Forbidden value (" + this.fightStart) + ") on element fightStart.")));
  };
  output.writeInt(this.fightStart);
  output.writeBoolean(this.fightSpectatorLocked);
  var _i5;
  while (_i5 < 2) {
    this.fightTeams[_i5].serializeAs_FightTeamLightInformations(output);
    _i5++;
  };
  var _i6;
  while (_i6 < 2) {
    this.fightTeamsOptions[_i6].serializeAs_FightOptionsInformations(output);
    _i6++;
  };
};

FightExternalInformations.prototype.deserializeAs_FightExternalInformations = function(input) {
  this.fightId = input.readInt();
  this.fightType = input.readByte();
  if (this.fightType < 0) {
    throw (new Error((("Forbidden value (" + this.fightType) + ") on element of FightExternalInformations.fightType.")));
  };
  this.fightStart = input.readInt();
  if (this.fightStart < 0) {
    throw (new Error((("Forbidden value (" + this.fightStart) + ") on element of FightExternalInformations.fightStart.")));
  };
  this.fightSpectatorLocked = input.readBoolean();
  var _i5;
  while (_i5 < 2) {
    this.fightTeams[_i5] = new FightTeamLightInformations();
    this.fightTeams[_i5].deserialize(input);
    _i5++;
  };
  var _i6;
  while (_i6 < 2) {
    this.fightTeamsOptions[_i6] = new FightOptionsInformations();
    this.fightTeamsOptions[_i6].deserialize(input);
    _i6++;
  };
};

FightExternalInformations.prototype.getTypeId = function() {
  return 117;
};

FightExternalInformations.prototype.getClassName = function() {
  return 'FightExternalInformations';
};

module.exports.id = 117;
module.exports.class = FightExternalInformations;