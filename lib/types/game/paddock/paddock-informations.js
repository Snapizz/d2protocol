var PaddockInformations = function() {
  this.maxOutdoorMount = 0;
  this.maxItems = 0;
};



PaddockInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockInformations(output);
};

PaddockInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockInformations(input);
};

PaddockInformations.prototype.serializeAs_PaddockInformations = function(output) {
  if (this.maxOutdoorMount < 0) {
    throw (new Error((("Forbidden value (" + this.maxOutdoorMount) + ") on element maxOutdoorMount.")));
  };
  output.writeVarShort(this.maxOutdoorMount);
  if (this.maxItems < 0) {
    throw (new Error((("Forbidden value (" + this.maxItems) + ") on element maxItems.")));
  };
  output.writeVarShort(this.maxItems);
};

PaddockInformations.prototype.deserializeAs_PaddockInformations = function(input) {
  this.maxOutdoorMount = input.readVarUhShort();
  if (this.maxOutdoorMount < 0) {
    throw (new Error((("Forbidden value (" + this.maxOutdoorMount) + ") on element of PaddockInformations.maxOutdoorMount.")));
  };
  this.maxItems = input.readVarUhShort();
  if (this.maxItems < 0) {
    throw (new Error((("Forbidden value (" + this.maxItems) + ") on element of PaddockInformations.maxItems.")));
  };
};

PaddockInformations.prototype.getTypeId = function() {
  return 132;
};

PaddockInformations.prototype.getClassName = function() {
  return 'PaddockInformations';
};

module.exports.id = 132;
module.exports.class = PaddockInformations;