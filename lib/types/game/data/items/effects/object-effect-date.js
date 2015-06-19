var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectDate = function() {
  this.year = 0;
  this.month = 0;
  this.day = 0;
  this.hour = 0;
  this.minute = 0;
};

util.inherits(ObjectEffectDate, BaseMessage);

ObjectEffectDate.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectDate(output);
};

ObjectEffectDate.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectDate(input);
};

ObjectEffectDate.prototype.serializeAs_ObjectEffectDate = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.year < 0) {
    throw (new Error((("Forbidden value (" + this.year) + ") on element year.")));
  };
  output.writeVarShort(this.year);
  if (this.month < 0) {
    throw (new Error((("Forbidden value (" + this.month) + ") on element month.")));
  };
  output.writeByte(this.month);
  if (this.day < 0) {
    throw (new Error((("Forbidden value (" + this.day) + ") on element day.")));
  };
  output.writeByte(this.day);
  if (this.hour < 0) {
    throw (new Error((("Forbidden value (" + this.hour) + ") on element hour.")));
  };
  output.writeByte(this.hour);
  if (this.minute < 0) {
    throw (new Error((("Forbidden value (" + this.minute) + ") on element minute.")));
  };
  output.writeByte(this.minute);
};

ObjectEffectDate.prototype.deserializeAs_ObjectEffectDate = function(input) {
  this.deserialize(input);
  this.year = input.readVarUhShort();
  if (this.year < 0) {
    throw (new Error((("Forbidden value (" + this.year) + ") on element of ObjectEffectDate.year.")));
  };
  this.month = input.readByte();
  if (this.month < 0) {
    throw (new Error((("Forbidden value (" + this.month) + ") on element of ObjectEffectDate.month.")));
  };
  this.day = input.readByte();
  if (this.day < 0) {
    throw (new Error((("Forbidden value (" + this.day) + ") on element of ObjectEffectDate.day.")));
  };
  this.hour = input.readByte();
  if (this.hour < 0) {
    throw (new Error((("Forbidden value (" + this.hour) + ") on element of ObjectEffectDate.hour.")));
  };
  this.minute = input.readByte();
  if (this.minute < 0) {
    throw (new Error((("Forbidden value (" + this.minute) + ") on element of ObjectEffectDate.minute.")));
  };
};

ObjectEffectDate.prototype.getTypeId = function() {
  return 72;
};

ObjectEffectDate.prototype.getClassName = function() {
  return 'ObjectEffectDate';
};

module.exports.id = 72;
module.exports.class = ObjectEffectDate;