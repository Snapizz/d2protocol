var EntityDispositionInformations = function() {
  this.cellId = 0;
  this.direction = 1;
};



EntityDispositionInformations.prototype.serialize = function(output) {
  this.serializeAs_EntityDispositionInformations(output);
};

EntityDispositionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_EntityDispositionInformations(input);
};

EntityDispositionInformations.prototype.serializeAs_EntityDispositionInformations = function(output) {
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeShort(this.cellId);
    param1.writeByte(this.direction);
    return;
  }
};

EntityDispositionInformations.prototype.deserializeAs_EntityDispositionInformations = function(input) {
  this.cellId = param1.readShort();
  if (this.cellId < -1 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of EntityDispositionInformations.cellId.");
  } else {
    this.direction = param1.readByte();
    if (this.direction < 0) {
      throw new Error("Forbidden value (" + this.direction + ") on element of EntityDispositionInformations.direction.");
    } else {
      return;
    }
  }
};

EntityDispositionInformations.prototype.getTypeId = function() {
  return 60;
};

EntityDispositionInformations.prototype.getClassName = function() {
  return 'EntityDispositionInformations';
};

module.exports.id = 60;
module.exports.class = EntityDispositionInformations;