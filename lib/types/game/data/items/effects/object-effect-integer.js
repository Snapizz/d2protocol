var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectInteger = function() {
  this.value = 0;
};

util.inherits(ObjectEffectInteger, BaseMessage);

ObjectEffectInteger.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectInteger(output);
};

ObjectEffectInteger.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectInteger(input);
};

ObjectEffectInteger.prototype.serializeAs_ObjectEffectInteger = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.value < 0) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element value.")));
  };
  output.writeVarShort(this.value);
};

ObjectEffectInteger.prototype.deserializeAs_ObjectEffectInteger = function(input) {
  this.deserialize(input);
  this.value = input.readVarUhShort();
  if (this.value < 0) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element of ObjectEffectInteger.value.")));
  };
};

ObjectEffectInteger.prototype.getTypeId = function() {
  return 70;
};

ObjectEffectInteger.prototype.getClassName = function() {
  return 'ObjectEffectInteger';
};

module.exports.id = 70;
module.exports.class = ObjectEffectInteger;