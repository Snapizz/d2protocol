var StatedElement = function() {
  this.elementId = 0;
  this.elementCellId = 0;
  this.elementState = 0;
};



StatedElement.prototype.serialize = function(output) {
  this.serializeAs_StatedElement(output);
};

StatedElement.prototype.deserialize = function(input) {
  this.deserializeAs_StatedElement(input);
};

StatedElement.prototype.serializeAs_StatedElement = function(output) {
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element elementId.")));
  };
  output.writeInt(this.elementId);
  if ((((this.elementCellId < 0)) || ((this.elementCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.elementCellId) + ") on element elementCellId.")));
  };
  output.writeVarShort(this.elementCellId);
  if (this.elementState < 0) {
    throw (new Error((("Forbidden value (" + this.elementState) + ") on element elementState.")));
  };
  output.writeVarInt(this.elementState);
};

StatedElement.prototype.deserializeAs_StatedElement = function(input) {
  this.elementId = input.readInt();
  if (this.elementId < 0) {
    throw (new Error((("Forbidden value (" + this.elementId) + ") on element of StatedElement.elementId.")));
  };
  this.elementCellId = input.readVarUhShort();
  if ((((this.elementCellId < 0)) || ((this.elementCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.elementCellId) + ") on element of StatedElement.elementCellId.")));
  };
  this.elementState = input.readVarUhInt();
  if (this.elementState < 0) {
    throw (new Error((("Forbidden value (" + this.elementState) + ") on element of StatedElement.elementState.")));
  };
};

StatedElement.prototype.getTypeId = function() {
  return 108;
};

StatedElement.prototype.getClassName = function() {
  return 'StatedElement';
};

module.exports.id = 108;
module.exports.class = StatedElement;