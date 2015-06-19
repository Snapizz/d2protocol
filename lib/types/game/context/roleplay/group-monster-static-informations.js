var GroupMonsterStaticInformations = function() {
  this.mainCreatureLightInfos;
  this.underlings = [];
};



GroupMonsterStaticInformations.prototype.serialize = function(output) {
  this.serializeAs_GroupMonsterStaticInformations(output);
};

GroupMonsterStaticInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GroupMonsterStaticInformations(input);
};

GroupMonsterStaticInformations.prototype.serializeAs_GroupMonsterStaticInformations = function(output) {
  this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(output);
  output.writeShort(this.underlings.length);
  var _i2;
  while (_i2 < this.underlings.length) {
    (this.underlings[_i2]).serializeAs_MonsterInGroupInformations(output);
    _i2++;
  };
};

GroupMonsterStaticInformations.prototype.deserializeAs_GroupMonsterStaticInformations = function(input) {
  var _item2;
  this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
  this.mainCreatureLightInfos.deserialize(input);
  var _underlingsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _underlingsLen) {
    _item2 = new MonsterInGroupInformations();
    _item2.deserialize(input);
    this.underlings.push(_item2);
    _i2++;
  };
};

GroupMonsterStaticInformations.prototype.getTypeId = function() {
  return 140;
};

GroupMonsterStaticInformations.prototype.getClassName = function() {
  return 'GroupMonsterStaticInformations';
};

module.exports.id = 140;
module.exports.class = GroupMonsterStaticInformations;