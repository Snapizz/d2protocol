var BaseMessage = require('./server-session-constant.js').class,
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

ServerSessionConstantLong.prototype.serializeAs_ServerSessionConstantLong = function(output) {
  this.serializeAs_ServerSessionConstant(output);
  if ((((this.value < -9007199254740992)) || ((this.value > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element value.")));
  };
  output.writeDouble(this.value);
};

ServerSessionConstantLong.prototype.deserializeAs_ServerSessionConstantLong = function(input) {
  this.deserialize(input);
  this.value = input.readDouble();
  if ((((this.value < -9007199254740992)) || ((this.value > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element of ServerSessionConstantLong.value.")));
  };
};

ServerSessionConstantLong.prototype.getTypeId = function() {
  return 429;
};

ServerSessionConstantLong.prototype.getClassName = function() {
  return 'ServerSessionConstantLong';
};

module.exports.id = 429;
module.exports.class = ServerSessionConstantLong;