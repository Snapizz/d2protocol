var BaseMessage = require('./object-effect.js').class,
  util = require('util');

var ObjectEffectMount = function() {
  this.mountId = 0;
  this.date = 0;
  this.modelId = 0;
};

util.inherits(ObjectEffectMount, BaseMessage);

ObjectEffectMount.prototype.serialize = function(output) {
  this.serializeAs_ObjectEffectMount(output);
};

ObjectEffectMount.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectEffectMount(input);
};

ObjectEffectMount.prototype.serializeAs_ObjectEffectMount = function(output) {
  this.serializeAs_ObjectEffect(output);
  if (this.mountId < 0) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element mountId.")));
  };
  output.writeInt(this.mountId);
  if ((((this.date < -9007199254740992)) || ((this.date > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element date.")));
  };
  output.writeDouble(this.date);
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarShort(this.modelId);
};

ObjectEffectMount.prototype.deserializeAs_ObjectEffectMount = function(input) {
  this.deserialize(input);
  this.mountId = input.readInt();
  if (this.mountId < 0) {
    throw (new Error((("Forbidden value (" + this.mountId) + ") on element of ObjectEffectMount.mountId.")));
  };
  this.date = input.readDouble();
  if ((((this.date < -9007199254740992)) || ((this.date > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element of ObjectEffectMount.date.")));
  };
  this.modelId = input.readVarUhShort();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of ObjectEffectMount.modelId.")));
  };
};

ObjectEffectMount.prototype.getTypeId = function() {
  return 179;
};

ObjectEffectMount.prototype.getClassName = function() {
  return 'ObjectEffectMount';
};

module.exports.id = 179;
module.exports.class = ObjectEffectMount;