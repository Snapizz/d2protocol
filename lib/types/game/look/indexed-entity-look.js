var IndexedEntityLook = function() {
  this.look;
  this.index = 0;
};



IndexedEntityLook.prototype.serialize = function(output) {
  this.serializeAs_IndexedEntityLook(output);
};

IndexedEntityLook.prototype.deserialize = function(input) {
  this.deserializeAs_IndexedEntityLook(input);
};

IndexedEntityLook.prototype.serializeAs_IndexedEntityLook = function(output) {
  this.look.serializeAs_EntityLook(output);
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element index.")));
  };
  output.writeByte(this.index);
};

IndexedEntityLook.prototype.deserializeAs_IndexedEntityLook = function(input) {
  this.look = new EntityLook();
  this.look.deserialize(input);
  this.index = input.readByte();
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element of IndexedEntityLook.index.")));
  };
};

IndexedEntityLook.prototype.getTypeId = function() {
  return 405;
};

IndexedEntityLook.prototype.getClassName = function() {
  return 'IndexedEntityLook';
};

module.exports.id = 405;
module.exports.class = IndexedEntityLook;