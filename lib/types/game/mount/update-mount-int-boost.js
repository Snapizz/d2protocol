var UpdateMountIntBoost = function() {
  this.value = 0;
};



UpdateMountIntBoost.prototype.serialize = function(output) {
  this.serializeAs_UpdateMountIntBoost(output);
};

UpdateMountIntBoost.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMountIntBoost(input);
};

UpdateMountIntBoost.prototype.serializeAs_UpdateMountIntBoost = function(param1) {
  this.serializeAs_UpdateMountBoost(param1);
  param1.writeInt(this.value);
};

UpdateMountIntBoost.prototype.deserializeAs_UpdateMountIntBoost = function(param1) {
  super.deserialize(param1);
  this.value = param1.readInt();
};

UpdateMountIntBoost.prototype.getTypeId = function() {
  return 357;
};

UpdateMountIntBoost.prototype.getClassName = function() {
  return 'UpdateMountIntBoost';
};

module.exports.id = 357;
module.exports.class = UpdateMountIntBoost;
module.exports.getInstance = function() {
  return new UpdateMountIntBoost();
};