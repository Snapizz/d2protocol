var BaseMessage = require('./object-effect.js').class,
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

ObjectEffectString.prototype.serializeAs_ObjectEffectString = function(output) {
  this.serializeAs_ObjectEffect(output);
  output.writeUTF(this.value);
};

ObjectEffectString.prototype.deserializeAs_ObjectEffectString = function(input) {
  this.deserialize(input);
  this.value = input.readUTF();
};

ObjectEffectString.prototype.getTypeId = function() {
  return 74;
};

ObjectEffectString.prototype.getClassName = function() {
  return 'ObjectEffectString';
};

module.exports.id = 74;
module.exports.class = ObjectEffectString;