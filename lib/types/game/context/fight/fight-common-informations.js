var FightCommonInformations = function() {
  this.fightId = 0;
  this.fightType = 0;
  this.fightTeams = [];
  this.fightTeamsPositions = [];
  this.fightTeamsOptions = [];
};



FightCommonInformations.prototype.serialize = function(output) {
  this.serializeAs_FightCommonInformations(output);
};

FightCommonInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightCommonInformations(input);
};

FightCommonInformations.prototype.serializeAs_FightCommonInformations = function(output) {
  output.writeInt(this.fightId);
  output.writeByte(this.fightType);
  output.writeShort(this.fightTeams.length);
  var _i3;
  while (_i3 < this.fightTeams.length) {
    output.writeShort((this.fightTeams[_i3]).getTypeId());
    (this.fightTeams[_i3]).serialize(output);
    _i3++;
  };
  output.writeShort(this.fightTeamsPositions.length);
  var _i4;
  while (_i4 < this.fightTeamsPositions.length) {
    if ((((this.fightTeamsPositions[_i4] < 0)) || ((this.fightTeamsPositions[_i4] > 559)))) {
      throw (new Error((("Forbidden value (" + this.fightTeamsPositions[_i4]) + ") on element 4 (starting at 1) of fightTeamsPositions.")));
    };
    output.writeVarShort(this.fightTeamsPositions[_i4]);
    _i4++;
  };
  output.writeShort(this.fightTeamsOptions.length);
  var _i5;
  while (_i5 < this.fightTeamsOptions.length) {
    (this.fightTeamsOptions[_i5]).serializeAs_FightOptionsInformations(output);
    _i5++;
  };
};

FightCommonInformations.prototype.deserializeAs_FightCommonInformations = function(input) {
  var _id3;
  var _item3;
  var _val4;
  var _item5;
  this.fightId = input.readInt();
  this.fightType = input.readByte();
  if (this.fightType < 0) {
    throw (new Error((("Forbidden value (" + this.fightType) + ") on element of FightCommonInformations.fightType.")));
  };
  var _fightTeamsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _fightTeamsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(FightTeamInformations, _id3);
    _item3.deserialize(input);
    this.fightTeams.push(_item3);
    _i3++;
  };
  var _fightTeamsPositionsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _fightTeamsPositionsLen) {
    _val4 = input.readVarUhShort();
    if ((((_val4 < 0)) || ((_val4 > 559)))) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of fightTeamsPositions.")));
    };
    this.fightTeamsPositions.push(_val4);
    _i4++;
  };
  var _fightTeamsOptionsLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _fightTeamsOptionsLen) {
    _item5 = new FightOptionsInformations();
    _item5.deserialize(input);
    this.fightTeamsOptions.push(_item5);
    _i5++;
  };
};

FightCommonInformations.prototype.getTypeId = function() {
  return 43;
};

FightCommonInformations.prototype.getClassName = function() {
  return 'FightCommonInformations';
};

module.exports.id = 43;
module.exports.class = FightCommonInformations;