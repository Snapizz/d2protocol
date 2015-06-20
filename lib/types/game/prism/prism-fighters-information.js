var PrismFightersInformation = function() {
  this.subAreaId = 0;
  this.waitingForHelpInfo;
  this.allyCharactersInformations = [];
  this.enemyCharactersInformations = [];
};



PrismFightersInformation.prototype.serialize = function(output) {
  this.serializeAs_PrismFightersInformation(output);
};

PrismFightersInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PrismFightersInformation(input);
};

PrismFightersInformation.prototype.serializeAs_PrismFightersInformation = function(output) {
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(output);
  output.writeShort(this.allyCharactersInformations.length);
  var _i3 = 0;
  while (_i3 < this.allyCharactersInformations.length) {
    output.writeShort((this.allyCharactersInformations[_i3]).getTypeId());
    (this.allyCharactersInformations[_i3]).serialize(output);
    _i3++;
  };
  output.writeShort(this.enemyCharactersInformations.length);
  var _i4 = 0;
  while (_i4 < this.enemyCharactersInformations.length) {
    output.writeShort((this.enemyCharactersInformations[_i4]).getTypeId());
    (this.enemyCharactersInformations[_i4]).serialize(output);
    _i4++;
  };
};

PrismFightersInformation.prototype.deserializeAs_PrismFightersInformation = function(input) {
  var _id3 = 0;
  var _item3;
  var _id4 = 0;
  var _item4;
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PrismFightersInformation.subAreaId.")));
  };
  this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
  this.waitingForHelpInfo.deserialize(input);
  var _allyCharactersInformationsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _allyCharactersInformationsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id3);
    _item3.deserialize(input);
    this.allyCharactersInformations.push(_item3);
    _i3++;
  };
  var _enemyCharactersInformationsLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _enemyCharactersInformationsLen) {
    _id4 = input.readUnsignedShort();
    _item4 = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id4);
    _item4.deserialize(input);
    this.enemyCharactersInformations.push(_item4);
    _i4++;
  };
};

PrismFightersInformation.prototype.getTypeId = function() {
  return 443;
};

PrismFightersInformation.prototype.getClassName = function() {
  return 'PrismFightersInformation';
};

module.exports.id = 443;
module.exports.class = PrismFightersInformation;