var TaxCollectorGuildInformations = function() {
  this.guild;
};



TaxCollectorGuildInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorGuildInformations(output);
};

TaxCollectorGuildInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorGuildInformations(input);
};

TaxCollectorGuildInformations.prototype.serializeAs_TaxCollectorGuildInformations = function(output) {
  this.serializeAs_TaxCollectorComplementaryInformations(param1);
  this.guild.serializeAs_BasicGuildInformations(param1);
};

TaxCollectorGuildInformations.prototype.deserializeAs_TaxCollectorGuildInformations = function(input) {
  this.deserialize(param1);
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(param1);
};

TaxCollectorGuildInformations.prototype.getTypeId = function() {
  return 446;
};

TaxCollectorGuildInformations.prototype.getClassName = function() {
  return 'TaxCollectorGuildInformations';
};

module.exports.id = 446;
module.exports.class = TaxCollectorGuildInformations;