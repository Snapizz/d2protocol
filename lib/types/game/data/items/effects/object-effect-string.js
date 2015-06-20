var BaseMessage = require('./object-effect-string.js').class,
  util = require('util');

var ObjectEffectString = function() {
  this.value = "";
};

util.inherits(ObjectEffectString, BaseMessage);

ObjectEffectString.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectString(output);
};

ObjectEffectString.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectString(input);
};

ObjectEffectString.prototype.serializeAs_ObjectEffectString = function(param1) {
  this.serializeAs_ObjectEffect(param1);
  param1.writeUTF(this.value);
};

ObjectEffectString.prototype.deserializeAs_ObjectEffectString = function(param1) {
  this.deserialize(param1);
  this.value = param1.readUTF();
};

ObjectEffectString.prototype.getTypeId = function() {
  return 74;
};

ObjectEffectString.prototype.getClassName = function() {
  return 'ObjectEffectString';
};

module.exports.id = 74;
module.exports.class = ObjectEffectString;
module.exports.getInstance = function() {
  return new ObjectEffectString();
};