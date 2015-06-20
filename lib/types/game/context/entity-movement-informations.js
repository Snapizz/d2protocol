var EntityMovementInformations = function() {
  this.id = 0;
  this.steps = [];
};



EntityMovementInformations.prototype.serialize = function(output) {
  this.serializeAs_EntityMovementInformations(output);
};

EntityMovementInformations.prototype.deserialize = function(input) {
  this.deserializeAs_EntityMovementInformations(input);
};

EntityMovementInformations.prototype.serializeAs_EntityMovementInformations = function(output) {
  param1.writeInt(this.id);
  param1.writeShort(this.steps.length);
  var _loc2_ = 0;
  while (_loc2_ < this.steps.length) {
    param1.writeByte(this.steps[_loc2_]);
    _loc2_++;
  }
};

EntityMovementInformations.prototype.deserializeAs_EntityMovementInformations = function(input) {
  var _loc4_ = 0;
  this.id = param1.readInt();
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readByte();
    this.steps.push(_loc4_);
    _loc3_++;
  }
};

EntityMovementInformations.prototype.getTypeId = function() {
  return 63;
};

EntityMovementInformations.prototype.getClassName = function() {
  return 'EntityMovementInformations';
};

module.exports.id = 63;
module.exports.class = EntityMovementInformations;