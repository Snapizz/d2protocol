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

AlternativeMonstersInGroupLightInformations.prototype.serializeAs_AlternativeMonstersInGroupLightInformations = function(param1) {
  param1.writeInt(this.playerCount);
  param1.writeShort(this.monsters.length);
  var _loc2_ = 0;
  while (_loc2_ < this.monsters.length) {
    (this.monsters[_loc2_]).serializeAs_MonsterInGroupLightInformations(param1);
    _loc2_++;
  }
};

AlternativeMonstersInGroupLightInformations.prototype.deserializeAs_AlternativeMonstersInGroupLightInformations = function(param1) {
  var _loc4_ = null;
  this.playerCount = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new MonsterInGroupLightInformations();
    _loc4_.deserialize(param1);
    this.monsters.push(_loc4_);
    _loc3_++;
  }
};

AlternativeMonstersInGroupLightInformations.prototype.getTypeId = function() {
  return 394;
};

AlternativeMonstersInGroupLightInformations.prototype.getClassName = function() {
  return 'AlternativeMonstersInGroupLightInformations';
};

module.exports.id = 394;
module.exports.class = AlternativeMonstersInGroupLightInformations;