var BaseMessage = require('./tax-collector-complementary-informations.js').class,
  util = require('util');

var TaxCollectorGuildInformations = function() {
  this.guild;
};

util.inherits(TaxCollectorGuildInformations, BaseMessage);

TaxCollectorGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorGuildInformations(output);
};

TaxCollectorGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorGuildInformations(input);
};

TaxCollectorGuildInformations.prototype.serializeAs_TaxCollectorGuildInformations = function(output) {
  this.serializeAs_TaxCollectorComplementaryInformations(output);
  this.guild.serializeAs_BasicGuildInformations(output);
};

TaxCollectorGuildInformations.prototype.deserializeAs_TaxCollectorGuildInformations = function(input) {
  this.deserialize(input);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(input);
};

TaxCollectorGuildInformations.prototype.getTypeId = function() {
  return 446;
};

TaxCollectorGuildInformations.prototype.getClassName = function() {
  return 'TaxCollectorGuildInformations';
};

module.exports.id = 446;
module.exports.class = TaxCollectorGuildInformations;