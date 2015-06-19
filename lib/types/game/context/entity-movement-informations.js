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
  output.writeInt(this.id);
  output.writeShort(this.steps.length);
  var _i2;
  while (_i2 < this.steps.length) {
    output.writeByte(this.steps[_i2]);
    _i2++;
  };
};

EntityMovementInformations.prototype.deserializeAs_EntityMovementInformations = function(input) {
  var _val2;
  this.id = input.readInt();
  var _stepsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _stepsLen) {
    _val2 = input.readByte();
    this.steps.push(_val2);
    _i2++;
  };
};

EntityMovementInformations.prototype.getTypeId = function() {
  return 63;
};

EntityMovementInformations.prototype.getClassName = function() {
  return 'EntityMovementInformations';
};

module.exports.id = 63;
module.exports.class = EntityMovementInformations;