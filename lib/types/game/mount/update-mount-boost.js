var UpdateMountBoost = function() {
  this.type = 0;
};



UpdateMountBoost.prototype.serialize = function(output) {
  this.serializeAs_UpdateMountBoost(output);
};

UpdateMountBoost.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMountBoost(input);
};

UpdateMountBoost.prototype.serializeAs_UpdateMountBoost = function(output) {
  output.writeByte(this.type);
};

UpdateMountBoost.prototype.deserializeAs_UpdateMountBoost = function(input) {
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of UpdateMountBoost.type.")));
  };
};

UpdateMountBoost.prototype.getTypeId = function() {
  return 356;
};

UpdateMountBoost.prototype.getClassName = function() {
  return 'UpdateMountBoost';
};

module.exports.id = 356;
module.exports.class = UpdateMountBoost;