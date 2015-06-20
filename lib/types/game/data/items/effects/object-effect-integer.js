var BaseMessage = require('./object-effect-integer.js').class,
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

ObjectEffectInteger.prototype.serializeAs_ObjectEffectInteger = function(param1) {
  this.serializeAs_ObjectEffect(param1);
  if (this.value < 0) {
    throw new Error("Forbidden value (" + this.value + ") on element value.");
  } else {
    param1.writeVarShort(this.value);
    return;
  }
};

ObjectEffectInteger.prototype.deserializeAs_ObjectEffectInteger = function(param1) {
  this.deserialize(param1);
  this.value = param1.readVarUhShort();
  if (this.value < 0) {
    throw new Error("Forbidden value (" + this.value + ") on element of ObjectEffectInteger.value.");
  } else {
    return;
  }
};

ObjectEffectInteger.prototype.getTypeId = function() {
  return 70;
};

ObjectEffectInteger.prototype.getClassName = function() {
  return 'ObjectEffectInteger';
};

module.exports.id = 70;
module.exports.class = ObjectEffectInteger;
module.exports.getInstance = function() {
  return new ObjectEffectInteger();
};