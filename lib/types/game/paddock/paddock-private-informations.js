var PaddockPrivateInformations = module.exports = function() {
    this.guildInfo = new GuildInformations();

    return this;
};

require('util').inherits(PaddockPrivateInformations, require('./paddock-abandonned-informations.js'));

PaddockPrivateInformations.prototype.serialize = function(output) {
    this.serializeAs_PaddockPrivateInformations(output);
};

PaddockPrivateInformations.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockPrivateInformations(input);
};

PaddockPrivateInformations.prototype.serializeAs_PaddockPrivateInformations = function(param1) {
    this.serializeAs_PaddockAbandonnedInformations(param1);
    this.guildInfo.serializeAs_GuildInformations(param1);
};

PaddockPrivateInformations.prototype.deserializeAs_PaddockPrivateInformations = function(param1) {
    this.deserializeAs_PaddockAbandonnedInformations(param1);
    this.guildInfo = new GuildInformations();
    this.guildInfo.deserialize(param1);
};

PaddockPrivateInformations.prototype.getTypeId = function() {
    return 131;
};

PaddockPrivateInformations.prototype.getClassName = function() {
    return 'PaddockPrivateInformations';
};

module.exports.id = 131;