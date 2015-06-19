var AdditionalTaxCollectorInformations = function() {
  this.collectorCallerName = "";
  this.date = 0;
};



AdditionalTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_AdditionalTaxCollectorInformations(output);
};

AdditionalTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AdditionalTaxCollectorInformations(input);
};

AdditionalTaxCollectorInformations.prototype.serializeAs_AdditionalTaxCollectorInformations = function(output) {
  output.writeUTF(this.collectorCallerName);
  if (this.date < 0) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element date.")));
  };
  output.writeInt(this.date);
};

AdditionalTaxCollectorInformations.prototype.deserializeAs_AdditionalTaxCollectorInformations = function(input) {
  this.collectorCallerName = input.readUTF();
  this.date = input.readInt();
  if (this.date < 0) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element of AdditionalTaxCollectorInformations.date.")));
  };
};

AdditionalTaxCollectorInformations.prototype.getTypeId = function() {
  return 165;
};

AdditionalTaxCollectorInformations.prototype.getClassName = function() {
  return 'AdditionalTaxCollectorInformations';
};

module.exports.id = 165;
module.exports.class = AdditionalTaxCollectorInformations;