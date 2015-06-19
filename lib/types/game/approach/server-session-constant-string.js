var BaseMessage = require('./server-session-constant.js').class,
  util = require('util');

var ServerSessionConstantString = function() {
  this.value = "";
};

util.inherits(ServerSessionConstantString, BaseMessage);

ServerSessionConstantString.prototype.serialize = function(output) {
  this.serializeAs_ServerSessionConstantString(output);
};

ServerSessionConstantString.prototype.deserialize = function(input) {
  this.deserializeAs_ServerSessionConstantString(input);
};

ServerSessionConstantString.prototype.serializeAs_ServerSessionConstantString = function(output) {
  this.serializeAs_ServerSessionConstant(output);
  output.writeUTF(this.value);
};

ServerSessionConstantString.prototype.deserializeAs_ServerSessionConstantString = function(input) {
  this.deserialize(input);
  this.value = input.readUTF();
};

ServerSessionConstantString.prototype.getTypeId = function() {
  return 436;
};

ServerSessionConstantString.prototype.getClassName = function() {
  return 'ServerSessionConstantString';
};

module.exports.id = 436;
module.exports.class = ServerSessionConstantString;