var BaseMessage = require('./additional-tax-collector-informations.js').class,
  util = require('util');

var AdditionalTaxCollectorInformations = function() {
  this.collectorCallerName = "";
  this.date = 0;
};

util.inherits(AdditionalTaxCollectorInformations, BaseMessage);

AdditionalTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_AdditionalTaxCollectorInformations(output);
};

AdditionalTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AdditionalTaxCollectorInformations(input);
};

AdditionalTaxCollectorInformations.prototype.serializeAs_AdditionalTaxCollectorInformations = function(param1) {
  param1.writeUTF(this.collectorCallerName);
  if (this.date < 0) {
    throw new Error("Forbidden value (" + this.date + ") on element date.");
  } else {
    param1.writeInt(this.date);
    return;
  }
};

AdditionalTaxCollectorInformations.prototype.deserializeAs_AdditionalTaxCollectorInformations = function(param1) {
  this.collectorCallerName = param1.readUTF();
  this.date = param1.readInt();
  if (this.date < 0) {
    throw new Error("Forbidden value (" + this.date + ") on element of AdditionalTaxCollectorInformations.date.");
  } else {
    return;
  }
};

AdditionalTaxCollectorInformations.prototype.getTypeId = function() {
  return 165;
};

AdditionalTaxCollectorInformations.prototype.getClassName = function() {
  return 'AdditionalTaxCollectorInformations';
};

module.exports.id = 165;
module.exports.class = AdditionalTaxCollectorInformations;
module.exports.getInstance = function() {
  return new AdditionalTaxCollectorInformations();
};