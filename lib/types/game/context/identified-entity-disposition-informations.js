var BaseMessage = require('./entity-disposition-informations.js').class,
  util = require('util');

var IdentifiedEntityDispositionInformations = function() {
  this.id = 0;
};

util.inherits(IdentifiedEntityDispositionInformations, BaseMessage);

IdentifiedEntityDispositionInformations.prototype.serialize = function(output) {
  this.serializeAs_IdentifiedEntityDispositionInformations(output);
};

IdentifiedEntityDispositionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_IdentifiedEntityDispositionInformations(input);
};

IdentifiedEntityDispositionInformations.prototype.serializeAs_IdentifiedEntityDispositionInformations = function(output) {
  this.serializeAs_EntityDispositionInformations(output);
  output.writeInt(this.id);
};

IdentifiedEntityDispositionInformations.prototype.deserializeAs_IdentifiedEntityDispositionInformations = function(input) {
  this.deserialize(input);
  this.id = input.readInt();
};

IdentifiedEntityDispositionInformations.prototype.getTypeId = function() {
  return 107;
};

IdentifiedEntityDispositionInformations.prototype.getClassName = function() {
  return 'IdentifiedEntityDispositionInformations';
};

module.exports.id = 107;
module.exports.class = IdentifiedEntityDispositionInformations;