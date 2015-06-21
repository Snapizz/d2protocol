var TaxCollectorGuildInformations = function() {
    this.guild = new BasicGuildInformations();
};

require('util').inherits(TaxCollectorGuildInformations, require('./tax-collector-complementary-informations.js').class);

TaxCollectorGuildInformations.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorGuildInformations(output);
};

TaxCollectorGuildInformations.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorGuildInformations(input);
};

TaxCollectorGuildInformations.prototype.serializeAs_TaxCollectorGuildInformations = function(param1) {
    this.serializeAs_TaxCollectorComplementaryInformations(param1);
    this.guild.serializeAs_BasicGuildInformations(param1);
};

TaxCollectorGuildInformations.prototype.deserializeAs_TaxCollectorGuildInformations = function(param1) {
    this.deserializeAs_TaxCollectorComplementaryInformations(param1);
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
module.exports.getInstance = function() {
    return new TaxCollectorGuildInformations;
};