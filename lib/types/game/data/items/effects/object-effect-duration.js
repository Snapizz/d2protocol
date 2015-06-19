var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectDuration = function() {
  this.days = 0;
  this.hours = 0;
  this.minutes = 0;
};

util.inherits(ObjectEffectDuration, BaseMessage);

ObjectEffectDuration.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectDuration(output);
};

ObjectEffectDuration.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectDuration(input);
};

ObjectEffectDuration.prototype.serializeAs_ObjectEffectDuration = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.days < 0) {
    throw (new Error((("Forbidden value (" + this.days) + ") on element days.")));
  };
  output.writeVarShort(this.days);
  if (this.hours < 0) {
    throw (new Error((("Forbidden value (" + this.hours) + ") on element hours.")));
  };
  output.writeByte(this.hours);
  if (this.minutes < 0) {
    throw (new Error((("Forbidden value (" + this.minutes) + ") on element minutes.")));
  };
  output.writeByte(this.minutes);
};

ObjectEffectDuration.prototype.deserializeAs_ObjectEffectDuration = function(input) {
  this.deserialize(input);
  this.days = input.readVarUhShort();
  if (this.days < 0) {
    throw (new Error((("Forbidden value (" + this.days) + ") on element of ObjectEffectDuration.days.")));
  };
  this.hours = input.readByte();
  if (this.hours < 0) {
    throw (new Error((("Forbidden value (" + this.hours) + ") on element of ObjectEffectDuration.hours.")));
  };
  this.minutes = input.readByte();
  if (this.minutes < 0) {
    throw (new Error((("Forbidden value (" + this.minutes) + ") on element of ObjectEffectDuration.minutes.")));
  };
};

ObjectEffectDuration.prototype.getTypeId = function() {
  return 75;
};

ObjectEffectDuration.prototype.getClassName = function() {
  return 'ObjectEffectDuration';
};

module.exports.id = 75;
module.exports.class = ObjectEffectDuration;