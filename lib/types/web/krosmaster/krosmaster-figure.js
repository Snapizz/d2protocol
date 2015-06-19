var KrosmasterFigure = function() {
  this.uid = "";
  this.figure = 0;
  this.pedestal = 0;
  this.bound = false;
};



KrosmasterFigure.prototype.serialize = function(output) {
  this.serializeAs_KrosmasterFigure(output);
};

KrosmasterFigure.prototype.deserialize = function(input) {
  this.deserializeAs_KrosmasterFigure(input);
};

KrosmasterFigure.prototype.serializeAs_KrosmasterFigure = function(output) {
  output.writeUTF(this.uid);
  if (this.figure < 0) {
    throw (new Error((("Forbidden value (" + this.figure) + ") on element figure.")));
  };
  output.writeVarShort(this.figure);
  if (this.pedestal < 0) {
    throw (new Error((("Forbidden value (" + this.pedestal) + ") on element pedestal.")));
  };
  output.writeVarShort(this.pedestal);
  output.writeBoolean(this.bound);
};

KrosmasterFigure.prototype.deserializeAs_KrosmasterFigure = function(input) {
  this.uid = input.readUTF();
  this.figure = input.readVarUhShort();
  if (this.figure < 0) {
    throw (new Error((("Forbidden value (" + this.figure) + ") on element of KrosmasterFigure.figure.")));
  };
  this.pedestal = input.readVarUhShort();
  if (this.pedestal < 0) {
    throw (new Error((("Forbidden value (" + this.pedestal) + ") on element of KrosmasterFigure.pedestal.")));
  };
  this.bound = input.readBoolean();
};

KrosmasterFigure.prototype.getTypeId = function() {
  return 397;
};

KrosmasterFigure.prototype.getClassName = function() {
  return 'KrosmasterFigure';
};

module.exports.id = 397;
module.exports.class = KrosmasterFigure;