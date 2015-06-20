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

PaddockInformations.prototype.serializeAs_PaddockInformations = function(param1) {
  if (this.maxOutdoorMount < 0) {
    throw new Error("Forbidden value (" + this.maxOutdoorMount + ") on element maxOutdoorMount.");
  } else {
    param1.writeVarShort(this.maxOutdoorMount);
    if (this.maxItems < 0) {
      throw new Error("Forbidden value (" + this.maxItems + ") on element maxItems.");
    } else {
      param1.writeVarShort(this.maxItems);
      return;
    }
  }
};

PaddockInformations.prototype.deserializeAs_PaddockInformations = function(param1) {
  this.maxOutdoorMount = param1.readVarUhShort();
  if (this.maxOutdoorMount < 0) {
    throw new Error("Forbidden value (" + this.maxOutdoorMount + ") on element of PaddockInformations.maxOutdoorMount.");
  } else {
    this.maxItems = param1.readVarUhShort();
    if (this.maxItems < 0) {
      throw new Error("Forbidden value (" + this.maxItems + ") on element of PaddockInformations.maxItems.");
    } else {
      return;
    }
  }
};

PaddockInformations.prototype.getTypeId = function() {
  return 132;
};

PaddockInformations.prototype.getClassName = function() {
  return 'PaddockInformations';
};

module.exports.id = 132;
module.exports.class = PaddockInformations;
module.exports.getInstance = function() {
  return new PaddockInformations();
};