var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectMinMax = function() {
  this.min = 0;
  this.max = 0;
};

util.inherits(ObjectEffectMinMax, BaseMessage);

ObjectEffectMinMax.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectMinMax(output);
};

ObjectEffectMinMax.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectMinMax(input);
};

ObjectEffectMinMax.prototype.serializeAs_ObjectEffectMinMax = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.min < 0) {
    throw (new Error((("Forbidden value (" + this.min) + ") on element min.")));
  };
  output.writeVarInt(this.min);
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element max.")));
  };
  output.writeVarInt(this.max);
};

ObjectEffectMinMax.prototype.deserializeAs_ObjectEffectMinMax = function(input) {
  this.deserialize(input);
  this.min = input.readVarUhInt();
  if (this.min < 0) {
    throw (new Error((("Forbidden value (" + this.min) + ") on element of ObjectEffectMinMax.min.")));
  };
  this.max = input.readVarUhInt();
  if (this.max < 0) {
    throw (new Error((("Forbidden value (" + this.max) + ") on element of ObjectEffectMinMax.max.")));
  };
};

ObjectEffectMinMax.prototype.getTypeId = function() {
  return 82;
};

ObjectEffectMinMax.prototype.getClassName = function() {
  return 'ObjectEffectMinMax';
};

module.exports.id = 82;
module.exports.class = ObjectEffectMinMax;