var HouseInformationsExtended = module.exports = function() {
    this.guildInfo = new GuildInformations();

    return this;
};

require('util').inherits(HouseInformationsExtended, require('./house-informations.js'));

HouseInformationsExtended.prototype.serialize = function(output) {
    this.serializeAs_HouseInformationsExtended(output);
};

HouseInformationsExtended.prototype.deserialize = function(input) {
    this.deserializeAs_HouseInformationsExtended(input);
};

HouseInformationsExtended.prototype.serializeAs_HouseInformationsExtended = function(param1) {
    this.serializeAs_HouseInformations(param1);
    this.guildInfo.serializeAs_GuildInformations(param1);
};

HouseInformationsExtended.prototype.deserializeAs_HouseInformationsExtended = function(param1) {
    this.deserializeAs_HouseInformations(param1);
    this.guildInfo = new GuildInformations();
    this.guildInfo.deserialize(param1);
};

HouseInformationsExtended.prototype.getTypeId = function() {
    return 112;
};

HouseInformationsExtended.prototype.getClassName = function() {
    return 'HouseInformationsExtended';
};

module.exports.id = 112;