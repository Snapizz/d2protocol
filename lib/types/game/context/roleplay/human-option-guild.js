var HumanOptionGuild = function() {
    this.guildInformations = new GuildInformations();
};

require('util').inherits(HumanOptionGuild, require('./human-option.js').HumanOption);

module.exports = function() {
    return new HumanOptionGuild();
};

HumanOptionGuild.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionGuild(output);
};

HumanOptionGuild.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionGuild(input);
};

HumanOptionGuild.prototype.serializeAs_HumanOptionGuild = function(param1) {
    this.serializeAs_HumanOption(param1);
    this.guildInformations.serializeAs_GuildInformations(param1);
};

HumanOptionGuild.prototype.deserializeAs_HumanOptionGuild = function(param1) {
    this.deserializeAs_HumanOption(param1);
    this.guildInformations = new GuildInformations();
    this.guildInformations.deserialize(param1);
};

HumanOptionGuild.prototype.getTypeId = function() {
    return 409;
};

HumanOptionGuild.prototype.getClassName = function() {
    return 'HumanOptionGuild';
};

module.exports.id = 409;
module.exports.HumanOptionGuild = HumanOptionGuild;