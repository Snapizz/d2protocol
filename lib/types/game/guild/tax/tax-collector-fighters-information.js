var TaxCollectorFightersInformation = function() {
  this.collectorId = 0;
  this.allyCharactersInformations = [];
  this.enemyCharactersInformations = [];
};



TaxCollectorFightersInformation.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorFightersInformation(output);
};

TaxCollectorFightersInformation.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorFightersInformation(input);
};

TaxCollectorFightersInformation.prototype.serializeAs_TaxCollectorFightersInformation = function(output) {
  output.writeInt(this.collectorId);
  output.writeShort(this.allyCharactersInformations.length);
  var _i2;
  while (_i2 < this.allyCharactersInformations.length) {
    output.writeShort((this.allyCharactersInformations[_i2]).getTypeId());
    (this.allyCharactersInformations[_i2]).serialize(output);
    _i2++;
  };
  output.writeShort(this.enemyCharactersInformations.length);
  var _i3;
  while (_i3 < this.enemyCharactersInformations.length) {
    output.writeShort((this.enemyCharactersInformations[_i3]).getTypeId());
    (this.enemyCharactersInformations[_i3]).serialize(output);
    _i3++;
  };
};

TaxCollectorFightersInformation.prototype.deserializeAs_TaxCollectorFightersInformation = function(input) {
  var _id2;
  var _item2;
  var _id3;
  var _item3;
  this.collectorId = input.readInt();
  var _allyCharactersInformationsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _allyCharactersInformationsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id2);
    _item2.deserialize(input);
    this.allyCharactersInformations.push(_item2);
    _i2++;
  };
  var _enemyCharactersInformationsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _enemyCharactersInformationsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _id3);
    _item3.deserialize(input);
    this.enemyCharactersInformations.push(_item3);
    _i3++;
  };
};

TaxCollectorFightersInformation.prototype.getTypeId = function() {
  return 169;
};

TaxCollectorFightersInformation.prototype.getClassName = function() {
  return 'TaxCollectorFightersInformation';
};

module.exports.id = 169;
module.exports.class = TaxCollectorFightersInformation;