var BaseMessage = require('./alliance-fact-sheet-informations.js').class,
  util = require('util');

var AllianceFactSheetInformations = function() {
  this.creationDate = 0;
};

util.inherits(AllianceFactSheetInformations, BaseMessage);

AllianceFactSheetInformations.prototype.serialize = function(output) {
  this.serializeAs_AllianceFactSheetInformations(output);
};

AllianceFactSheetInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceFactSheetInformations(input);
};

AllianceFactSheetInformations.prototype.serializeAs_AllianceFactSheetInformations = function(param1) {
  this.serializeAs_AllianceInformations(param1);
  if (this.creationDate < 0) {
    throw new Error("Forbidden value (" + this.creationDate + ") on element creationDate.");
  } else {
    param1.writeInt(this.creationDate);
    return;
  }
};

AllianceFactSheetInformations.prototype.deserializeAs_AllianceFactSheetInformations = function(param1) {
  this.deserialize(param1);
  this.creationDate = param1.readInt();
  if (this.creationDate < 0) {
    throw new Error("Forbidden value (" + this.creationDate + ") on element of AllianceFactSheetInformations.creationDate.");
  } else {
    return;
  }
};

AllianceFactSheetInformations.prototype.getTypeId = function() {
  return 421;
};

AllianceFactSheetInformations.prototype.getClassName = function() {
  return 'AllianceFactSheetInformations';
};

module.exports.id = 421;
module.exports.class = AllianceFactSheetInformations;
module.exports.getInstance = function() {
  return new AllianceFactSheetInformations();
};