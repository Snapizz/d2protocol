var BaseMessage = require('../context/roleplay/alliance-informations.js').class,
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

AllianceFactSheetInformations.prototype.serializeAs_AllianceFactSheetInformations = function(output) {
  this.serializeAs_AllianceInformations(output);
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element creationDate.")));
  };
  output.writeInt(this.creationDate);
};

AllianceFactSheetInformations.prototype.deserializeAs_AllianceFactSheetInformations = function(input) {
  this.deserialize(input);
  this.creationDate = input.readInt();
  if (this.creationDate < 0) {
    throw (new Error((("Forbidden value (" + this.creationDate) + ") on element of AllianceFactSheetInformations.creationDate.")));
  };
};

AllianceFactSheetInformations.prototype.getTypeId = function() {
  return 421;
};

AllianceFactSheetInformations.prototype.getClassName = function() {
  return 'AllianceFactSheetInformations';
};

module.exports.id = 421;
module.exports.class = AllianceFactSheetInformations;