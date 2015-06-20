var AlternativeMonstersInGroupLightInformations = function() {
  this.playerCount = 0;
  this.monsters = [];
};



AlternativeMonstersInGroupLightInformations.prototype.serialize = function(output) {
  this.serializeAs_AlternativeMonstersInGroupLightInformations(output);
};

AlternativeMonstersInGroupLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AlternativeMonstersInGroupLightInformations(input);
};

AlternativeMonstersInGroupLightInformations.prototype.serializeAs_AlternativeMonstersInGroupLightInformations = function(output) {
  output.writeInt(this.playerCount);
  output.writeShort(this.monsters.length);
  var _i2 = 0;
  while (_i2 < this.monsters.length) {
    (this.monsters[_i2]).serializeAs_MonsterInGroupLightInformations(output);
    _i2++;
  };
};

AlternativeMonstersInGroupLightInformations.prototype.deserializeAs_AlternativeMonstersInGroupLightInformations = function(input) {
  var _item2;
  this.playerCount = input.readInt();
  var _monstersLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _monstersLen) {
    _item2 = new MonsterInGroupLightInformations();
    _item2.deserialize(input);
    this.monsters.push(_item2);
    _i2++;
  };
};

AlternativeMonstersInGroupLightInformations.prototype.getTypeId = function() {
  return 394;
};

AlternativeMonstersInGroupLightInformations.prototype.getClassName = function() {
  return 'AlternativeMonstersInGroupLightInformations';
};

module.exports.id = 394;
module.exports.class = AlternativeMonstersInGroupLightInformations;