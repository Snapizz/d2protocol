var BaseMessage = require('./server-session-constant-long.js').class,
  util = require('util');

var ServerSessionConstantLong = function() {
  this.value = 0;
};

util.inherits(ServerSessionConstantLong, BaseMessage);

ServerSessionConstantLong.prototype.serialize = function(output) {
  this.serializeAs_ServerSessionConstantLong(output);
};

ServerSessionConstantLong.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSessionConstantLong(input);
};

ServerSessionConstantLong.prototype.serializeAs_ServerSessionConstantLong = function(param1) {
  this.serializeAs_ServerSessionConstant(param1);
  if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.value + ") on element value.");
  } else {
    param1.writeDouble(this.value);
    return;
  }
};

ServerSessionConstantLong.prototype.deserializeAs_ServerSessionConstantLong = function(param1) {
  this.deserialize(param1);
  this.value = param1.readDouble();
  if (this.value < -9.007199254740992E15 || this.value > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.value + ") on element of ServerSessionConstantLong.value.");
  } else {
    return;
  }
};

ServerSessionConstantLong.prototype.getTypeId = function() {
  return 429;
};

ServerSessionConstantLong.prototype.getClassName = function() {
  return 'ServerSessionConstantLong';
};

module.exports.id = 429;
module.exports.class = ServerSessionConstantLong;
module.exports.getInstance = function() {
  return new ServerSessionConstantLong();
};