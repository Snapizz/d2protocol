var BaseMessage = require('./update-mount-boost.js').class,
  util = require('util');

var UpdateMountIntBoost = function() {
  this.value = 0;
};

util.inherits(UpdateMountIntBoost, BaseMessage);

UpdateMountIntBoost.prototype.serialize = function(output) {
  this.serializeAs_UpdateMountIntBoost(output);
};

UpdateMountIntBoost.prototype.deserialize = function(input) {
  this.deserializeAs_UpdateMountIntBoost(input);
};

UpdateMountIntBoost.prototype.serializeAs_UpdateMountIntBoost = function(output) {
  this.serializeAs_UpdateMountBoost(output);
  output.writeInt(this.value);
};

UpdateMountIntBoost.prototype.deserializeAs_UpdateMountIntBoost = function(input) {
  this.deserialize(input);
  this.value = input.readInt();
};

UpdateMountIntBoost.prototype.getTypeId = function() {
  return 357;
};

UpdateMountIntBoost.prototype.getClassName = function() {
  return 'UpdateMountIntBoost';
};

module.exports.id = 357;
module.exports.class = UpdateMountIntBoost;