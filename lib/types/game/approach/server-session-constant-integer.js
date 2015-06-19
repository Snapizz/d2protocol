var BaseMessage = require('./server-session-constant.js').class,
  util = require('util');

var ServerSessionConstantInteger = function() {
  this.value = 0;
};

util.inherits(ServerSessionConstantInteger, BaseMessage);

ServerSessionConstantInteger.prototype.serialize = function(output) {
  this.serializeAs_ServerSessionConstantInteger(output);
};

ServerSessionConstantInteger.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSessionConstantInteger(input);
};

ServerSessionConstantInteger.prototype.serializeAs_ServerSessionConstantInteger = function(output) {
  this.serializeAs_ServerSessionConstant(output);
  output.writeInt(this.value);
};

ServerSessionConstantInteger.prototype.deserializeAs_ServerSessionConstantInteger = function(input) {
  this.deserialize(input);
  this.value = input.readInt();
};

ServerSessionConstantInteger.prototype.getTypeId = function() {
  return 433;
};

ServerSessionConstantInteger.prototype.getClassName = function() {
  return 'ServerSessionConstantInteger';
};

module.exports.id = 433;
module.exports.class = ServerSessionConstantInteger;