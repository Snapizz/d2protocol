var GroupMonsterStaticInformationsWithAlternatives = function() {
  this.alternatives = [];
};



GroupMonsterStaticInformationsWithAlternatives.prototype.serialize = function(output) {
  this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(output);
};

GroupMonsterStaticInformationsWithAlternatives.prototype.deserialize = function(input) {
  this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(input);
};

GroupMonsterStaticInformationsWithAlternatives.prototype.serializeAs_GroupMonsterStaticInformationsWithAlternatives = function(param1) {
  this.serializeAs_GroupMonsterStaticInformations(param1);
  param1.writeShort(this.alternatives.length);
  var _loc2_ = 0;
  while (_loc2_ < this.alternatives.length) {
    (this.alternatives[_loc2_]).serializeAs_AlternativeMonstersInGroupLightInformations(param1);
    _loc2_++;
  }
};

GroupMonsterStaticInformationsWithAlternatives.prototype.deserializeAs_GroupMonsterStaticInformationsWithAlternatives = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new AlternativeMonstersInGroupLightInformations();
    _loc4_.deserialize(param1);
    this.alternatives.push(_loc4_);
    _loc3_++;
  }
};

GroupMonsterStaticInformationsWithAlternatives.prototype.getTypeId = function() {
  return 396;
};

GroupMonsterStaticInformationsWithAlternatives.prototype.getClassName = function() {
  return 'GroupMonsterStaticInformationsWithAlternatives';
};

module.exports.id = 396;
module.exports.class = GroupMonsterStaticInformationsWithAlternatives;