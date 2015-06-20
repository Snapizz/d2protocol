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

GroupMonsterStaticInformations.prototype.serializeAs_GroupMonsterStaticInformations = function(param1) {
  this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(param1);
  param1.writeShort(this.underlings.length);
  var _loc2_ = 0;
  while (_loc2_ < this.underlings.length) {
    (this.underlings[_loc2_]).serializeAs_MonsterInGroupInformations(param1);
    _loc2_++;
  }
};

GroupMonsterStaticInformations.prototype.deserializeAs_GroupMonsterStaticInformations = function(param1) {
  var _loc4_ = null;
  this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
  this.mainCreatureLightInfos.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new MonsterInGroupInformations();
    _loc4_.deserialize(param1);
    this.underlings.push(_loc4_);
    _loc3_++;
  }
};

GroupMonsterStaticInformations.prototype.getTypeId = function() {
  return 140;
};

GroupMonsterStaticInformations.prototype.getClassName = function() {
  return 'GroupMonsterStaticInformations';
};

module.exports.id = 140;
module.exports.class = GroupMonsterStaticInformations;
module.exports.getInstance = function() {
  return new GroupMonsterStaticInformations();
};