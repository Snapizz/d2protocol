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

TaxCollectorFightersInformation.prototype.serializeAs_TaxCollectorFightersInformation = function(param1) {
  param1.writeInt(this.collectorId);
  param1.writeShort(this.allyCharactersInformations.length);
  var _loc2_ = 0;
  while (_loc2_ < this.allyCharactersInformations.length) {
    param1.writeShort((this.allyCharactersInformations[_loc2_]).getTypeId());
    (this.allyCharactersInformations[_loc2_]).serialize(param1);
    _loc2_++;
  }
  param1.writeShort(this.enemyCharactersInformations.length);
  var _loc3_ = 0;
  while (_loc3_ < this.enemyCharactersInformations.length) {
    param1.writeShort((this.enemyCharactersInformations[_loc3_]).getTypeId());
    (this.enemyCharactersInformations[_loc3_]).serialize(param1);
    _loc3_++;
  }
};

TaxCollectorFightersInformation.prototype.deserializeAs_TaxCollectorFightersInformation = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc8_ = 0;
  var _loc9_ = null;
  this.collectorId = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = param1.readUnsignedShort();
    _loc7_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc6_);
    _loc7_.deserialize(param1);
    this.allyCharactersInformations.push(_loc7_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc8_ = param1.readUnsignedShort();
    _loc9_ = ProtocolTypeManager.getInstance(CharacterMinimalPlusLookInformations, _loc8_);
    _loc9_.deserialize(param1);
    this.enemyCharactersInformations.push(_loc9_);
    _loc5_++;
  }
};

TaxCollectorFightersInformation.prototype.getTypeId = function() {
  return 169;
};

TaxCollectorFightersInformation.prototype.getClassName = function() {
  return 'TaxCollectorFightersInformation';
};

module.exports.id = 169;
module.exports.class = TaxCollectorFightersInformation;