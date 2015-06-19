var Shortcut = function() {
  this.slot = 0;
};



Shortcut.prototype.serialize = function(output) {
  this.serializeAs_Shortcut(output);
};

Shortcut.prototype.deserialize = function(input) {
  this.deserializeAs_Shortcut(input);
};

Shortcut.prototype.serializeAs_Shortcut = function(output) {
  if ((((this.slot < 0)) || ((this.slot > 99)))) {
    throw (new Error((("Forbidden value (" + this.slot) + ") on element slot.")));
  };
  output.writeByte(this.slot);
};

Shortcut.prototype.deserializeAs_Shortcut = function(input) {
  this.slot = input.readByte();
  if ((((this.slot < 0)) || ((this.slot > 99)))) {
    throw (new Error((("Forbidden value (" + this.slot) + ") on element of Shortcut.slot.")));
  };
};

Shortcut.prototype.getTypeId = function() {
  return 369;
};

Shortcut.prototype.getClassName = function() {
  return 'Shortcut';
};

module.exports.id = 369;
module.exports.class = Shortcut;